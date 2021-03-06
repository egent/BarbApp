import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HeaderLeft from '../../components/HeaderLeft';
import HeaderRight from '../../components/HeaderRight';
import HeaderTitleChat from '../../components/HeaderTitleChat';
import _ from '../../services/i18n';
import HomeScreen from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Messages from './Messages';
import MessageDetail from './MessageDetail';
import ShowImage from './ShowImage';
import UserAgreement from '../auth/Agreement';

const UserStack = createStackNavigator();

const UserStackScreens = ({ navigation }) => (
    <UserStack.Navigator
        screenOptions={{
            headerTitleStyle: {
                color: 'rgba(0, 0, 0, 0.3)',
                fontSize: 17,
            }
        }}
    >
        <UserStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
        <UserStack.Screen 
            name="Settings" 
            component={Settings} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: _.t('settings'),
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />
            })} 
        />
        <UserStack.Screen 
            name="Profile" 
            component={Profile} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: _.t('profile_master'),
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />
            })} 
        />
        <UserStack.Screen 
            name="Messages" 
            component={Messages} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: _.t('messages'),
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />
            })} 
        />
        <UserStack.Screen 
            name="MessageDetail" 
            component={MessageDetail} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: route.params.title,
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />,
                headerRight: props => <HeaderRight {...props} phone={route.params.phone} />,
                headerTitle: props => <HeaderTitleChat {...props} avatar={route.params.avatar} title={route.params.title} />,
            })} 
        />
        <UserStack.Screen 
            name="ShowImage" 
            component={ShowImage} 
            options={({ navigation, route }) => ({
                headerShown: false,
            })} 
        />
        <UserStack.Screen 
            name="UserAgreement" 
            component={UserAgreement} 
            options={({ navigation, route }) => ({
                headerShown: true,
                headerTitle: _.t('user_agreement'),
                headerLeft: props => <HeaderLeft {...props} navigation={navigation} />
            })} 
        />
    </UserStack.Navigator>
);

export default UserStackScreens;

