import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './First';
import LoginScreen from './Login';
import RegistrationScreen from './Registration';
import UserAgreement from './Agreement';
import CheckSms from './CheckSms';
import UserInfo from './UserInfo';
import ResetPasswordScreen from './ResetPassword';
import ResetPasswordConfirm from './ResetPasswordConfirm';
import HeaderLeft from '../../components/HeaderLeft';
import _ from '../../services/i18n';

const AuthStack = createStackNavigator();

const AuthStackScreen = ({navigation}) => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="First"
      component={FirstScreen}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Login"
      component={LoginScreen}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Registration"
      component={RegistrationScreen}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="UserInfo"
      component={UserInfo}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="Agreement"
      component={UserAgreement}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('user_agreement'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
      })}
    />
    <AuthStack.Screen
      name="CheckSms"
      component={CheckSms}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <AuthStack.Screen
      name="ResetPassword"
      component={ResetPasswordScreen}
      options={({navigation, route}) => ({
        headerTitle: _.t('reminder_password'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
      })}
    />
    <AuthStack.Screen
      name="ResetPasswordConfirm"
      component={ResetPasswordConfirm}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;
