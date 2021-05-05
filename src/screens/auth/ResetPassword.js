import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import _ from '../../services/i18n';
import {passwordResetRequest} from '../../actions/user';

const {width} = Dimensions.get('window');

const ResetPasswordScreen = ({navigation}) => {
  const user = useSelector((state) => state.user);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const active = phone.length > 4 ? true : false;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="position"
      enabled
      keyboardVerticalOffset={-100}>
      <ScrollView>
        {/* <Text style={styles.title}>{_.t('reminder_password')}</Text> */}
        <Input
          label="phone_number"
          value={phone}
          setData={setPhone}
          keyboardType="phone-pad"
        />
        <Button
          onPress={() => {
            if(active) {
              dispatch(passwordResetRequest({phone}))
              navigation.navigate('ResetPasswordConfirm');
            }
          }}
          btnText="send_password"
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
    marginTop: 50,
  },
  // title: {
  //   fontSize: 16,
  //   marginVertical: 25,
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  // },
});

export default ResetPasswordScreen;
