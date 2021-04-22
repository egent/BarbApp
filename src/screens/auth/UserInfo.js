import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../components/ui/Input';
import InputPassword from '../../components/ui/InputPassword';
import Button from '../../components/ui/Button';
import PreLoader from '../../components/PreLoader';
import _ from '../../services/i18n';
import {registerRequest} from '../../actions/user';

const {width} = Dimensions.get('window');

const UserInfo = ({navigation}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [remember, setRemember] = useState(true);
  const [agree, setAgree] = useState(false);

  const {phone, city, loading} = useSelector((state) => state.user);

  if (loading) {
    return <PreLoader />;
  }

  const dispatch = useDispatch();
  
  let active = false;
  if (name.length > 0 && lastName.length > 0 && password.length > 0 && email.length > 0 && agree === true) {
    active = true
  };

  return (
    <KeyboardAvoidingView 
    behavior="padding" 
    enabled   
    keyboardVerticalOffset={100}
      style={styles.container}
     >
      <ScrollView>
        <Text style={styles.title}>{_.t('name_password')}</Text>
        <Input label="first_name" value={name} setData={setName} autoCapitalize={true} />
        <Input label="last_name" value={lastName} setData={setLastName} autoCapitalize={true} />
        <InputPassword
          label="password"
          value={password}
          setData={setPassword}
        />
        <TouchableOpacity
          style={styles.remember}
          onPress={() => {
            setRemember(!remember);
          }}
          activeOpacity={0.83}>
          <Icon
            size={21}
            color="#6DB7E8"
            name={remember ? 'checkbox-marked' : 'checkbox-blank-outline'}
          />
          <Text style={styles.rememberText}>{_.t('remember_password')}</Text>
        </TouchableOpacity>

        <Input label="email" value={email} setData={setEmail} />

        <TouchableOpacity
          style={styles.agree}
          onPress={() => {
            setAgree(!agree);
          }}
          activeOpacity={0.8}>
          <Text style={styles.rememberText}>
            {_.t('agree')}{' '}
            <Text
              onPress={() => {
                navigation.navigate('Agreement');
              }}
              style={styles.rules}>
              {' '}
              {_.t('registration_rules')}
            </Text>
          </Text>

          <Icon
            size={32}
            color="#6DB7E8"
            name={agree ? 'toggle-switch-outline' : 'toggle-switch-off-outline'}
          />
        </TouchableOpacity>

        <Button
          onPress={() => {
            if(active) {
              dispatch(registerRequest({
                navigation,
                payload: {
                  phone,
                  name,
                  last_name: lastName,
                  city_id: city.id, 
                  email,
                  password,
                  type: 'master',
                }
              }))
            }
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
  remember: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    marginLeft: 5,
    color: '#BFB3B3',
    fontSize: 13,
  },
  agree: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  agreeText: {
    fontSize: 14,
  },
  rules: {
    color: '#6DB7E8',
  },
});

export default UserInfo;
