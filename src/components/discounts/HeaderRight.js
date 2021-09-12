import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import ModalAlert from '@components/modal/Alert';
import {setValidationAlert} from '@actions/user';
import {promoAddRequest, promoUpdateRequest} from '@actions/services';
import Preloader from '@components/PreLoader';

const HeaderRightDiscount = ({navigation}) => {
  const {
    promoId,
    promoName,
    promoDescription,
    promoPrice,
    promoPriceOld,
    promoDiscount,
    promoDateFrom,
    promoDateTo,
    isPromoDate,
    loading,
    promoCategoriesStr,
    promoCatsSelected,
    promosCats,
    promoPhotos,
  } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSave = () => {
    if (
      promoName?.length > 0 &&
      promoCatsSelected?.length > 0 &&
      promoDescription?.length > 0 &&
      // promoDateFrom?.length > 0 &&
      promoPhotos?.length > 0
    ) {
      const images = [];
      promoPhotos.map((photo, index) => {
        images.push({
          id: index,
          scr: `data:${photo.type};base64,${photo.data}`,
        });
      });

      const cats = [];
      promoCatsSelected.map((cat) => {
        cats.push(cat.id);
      });

      const date_from =
        promoDateFrom.length > 0
          ? promoDateFrom
          : moment().format('DD.MM.YYYY');

      let payload = {
        name: promoName,
        date_from,
        cats,
        description: promoDescription,
        photo: images[0],
        discount: promoDiscount,
      };

      if (promoPrice?.length > 0) {
        payload = {...payload, price: promoPrice};
      }

      if (promoPriceOld?.length > 0) {
        payload = {...payload, price_old: promoPriceOld};
      }

      if (isPromoDate) {
        payload = {...payload, date_to: promoDateTo};
      } else {
        payload = {...payload, date_free: 1};
      }

      if (promoId !== null) {
        payload = {...payload, promo_id: promoId};
        dispatch(
          promoUpdateRequest({
            data: payload,
            navigation,
          }),
        );
      } else {
        dispatch(
          promoAddRequest({
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

export default HeaderRightDiscount;
