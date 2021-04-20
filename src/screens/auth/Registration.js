import React, {useState, useEffect} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import _ from '../../services/i18n';
import SelectInput from '../../components/ui/SelectInput';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import PreLoader from '../../components/PreLoader';
import {useDispatch, useSelector} from 'react-redux';
const {width} = Dimensions.get('window');
import {getRegisterInfoRequest, getCodeRequest} from '../../actions/user';

const Registration = ({navigation}) => {
  const [city, setCity] = useState(null);
  const [phone, setPhone] = useState('+380');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {cities, loading} = user;
  useEffect(() => {
    dispatch(getRegisterInfoRequest());
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  let active = city !== null > 0 && phone.length > 4 ? true : false;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
      keyboardVerticalOffset={-25}>
      <ScrollView>
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
        />
        <Button
          onPress={() => {
            // if(active) {
            //   dispatch(getCodeRequest({phone, city}))
            //   navigation.navigate('CheckSms');
            // }

            navigation.navigate('CheckSms'); // todo comment in production
          }}
          btnText="continue"
          active={active}
        />
      </ScrollView>
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
