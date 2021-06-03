import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';
import {setForm} from '../../actions/user';

const Consultation = () => {
  const dispatch = useDispatch();
  const {priceDescription} = useSelector((state) => state.user);
  const active = !!priceDescription.consultation_on;
  const activeFrom = !!priceDescription.consultation_from;
  const price = priceDescription.consultation_price;

  const updateActive = () => {
    const description = JSON.parse(JSON.stringify(priceDescription));
    description.consultation_on = !active;
    description.consultation_from = null;
    description.consultation_price = null;
    save({showPriceSaveBtn: true, priceDescription: description});
  };

  const updateFrom = () => {
    const description = JSON.parse(JSON.stringify(priceDescription));
    description.consultation_from = !activeFrom;
    save({showPriceSaveBtn: true, priceDescription: description});
  };

  const setPrice = (value) => {
    const description = JSON.parse(JSON.stringify(priceDescription));
    description.consultation_price = value;
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
          size={24}
        />
        <Text style={styles.title}>{_.t('consultation')}</Text>
      </TouchableOpacity>
      {active && (
        <View style={styles.form}>
          <TouchableOpacity activeOpacity={0.8} onPress={updateFrom}>
            <Icon
              name={
                activeFrom ? 'radio-button-checked' : 'radio-button-unchecked'
              }
              color={activeFrom ? '#6DB7E8' : '#AFAFAF'}
              size={24}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.priceConsult}
            underlineColorAndroid="transparent"
            onChangeText={setPrice}
            value={price}
            keyboardType="phone-pad"
            returnKeyType="done"
            blurOnSubmit={true}
          />
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
  priceConsult: {
    borderColor: '#D4D6DF',
    borderWidth: 1,
    height: 40,
    width: 100,
    padding: 5,
    marginLeft: 5,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
});

export default Consultation;
