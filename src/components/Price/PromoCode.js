import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const PromoCode = () => {
  const dispatch = useDispatch();
  const {priceDescription} = useSelector((state) => state.user);
  const active = !!priceDescription.bonus_on;
  const price = priceDescription.bonus_value;

  const updateActive = () => {
    const description = JSON.parse(JSON.stringify(priceDescription));
    description.bonus_on = !active;
    if (!active) {
      description.bonus_value = null;
    }
    save({showPriceSaveBtn: true, priceDescription: description});
  };

  const setPrice = (value) => {
    const description = JSON.parse(JSON.stringify(priceDescription));
    description.bonus_value = value;
    save({showPriceSaveBtn: true, priceDescription: description});
  };

  const save = (payload) => {
    dispatch(
      setForm({
        payload,
      }),
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={updateActive}
        style={styles.container}>
        <Icon
          name={active ? 'check-box' : 'check-box-outline-blank'}
          color={active ? '#6DB7E8' : '#AFAFAF'}
          size={25}
        />
        <View>
          <Text style={styles.title}>{_.t('promo_title')}</Text>
          <Text style={styles.hint}>{_.t('promo_code_hint')}</Text>
        </View>
      </TouchableOpacity>
      {active && (
        <View style={styles.promoCode}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              onChangeText={setPrice}
              value={price !== null ? price.toString() : '0'}
              keyboardType="phone-pad"
              returnKeyType="done"
              blurOnSubmit={true}
              onFocus={(e) => {
                setPrice('');
              }}
            />
            <Text style={styles.hint}>%</Text>
          </View>
          <Text style={styles.sort}>{_.t('offers_sort_barb')}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#7C7F84',
    paddingLeft: 5,
  },
  form: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 40,
    width: 100,
    padding: 5,
    marginLeft: 5,
  },
  hint: {
    fontSize: 12,
    color: '#989B9E',
    paddingLeft: 5,
  },
  promoCode: {
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    paddingBottom: 25,
  },
  sort: {
    fontSize: 12,
    color: '#989B9E',
    paddingLeft: 15,
  },
});

export default PromoCode;
