import React, {useState, useEffect} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import _ from '../../services/i18n';
import SelectInput from '../../components/ui/SelectInput';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import PreLoader from '../../components/PreLoader';
import {useDispatch, useSelector} from 'react-redux';
const {width} = Dimensions.get('window');
import {getRegisterInfoRequest, getCodeRequest} from '../../actions/user';

const Registration = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const {cities, loading} = user;
  const [city, setCity] = useState(user.city);
  const [phone, setPhone] = useState(user.phone);

  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getRegisterInfoRequest());
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  let active = city !== null && phone.length > 4 ? true : false;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
      keyboardVerticalOffset={-100}>
      <View>
        <Text style={styles.title}>{_.t('registration_master')}</Text>
        <SelectInput
          label="city"
          value={city?.name}
          data={cities}
          saveData={setCity}
        />
        <Input
          label="phone_number"
          help="phone_number_help"
          value={phone}
          setData={setPhone}
          keyboardType="phone-pad"
          mask={{
            mask: '+389999999999',
            validator: (value, settings) =>
              value.length === settings.mask.length,
          }}
        />
        <Button
          onPress={() => {
            if (active) {
              dispatch(getCodeRequest({phone, city}));
              navigation.navigate('CheckSms');
            }
          }}
          btnText="continue"
          active={active}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  title: {
    fontSize: 16,
    marginVertical: 25,
    textAlign: 'center',
  },
});

export default Registration;
