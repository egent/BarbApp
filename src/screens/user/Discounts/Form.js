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
import {SelectTree, MediaPicker, Discount} from '@components';
import {servicesStateUpdate} from '@actions/services';

const DiscountForm = ({navigation}) => {
  const {
    promoId,
    promoName,
    promoPrice,
    promoPriceOld,
    promoDiscount,
    promoDateFrom,
    promoDateTo,
    promoDateFree,
    promoModeration,
    promoStatus,
    loading,
    promoCategoriesStr,
    promosCats,
  } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    return () =>
      dispatch(
        servicesStateUpdate({
          payload: {
            promoId: null,
            promoName: '',
            promoPrice: '',
            promoPriceOld: '',
            promoDiscount: false,
            promoDateFrom: '',
            promoDateTo: '',
            promoDateFree: '',
            promoModeration: '',
            promoStatus: '',
            promoCategoriesStr: '',
            promoCatsSelected: [],
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
        isDiscount={promoDiscount}
        price={promoPrice}
        priceOld={promoPriceOld}
        update={stateUpdate}
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
});

export default DiscountForm;
