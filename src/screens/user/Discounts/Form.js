import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import _ from '@services/i18n';
import Input from '@components/ui/Input';
import Preloader from '@components/PreLoader';
import {SelectTree, MediaPicker, Discount, PromoTimes} from '@components';
import {
  servicesStateUpdate,
  addPromoPhoto,
  deletePromoPhoto,
} from '@actions/services';

const DiscountForm = ({navigation}) => {
  const {
    promoId,
    promoName,
    promoDescription,
    promoPrice,
    promoPriceOld,
    promoDiscount,
    isDiscount,
    promoDateFrom,
    promoDateTo,
    isPromoDate,
    loading,
    promoCategoriesStr,
    promosCats,
    promoPhotos,
  } = useSelector((state) => state.services);
  const dispatch = useDispatch();


  useEffect(() => {
    return () =>
      dispatch(
        servicesStateUpdate({
          payload: {
            promoId: null,
            promoName: '',
            promoDescription: '',
            promoPrice: '',
            promoPriceOld: '',
            promoDiscount: 0,
            isDiscount: false,
            promoDateFrom: '',
            promoDateTo: '',
            isPromoDate: false,
            promoModeration: '',
            promoStatus: '',
            promoCategoriesStr: '',
            promoCatsSelected: [],
            promoPhotos: [],
          },
        }),
      );
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  const stateUpdate = (payload) => {
    dispatch(servicesStateUpdate({payload}));
  };

  const addPhoto = (photo) => {
    dispatch(addPromoPhoto(photo[0]));
  };

  const deletePhoto = (photo) => {
    dispatch(deletePromoPhoto(photo));
  };

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <Input
        label="promo_name"
        value={promoName}
        setData={(val) =>
          dispatch(servicesStateUpdate({payload: {promoName: val}}))
        }
      />

      <SelectTree
        label="category"
        selected={promoCategoriesStr}
        onPress={() => navigation.navigate('PromoCategories')}
        data={promosCats}
      />

      <Discount
        isDiscount={isDiscount}
        discount={promoDiscount}
        price={promoPrice}
        priceOld={promoPriceOld}
        update={stateUpdate}
      />

      <View style={[styles.legend, {marginTop: 15}]}>
        <Text style={styles.legendText}>{_.t('promoDescription')}</Text>
      </View>
      <TextInput
        style={styles.textarea}
        multiline={true}
        underlineColorAndroid="transparent"
        numberOfLines={5}
        onChangeText={(val) =>
          dispatch(servicesStateUpdate({payload: {promoDescription: val}}))
        }
        value={promoDescription}
      />

      <PromoTimes
        dateFrom={promoDateFrom}
        dateTo={promoDateTo}
        update={stateUpdate}
        isPromo={isPromoDate}
      />

      <MediaPicker
        addPhoto={addPhoto}
        handleDelete={deletePhoto}
        styles={styles.media}
        photos={promoPhotos}
        legend="promoPhoto"
        limit={1}
      />
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  radioBtn: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  txt: {
    color: '#7C7F84',
    fontSize: 14,
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    paddingBottom: 10,
  },
  input: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 40,
    width: 100,
    padding: 5,
    marginLeft: 5,
  },
  inputItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legend: {
    paddingBottom: 10,
  },
  legendText: {
    color: '#7C7F84',
    fontSize: 13,
  },
  textarea: {
    borderWidth: 1,
    borderColor: '#D4D6DF',
    padding: 5,
    height: 100,
    color: '#566378',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'top',
  },
  textareaShort: {
    borderWidth: 1,
    borderColor: '#D4D6DF',
    padding: 5,
    height: 60,
    color: '#566378',
    fontSize: 14,
    lineHeight: 17,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  media: {marginVertical: 10, marginTop: 10},
});

export default DiscountForm;
