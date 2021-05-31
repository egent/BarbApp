import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/ui/Input';
import SelectInput from '../../../components/ui/SelectInput';
import PhoneInputs from '../../../components/Points/PhoneInputs';
import Schedule from '../../../components/Points/Schedule/Schedule';
import ValidationAlertRedux from '../../../components/modal/ValidationAlertRedux';
import Preloader from '../../../components/PreLoader';
import WorkspaceBreaks from '../../../components/Points/WorkspaceBreaks';
import {
  setForm,
  beautyRoomsRequest,
  // workplaceAddRequest,
} from '../../../actions/user';
import _ from '../../../services/i18n';

const WorkspaceAdd = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    loading,
    info,
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

  // const saveData = () => {
   
  //   if (beauty_name.length > 0 && workspace_address.length > 0) {
  //     let payload = {
  //       salon_name: beauty_name,
  //       street: workspace_address,
  //       workplace: '2',
  //       id: '-1',
  //       city_id: info.city.id,
  //     };

  //     if (workspace_phones.length > 0) {
  //       payload = {...payload, phones: workspace_phones}
  //     }

  //     console.log('payload', beauty_name)

  //     // todo add new field

  //     // dispatch(workplaceAddRequest({
  //     //   navigation,
  //     //   payload
  //     // }));
  //   } else {
  //     setVisibleValidationModal(true); // 
  //   }
  // };

  const setBeautyName = (name) => {
    dispatch(setForm({payload: {beauty_name: name}}));
    dispatch(beautyRoomsRequest()); // todo autocomplete view ...


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

  if (loading) {
    return <Preloader />;
  }

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
      <View>
        <WorkspaceBreaks />
        <TouchableOpacity onPress={() => navigation.navigate('ScheduleBreak')}>
          <Text style={styles.addBreak}>{_.t('break_add')}</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginVertical: 50}} />

     
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
