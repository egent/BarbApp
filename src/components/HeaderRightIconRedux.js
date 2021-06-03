import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import ModalAlert from '../components/modal/Alert';
import {workplaceDeleteRequest} from '../actions/user';

const HeaderRightIconRedux = ({onPress, icon, navigation, place}) => {
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);
  const [addressId, setAddressId] = useState(null);

  const deleteAddress = (address_id) => {
    setAlertVisible(true);
    setAddressId(address_id);
  };

  const toggleAlert = () => {
    setAlertVisible(!alertVisible);
  };

  const _deleteAddress = () => {
    dispatch(workplaceDeleteRequest({address_id: addressId, navigation}));
    setAlertVisible(false);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {place !== undefined && (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            deleteAddress(place.id);
          }}
          hitSlop={{top: 50, bottom: 50, left: 50, right: 0}}>
          <Icon name="delete" color="#000" size={21} />
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={{paddingRight: 10}}
        onPress={() => {
          dispatch(onPress({navigation}));
        }}
        hitSlop={{top: 50, bottom: 50, left: 0, right: 50}}>
        <Icon name={icon} color="#000" size={21} />
      </TouchableOpacity>
      <ModalAlert
        visible={alertVisible}
        toggle={toggleAlert}
        title="delete_workplace"
        onPress={_deleteAddress}
      />
    </View>
  );
};

export default HeaderRightIconRedux;
