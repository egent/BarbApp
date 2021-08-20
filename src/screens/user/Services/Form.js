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
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '@services/i18n';
import Input from '@components/ui/Input';
import {SelectTree, MediaPicker} from '@components';
import Preloader from '@components/PreLoader';
import {servicesStateUpdate} from '@actions/services';

const ServiceForm = ({navigation}) => {
  const {
    serviceName,
    loading,
    servicesCategory,
    serviceCategorySelectedStr,
    priceFrom,
    duration,
    price,
    description,
    descriptionShort,
  } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    return () =>
      dispatch(
        servicesStateUpdate({
          payload: {
            serviceName: '',
            serviceCategorySelected: [],
            serviceCategorySelectedStr: '',
            serviceCategoryPhotos: [],
            duration: '',
            priceFrom: false,
            price: '',
            description: '',
            descriptionShort: '',
          },
        }),
      );
  }, [dispatch]);

  if (loading) {
    return <Preloader />;
  }

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      keyboardShouldPersistTaps="always">
      <Input
        label="service_name"
        value={serviceName}
        data={serviceCategorySelectedStr}
        setData={(val) =>
          dispatch(servicesStateUpdate({payload: {serviceName: val}}))
        }
      />

      <SelectTree
        label="category"
        selected={serviceCategorySelectedStr}
        navigation={navigation}
        data={servicesCategory}
      />

      <View style={styles.legend}>
        <Text style={styles.legendText}>{_.t('cost_long')}</Text>
      </View>
      <View style={styles.form}>
        <TouchableOpacity
          onPress={() =>
            dispatch(servicesStateUpdate({payload: {priceFrom: !priceFrom}}))
          }
          style={styles.radioBtn}>
          <Icon
            name={priceFrom ? 'radio-button-checked' : 'radio-button-unchecked'}
            color="#B1B1B1"
            size={24}
          />
        </TouchableOpacity>
        <View style={styles.inputs}>
          <View style={styles.inputItem}>
            <Text style={styles.txt}>{_.t('from_price')}</Text>
            <TextInput
              style={[styles.input, {marginHorizontal: 5}]}
              underlineColorAndroid="transparent"
              onChangeText={(val) =>
                dispatch(servicesStateUpdate({payload: {price: val}}))
              }
              value={price}
              keyboardType="phone-pad"
              returnKeyType="done"
              blurOnSubmit={true}
              placeholder={_.t('price_item')}
              onFocus={(e) => {
                dispatch(servicesStateUpdate({payload: {price: ''}}));
              }}
            />

            <Text style={styles.txt}>{_.t('uah')}</Text>
          </View>
          <View style={styles.inputItem}>
            <TextInput
              style={[styles.input, {marginRight: 5}]}
              underlineColorAndroid="transparent"
              onChangeText={(val) =>
                dispatch(servicesStateUpdate({payload: {duration: val}}))
              }
              value={duration}
              keyboardType="phone-pad"
              returnKeyType="done"
              blurOnSubmit={true}
              placeholder={_.t('time')}
              onFocus={(e) => {
                dispatch(servicesStateUpdate({payload: {duration: ''}}));
              }}
            />
            <Text style={styles.txt}>{_.t('min')}</Text>
          </View>
        </View>
      </View>

      <View style={styles.legend}>
        <Text style={styles.legendText}>{_.t('description_short')}</Text>
      </View>
      <TextInput
        style={styles.textareaShort}
        multiline={true}
        underlineColorAndroid="transparent"
        numberOfLines={5}
        onChangeText={(val) =>
          dispatch(servicesStateUpdate({payload: {descriptionShort: val}}))
        }
        value={descriptionShort}
      />

      <View style={styles.legend}>
        <Text style={styles.legendText}>{_.t('description')}</Text>
      </View>
      <TextInput
        style={styles.textarea}
        multiline={true}
        underlineColorAndroid="transparent"
        numberOfLines={5}
        onChangeText={(val) =>
          dispatch(servicesStateUpdate({payload: {description: val}}))
        }
        value={description}
      />

      <MediaPicker styles={{marginVertical: 10}} />
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

export default ServiceForm;
