import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ImagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Preloader from '../../components/PreLoader';
import DateSelector from '../../components/ui/DateSelector';
// import DateMonthSelector from '../../components/ui/DateMonthSelector';
import ValidationAlert from '../../components/modal/ValidationAlert';
import _ from '../../services/i18n';
import {
  uploadPhotoRequest,
  profileDescriptionUpdateRequest,
} from '../../actions/user';
import user from '../../reducers/user';

const {width, height} = Dimensions.get('window');

const sexList = [
  {
    id: 1,
    title: _.t('male'),
    value: 'm',
  },
  {
    id: 2,
    title: _.t('female'),
    value: 'f',
  },
];

const photoTxtDesc = _.t('select_photo');
const options = {
  title: photoTxtDesc,
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  cancelButtonTitle: _.t('cancel'),
  takePhotoButtonTitle: _.t('take_photo'),
  chooseFromLibraryButtonTitle: _.t('open_gallery'),
};

const ProfileDescription = ({navigation}) => {
  const {
    loading,
    profileDescription: {image, description, gender, birthday, skill},
  } = useSelector((state) => state.user);
  const [fileLoading, setFileLoading] = useState(false);
  const [avatar, setAvatar] = useState(image);
  const [userDescription, setUsrDescription] = useState(description);
  // const [userGender, setUserGender] = useState(gender);
  // const [userBirthday, setUserBirthday] = useState(birthday);
  // const [userSkill, setUserSkill] = useState(skill);

  const [key, setKey] = useState(Math.random());
  const [form, setForm] = useState({
    description,
    gender,
    birthday,
    skill,
  });

  const [visibleValidationModal, setVisibleValidationModal] = useState(false);

  const dispatch = useDispatch();

  const setUserDescription = (data) => {
    const userData = form;
    userData.description = data;
    setForm(userData);
    setUsrDescription(data);
    // setKey(Math.random());
  };

  const setUserGender = (data) => {
    const userData = form;
    userData.gender = data;
    setForm(userData);
    setKey(Math.random());
  };

  const setUserBirthday = (data) => {
    const userData = form;
    userData.birthday = data;
    setForm(userData);
    setKey(Math.random());
  };

  const setUserSkill = (data) => {
    const userData = form;
    userData.skill = data;
    setForm(userData);
    setKey(Math.random());
  };

  const saveData = () => {
    if (form.description.length === 0) {
      setVisibleValidationModal(true);
    } else {
      sendData();
    }
  };

  const sendData = () => {
    setVisibleValidationModal(false);
    dispatch(
      profileDescriptionUpdateRequest({
        navigation,
        payload: form,
      }),
    );
  };

  useEffect(() => {
    navigation.setParams({
      onPress: saveData,
    });
  }, []);

  const toggleValidationModal = () => {
    setVisibleValidationModal(!visibleValidationModal);
  };

  const handlePhotoUpdate = () => {
    setFileLoading(true);

    ImagePicker.launchImageLibrary(options, (response) => {
      // console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        // console.log(response);

        const {data, isVertical, originalRotation} = response;
        dispatch(
          uploadPhotoRequest({
            image: 'data:image/jpeg;base64,' + data,
            isVertical, 
            originalRotation
          }),
        );

        // console.log(response)

        setAvatar(response.uri);
      }
      setFileLoading(false);
    });
  };

  if (fileLoading || loading) {
    return <Preloader />;
  }

  return (
    <>
    <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
      <ValidationAlert
        title="fill_fields"
        visible={visibleValidationModal}
        toggle={toggleValidationModal}
        btnOutHandler={sendData}
      />
      <View style={{height, paddingBottom: 200}} key={key}>
        <View style={styles.headerContainer}>
          <View style={styles.box} />
          <TouchableOpacity
            onPress={handlePhotoUpdate}
            style={styles.avatarContainer}>
            {avatar !== null ? (
              <Image source={{uri: avatar}} style={styles.avatar} />
            ) : (
              <View style={styles.iconContainer}>
                <Icon name="person" color="#fff" size={45} />
              </View>
            )}
            <View style={styles.info}>
              <Text style={styles.avatarTitle}>{_.t('your_photo')}</Text>
              <Text onPress={handlePhotoUpdate} style={styles.avatarSubTitle}>
                {_.t(avatar !== null ? 'change_photo' : 'upload_photo')}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.box} />
        </View>
        <View style={styles.content}>
          <Text style={styles.h3}>{_.t('about_textarea')}</Text>
          <TextInput
            style={styles.textarea}
            multiline={true}
            underlineColorAndroid="transparent"
            numberOfLines={5}
            onChangeText={setUserDescription}
            value={userDescription}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.h3}>{_.t('sex')}</Text>
          {sexList.map(({title, value, id}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setUserGender(value);
                }}
                key={`sex-item-${id}`}
                style={styles.itemList}>
                <Icon
                  name={
                    form.gender === value
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  color={form.gender === value ? '#6DB7E8' : '#AFAFAF'}
                  size={24}
                />
                <Text style={styles.itemText}>{title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <DateSelector
          title="date_birth"
          removeDateTitle="delete_birth_day"
          value={form.birthday}
          setDate={setUserBirthday}
        />

        <DateSelector
          title="work_experience"
          removeDateTitle="delete_experience_title"
          value={form.skill}
          setDate={setUserSkill}
          formatYearsAgo={true}
        />

      {/* <DateMonthSelector
          title="work_experience"
          removeDateTitle="delete_experience_title"
          value={form.skill}
          setDate={setUserSkill}
          formatYearsAgo={true}
          setDateTitle="set_experience_date"
        /> */}
      
      </View>
    </KeyboardAwareScrollView>
   
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    marginBottom: 30,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6DB7E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  box: {
    flex: 1,
    paddingTop: 10,
  },
  info: {
    paddingTop: 5,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatarTitle: {
    fontSize: 12,
    color: '#ACACAC',
    textAlign: 'center',
    marginVertical: 5,
  },
  avatarSubTitle: {
    fontSize: 14,
    color: '#6DB7E8',
    textAlign: 'center',
  },
  textContainer: {
    marginHorizontal: 10,
  },
  h3: {
    fontSize: 14,
    color: '#B6B8BC',
    marginBottom: 5,
    textAlign: 'left',
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#B6B8BC',
    padding: 5,
    height: 150,
    color: '#566378',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'top',
  },
  content: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  itemList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  itemText: {
    color: '#7C7F84',
    fontSize: 14,
    paddingLeft: 10,
  },
});

export default ProfileDescription;
