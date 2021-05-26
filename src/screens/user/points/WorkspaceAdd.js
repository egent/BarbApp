import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/ui/Input';
import SelectInput from '../../../components/ui/SelectInput';
import PhoneInputs from '../../../components/Points/PhoneInputs';
import Schedule from '../../../components/Points/Schedule/Schedule';
import ValidationAlert from '../../../components/modal/ValidationAlert';
import {setForm, beautyRoomsRequest} from '../../../actions/user';
import _ from '../../../services/i18n';

const WorkspaceAdd = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    beauty_name,
    beauty_data,
    city_info,
    district_select,
    sub_district_select,
    metro_select_string,
    sub_district,
    metro,
    workspace_address,
    workspace_address_comment,
    workspace_phones, // todo ??
  } = useSelector((state) => state.user);
  const [visibleValidationModal, setVisibleValidationModal] = useState(false);

  const saveData = () => {
    if (beauty_name.length > 0 && workspace_address.length > 0) {
      // todo save data
    } else {
      setVisibleValidationModal(true);
    }
  };

  useEffect(() => {
    navigation.setParams({
      onPress: saveData,
    });
  }, []);

  const setBeautyName = (name) => {
    dispatch(setForm({payload: {beauty_name: name}}));

    dispatch(beautyRoomsRequest()); // todo autocomplete view ...
  };


  const toggleValidationModal = () => {
    setVisibleValidationModal(!visibleValidationModal);
  };

  const setDistricts = (district) => {
    let subDistrict = null;
    let metro = null;

    city_info.districts.map((d) => {
      if (d.id === district.id) {
        subDistrict = d.microdistricts;
        metro = d.metros;
      }
    });

    dispatch(
      setForm({
        payload: {
          district_select: district,
          sub_district: subDistrict,
          metro,
          sub_district_select: null,
          metro_select_string: '',
          metro_select_array: null,
        },
      }),
    );
  };

  const setSubDistricts = (subDistrict) => {
    dispatch(
      setForm({
        payload: {
          sub_district_select: subDistrict,
          metro_select_string: '',
          metro_select_array: null,
        },
      }),
    );
  };

  const setMetro = (metroSelected) => {
    const metroArr = [];

    metroSelected.map((m) => {
      metroArr.push(m.name);
    });

    dispatch(
      setForm({
        payload: {
          metro_select_string: metroArr.join(', '),
          metro_select_array: metroSelected,
        },
      }),
    );
  };

  const setWorkspaceAddress = (address) => {
    dispatch(setForm({payload: {workspace_address: address}}));
  };

  const setWorkspaceAddressComment = (comment) => {
    dispatch(setForm({payload: {workspace_address_comment: comment}}));
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <View>
        <Input
          label="beauty_room_name"
          value={beauty_name}
          setData={setBeautyName}
          required={true}
        />
      </View>

      <SelectInput
        label="district"
        data={city_info?.districts}
        saveData={setDistricts}
        value={district_select?.name}
        popupTitle="district"
      />

      {sub_district !== null && (
        <SelectInput
          label="sub_district"
          data={sub_district}
          saveData={setSubDistricts}
          value={sub_district_select?.name}
          popupTitle="sub_district"
        />
      )}

      {metro !== null && (
        <SelectInput
          label="metro"
          data={metro}
          saveData={setMetro}
          value={metro_select_string}
          isSelectSingle={false}
          popupTitle="metro"
        />
      )}

      <Input
        label="workspace_address"
        value={workspace_address}
        setData={setWorkspaceAddress}
        required={true}
      />

      <Input
        label="workspace_address_comment"
        value={workspace_address_comment}
        setData={setWorkspaceAddressComment}
      />

      <PhoneInputs />

      <Schedule />

      <Text style={styles.titleBreak}>{_.t('breaks')}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ScheduleBreak')}>
        <Text style={styles.addBreak}>{_.t('break_add')}</Text>
      </TouchableOpacity>

      <View style={{marginVertical: 50}} />

      <ValidationAlert
        title="fill_fields"
        visible={visibleValidationModal}
        toggle={toggleValidationModal}
        btnOutHandler={() => {
          setVisibleValidationModal(false);
          navigation.goBack();
        }}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  titleBreak: {
    color: '#B6B8BC',
    fontSize: 14,
  },
  addBreak: {
    color: '#6DB7E8',
    fontSize: 14,
    marginVertical: 5,
  },
});

export default WorkspaceAdd;
