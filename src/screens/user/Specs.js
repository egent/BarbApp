import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';
import {specsSetRequest} from '../../actions/user';

const SpecsScreen = ({navigation}) => {
  const {specs} = useSelector((state) => state.user);
  const [specsList, setSpecs] = useState(specs);
  const [other, setOther] = useState('');

  const dispatch = useDispatch();

  const saveData = () => {
    const specs = [];
    let mainSpecId = null;
    let otherDesc = '';

    specsList.map((s) => {
      if (s.active === true) {
        specs.push(s.id);
      }
      if (s.active === true && s.main) {
        mainSpecId = s.id;
      }
      if (s.other_desc !== undefined) {
        otherDesc = s.other_desc;
      }
    });

    const payload = {specs};

    if (mainSpecId !== null) {
      Object.assign(payload, {main_spec: mainSpecId});
    }

    if (otherDesc.length > 0) {
      Object.assign(payload, {other_spec: otherDesc});
    }

    dispatch(specsSetRequest({payload, navigation}));
  };

  const setActive = (id) => {
    const specs = [];
    specsList.map((spec) => {
      if (spec.id === id) {
        spec.active = !spec.active;
      }
      specs.push(spec);
    });
    setSpecs(specs);
  };

  const setMain = (id) => {
    const specs = [];
    specsList.map((spec) => {
      spec.main = false;
      if (spec.id === id) {
        spec.main = true;
      }
      specs.push(spec);
    });
    setSpecs(specs);
  };

  useEffect(() => {
    navigation.setParams({
      onPress: saveData,
    });
    specsList.map((spec) => {
      if (spec.id === 0 && spec.other_spec !== null) {
        setOther(spec.other_spec);
      }
    });
  }, []);

  useEffect(() => {
    const specs = [];
    specsList.map((spec) => {
      if (spec.id === 0) {
        spec.other_desc = other;
      }
      specs.push(spec);
    });
    setSpecs(specs);
  }, [other]);

  const isOtherCheck = () => {
    let result = false;
    specsList.map(({id, active}) => {
      if (id === 0) {
        result = active;
      }
    });
    return result;
  };

  return (
    <KeyboardAwareScrollView>
      <FlatList
        style={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.head}>
            <Text style={styles.headTxt}>{_.t('specs_title')}</Text>
            <Text style={styles.headTxt}>{_.t('main')}</Text>
          </View>
        }
        ListFooterComponent={
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}} />
            <View style={[styles.textContainer, {flex: 8}]}>
              {isOtherCheck() ? (
                <>
                  <TextInput
                    style={styles.other}
                    multiline={true}
                    underlineColorAndroid="transparent"
                    numberOfLines={5}
                    onChangeText={setOther}
                    value={other}
                    keyboardType="default"
                    returnKeyType="done"
                    blurOnSubmit={true}
                  />
                  <Text style={styles.help}>{_.t('other_input_help')}</Text>
                </>
              ) : (
                <View style={{marginTop: 200}} />
              )}
            </View>
          </View>
        }
        data={specsList}
        renderItem={({item}) => {
          const {active, name, main, id} = item;
          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() => setActive(id)}
                style={styles.active}
                hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}>
                <Icon
                  name={active ? 'check-box' : 'check-box-outline-blank'}
                  color={active ? '#6DB7E8' : '#AFAFAF'}
                  size={24}
                />
              </TouchableOpacity>
              <View
                style={[
                  styles.titleContainer,
                  {borderBottomWidth: id !== 0 ? 1 : 0},
                ]}>
                <Text style={styles.title}>{name}</Text>
                {active && (
                  <TouchableOpacity
                    onPress={() => {
                      setMain(id);
                    }}
                    hitSlop={{top: 25, bottom: 25, left: 25, right: 25}}>
                    <Icon
                      name={
                        main ? 'radio-button-checked' : 'radio-button-unchecked'
                      }
                      color={main ? '#6DB7E8' : '#AFAFAF'}
                      size={24}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        }}
        keyExtractor={({id}) => `spec-${id}`}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  headTxt: {
    color: '#7C7F84',
    fontSize: 14,
  },
  itemContainer: {
    flexDirection: 'row',
  },
  active: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    borderColor: '#B4B4B4',
    flex: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 44,
  },
  title: {
    color: '#7C7F84',
  },
  content: {
    margin: 10,
  },
  other: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 60,
    marginVertical: 10,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  help: {
    marginBottom: 10,
    color: '#B3B9BF',
    fontSize: 12,
  },
  itemList: {
    flexDirection: 'row',
  },
});

export default SpecsScreen;
