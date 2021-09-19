import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import ModalAlert from '@components/modal/Alert';
import {setValidationAlert} from '@actions/user';
import {serviceAddRequest, serviceUpdateRequest} from '@actions/services';

const HeaderRightService = ({navigation}) => {
  const {
    serviceId,
    serviceName,
    serviceCategorySelected,
    priceFrom,
    duration,
    price,
    description,
    descriptionShort,
    serviceCategoryPhotos,
    serviceCategoryPhotosRemove,
  } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSave = () => {
    if (
      serviceName.length > 0 &&
      serviceCategorySelected.length > 0 &&
      duration.length > 0 &&
      price.length > 0 &&
      description.length > 0 &&
      descriptionShort.length > 0
      // serviceCategoryPhotos.length
    ) {
      const images = [];
      serviceCategoryPhotos.map((photo, index) => {
        if (photo.base64 !== undefined) {
          images.push({
            id: index,
            src: `data:${photo.type};base64,${photo.base64}`,
            name: '',
            status: 'new',
            rotate: '0',
            order_column: '0',
          });
        }
      });

      serviceCategoryPhotosRemove.map((photo) => {
        images.push({
          ...photo,
          status: 'deleted',
        });
      });

      const cats = [];
      serviceCategorySelected.map((cat) => {
        cats.push(cat.id);
      });

      let payload = {
        name: serviceName,
        duration,
        cats,
        anons: descriptionShort,
        description,
        price_from: priceFrom ? 'on' : 'off',
        razdel: '',
        price_by: 'p',
        price,
      };

      if (images.length > 0) {
        payload = {...payload, images};
      }

      if (serviceId) {
        payload = {...payload, procedure_id: serviceId};
        dispatch(
          serviceUpdateRequest({
            data: payload,
            navigation,
          }),
        );
      } else {
        dispatch(
          serviceAddRequest({
            data: payload,
            navigation,
          }),
        );
      }
    } else {
      dispatch(setValidationAlert({visible: true}));
    }
  };

  const toggleAlert = () => {
    setAlertVisible(!alertVisible);
  };

  return (
    <View style={{flexDirection: 'row'}}>
      {/* {place !== undefined && (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            
          }}
          hitSlop={{top: 50, bottom: 50, left: 50, right: 0}}>
          <Icon name="delete" color="#000" size={21} />
        </TouchableOpacity>
      )} */}
      <TouchableOpacity
        style={{paddingRight: 10}}
        onPress={handleSave}
        hitSlop={{top: 50, bottom: 50, left: 0, right: 50}}>
        <Icon name="done" color="#000" size={21} />
      </TouchableOpacity>
      <ModalAlert
        visible={alertVisible}
        toggle={toggleAlert}
        title="delete_workplace"
        onPress={() => {}}
      />
    </View>
  );
};

export default HeaderRightService;
