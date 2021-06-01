import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Input from '../../../components/ui/Input';
import SelectInput from '../../../components/ui/SelectInput';
import PhoneInputs from '../../../components/Points/PhoneInputs';
import Schedule from '../../../components/Points/Schedule/Schedule';
import Preloader from '../../../components/PreLoader';
import WorkspaceBreaks from '../../../components/Points/WorkspaceBreaks';
import {
  setForm,
  beautyRoomsRequest,
  setWorkplaceType,
} from '../../../actions/user';
import _ from '../../../services/i18n';

const WorkspaceUpdate = ({navigation, route}) => {
  const type_id = route.params.type_id;
  const place = route.params.place;

  const dispatch = useDispatch();
  const {
    loading,
    // beauty_name,
    // beauty_data, // todo ???
    city_info,
    // district_select,
    // sub_district_select_string,
    // metro_select_string,
    // sub_district,
    // metro,
    // workspace_address,
    // workspace_address_comment,
    // district_select_in_client_string,
  } = useSelector((state) => state.user);

  const type_id = route.params.type_id;

  // useEffect(() => {
  //   dispatch(setWorkplaceType({type_id}));
  // }, []);

  const setBeautyName = (name) => {
    // dispatch(setForm({payload: {beauty_name: name}}));
    // dispatch(beautyRoomsRequest({term: name})); // todo autocomplete view ...
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
          sub_district_select_string: '',
          metro_select_string: '',
          metro_select_array: null,
        },
      }),
    );
  };

  const setDistrictsClient = (districts) => {
    const districtsStr = [];
    districts.map((item) => {
      districtsStr.push(item.name);
    });

    dispatch(
      setForm({
        payload: {
          district_select_in_client: districts,
          district_select_in_client_string: districtsStr.join(', '),
          
        },
      }),
    );
  }

  const setSubDistricts = (subDistrict) => {
    const sDistrArr = [];

    subDistrict.map((item) => {
      sDistrArr.push(item.name);
    });

    dispatch(
      setForm({
        payload: {
          sub_district_select: subDistrict,
          sub_district_select_string: sDistrArr.join(', '),
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
      {type_id === 2 && (
        <View>
          <Input
            label="beauty_room_name"
            value={beauty_name}
            setData={setBeautyName}
            required={true}
          />
        </View>
      )}

      {/* {type_id !== 3 ? (
        <SelectInput
          label="district"
          data={city_info?.districts}
          saveData={setDistricts}
          value={district_select?.name}
          popupTitle="district"
        />
      ) : (
        <SelectInput
          label="districts"
          data={city_info?.districts}
          saveData={setDistrictsClient}
          value={district_select_in_client_string}
          popupTitle="districts"
          isSelectSingle={false}
        />
      )}

      {(sub_district !== null && type_id !== 3) && (
        <SelectInput
          label="sub_district"
          data={sub_district}
          saveData={setSubDistricts}
          value={sub_district_select_string}
          popupTitle="sub_district"
          isSelectSingle={false}
        />
      )}

      {(metro !== null && type_id !== 3) && (
        <SelectInput
          label="metro"
          data={metro}
          saveData={setMetro}
          value={metro_select_string}
          isSelectSingle={false}
          popupTitle="metro"
        />
      )}

      {(type_id === 1 || type_id === 2) && (
        <Input
          label={type_id === 2 ? 'workspace_address' : 'in_house_address'}
          value={workspace_address}
          setData={setWorkspaceAddress}
        />
      )}

      <Input
        label={
          type_id === 3 ? 'client_address_comment' : 'workspace_address_comment'
        }
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
      </View> */}

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

export default WorkspaceUpdate;
