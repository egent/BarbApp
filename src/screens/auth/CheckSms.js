import React, {useState} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCodeRequest} from '../../actions/user';
import PreLoader from '../../components/PreLoader';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import _ from '../../services/i18n';

const {width} = Dimensions.get('window');

const CheckSms = ({navigation}) => {
  const {phone, city, loading, sms_code_for_test} = useSelector((state) => state.user);
  const [code, setCode] = useState(sms_code_for_test.toString());
  const dispatch = useDispatch();

  if (loading) {
    return <PreLoader />;
  }

  console.log('code', code, sms_code_for_test)

  const active = code.length > 0 ? true : false;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
      keyboardVerticalOffset={-25}>
      <View style={styles.content}>
        <Text style={styles.title}>{_.t('check_code_title')}</Text>
        <Text style={styles.description}>
          {_.t('check_code_description', {phone})}
        </Text>
        <Text
          onPress={() => dispatch(getCodeRequest({phone, city}))}
          style={styles.resendCode}>
          {_.t('resendCode')}
        </Text>
        <Input
            label="confirmation_code"
            value={code}
            setData={setCode}
          />

        <Button
          onPress={() => {
            if(active) {
            //   todo send to server
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
    alignItems: 'center',
    width,
  },
  title: {
    fontSize: 16,
    marginVertical: 25,
    textAlign: 'center',
  },
  description: {
    color: '#B3B9BF',
    fontSize: 12,
  },
  resendCode: {
    color: '#6DB7E8',
    fontSize: 12,
    marginTop: 10,
    marginBottom: 25,
  },
});

export default CheckSms;
