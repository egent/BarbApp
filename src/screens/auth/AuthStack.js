import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';
import RegistrationScreen from './Registration';
import UserAgreement from './Agreement';
import CheckSms from './CheckSms';
import HeaderLeft from '../../components/HeaderLeft';
import _ from '../../services/i18n';

const AuthStack = createStackNavigator();


const AuthStackScreen = ({ navigation }) => (
    <AuthStack.Navigator>
        <AuthStack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
        <AuthStack.Screen 
            name="Registration" 
            component={RegistrationScreen} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
        <AuthStack.Screen 
            name="Agreement" 
            component={UserAgreement} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: _.t('user_agreement'),
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />
            })} 
        />
        <AuthStack.Screen 
            name="CheckSms" 
            component={CheckSms} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
    </AuthStack.Navigator>
);

export default AuthStackScreen;

