import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';

import _ from '../../services/i18n';

const UserStack = createStackNavigator();

const UserStackScreens = ({ navigation }) => (
    <UserStack.Navigator>
        <UserStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
    </UserStack.Navigator>
);

export default UserStackScreens;

