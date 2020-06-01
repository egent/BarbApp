import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login';

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
    </AuthStack.Navigator>
);

export default AuthStackScreen;

