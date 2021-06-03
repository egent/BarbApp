import {Dimensions, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HeaderLeft from '../../components/HeaderLeft';
import HeaderRight from '../../components/HeaderRight';
import HeaderRightIcon from '../../components/HeaderRightIcon';
import HeaderRightIconRedux from '../../components/HeaderRightIconRedux';
import HeaderTitleChat from '../../components/HeaderTitleChat';
import _ from '../../services/i18n';
import HomeScreen from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Messages from './Messages';
import MessageDetail from './MessageDetail';
import ShowImage from './ShowImage';
import UserAgreement from '../auth/Agreement';
import SpecsScreen from '../../screens/user/Specs';
import ProfileDescription from '../../screens/user/ProfileDescription';
import PointsList from '../../screens/user/points/PointsList';
import WorkspaceAdd from '../../screens/user/points/WorkspaceAdd';
import ScheduleBreak from '../../screens/user/points/ScheduleBreaks';
import PriceScreen from '../../screens/user/Price';

import {beautyRoomSend} from '../../actions/user';

import Test from '../../screens/user/~Profile'; // todo delete in production

const {width} = Dimensions.get('window');

const UserStack = createStackNavigator();

const UserStackScreens = ({navigation}) => (
  <UserStack.Navigator
    screenOptions={{
      headerTitleStyle: {
        color: 'rgba(0, 0, 0, 0.3)',
        fontSize: 17,
      },
    }}>
    <UserStack.Screen
      name="Home"
      component={HomeScreen}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <UserStack.Screen
      name="Settings"
      component={Settings}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('settings'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
      })}
    />
    <UserStack.Screen
      name="Profile"
      component={Profile}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <UserStack.Screen
      name="Messages"
      component={Messages}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: route.params.title,
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
        headerRight: (props) => {
          if (route.params.deletePress === undefined) {
            return null;
          }
          return (
            <HeaderRightIcon
              {...props}
              icon="delete"
              onPress={route.params.deletePress}
            />
          );
        },
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      })}
    />
    <UserStack.Screen
      name="MessageDetail"
      component={MessageDetail}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: route.params.title,
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
        headerRight: (props) => (
          <HeaderRight {...props} phone={route.params.phone} />
        ),
        headerTitle: (props) => (
          <HeaderTitleChat
            {...props}
            avatar={route.params.avatar}
            title={route.params.title}
          />
        ),
      })}
    />
    <UserStack.Screen
      name="ShowImage"
      component={ShowImage}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
    <UserStack.Screen
      name="UserAgreement"
      component={UserAgreement}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('user_agreement'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
      })}
    />
    <UserStack.Screen
      name="Specs"
      component={SpecsScreen}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('specialty'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} icon="close" />
        ),
        headerRight: (props) => {
          try {
            return (
              <HeaderRightIcon
                {...props}
                icon="done"
                onPress={route.params.onPress}
              />
            );
          } catch (e) {
            return null;
          }
        },
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      })}
    />
    <UserStack.Screen
      name="ProfileDescription"
      component={ProfileDescription}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('profile_photo_description_experience'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} icon="close" />
        ),
        headerRight: (props) => {
          try {
            return (
              <HeaderRightIcon
                {...props}
                icon="done"
                onPress={route.params.onPress}
              />
            );
          } catch (e) {
            return null;
          }
        },
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      })}
    />
    <UserStack.Screen
      name="PointsList"
      component={PointsList}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('master_locations'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
        headerStyle: styles.headerStyle,
        headerTitleStyle: [styles.headerTitleStyle, {color: '#86888B'}],
      })}
    />
    <UserStack.Screen
      name="WorkspaceAdd"
      component={WorkspaceAdd}
      options={({navigation, route}) => {
        let title = 'workspace_settings';

        if (route.params.type_id === 1) {
          title = 'in_house_settings';
        }

        if (route.params.type_id === 3) {
          title = 'in_client_settings';
        }

        return {
          headerShown: true,
          headerTitle: _.t(title),
          headerLeft: (props) => (
            <HeaderLeft {...props} navigation={navigation} icon="close" />
          ),
          headerRight: (props) => {
            return (
              <HeaderRightIconRedux
                place={route.params.place}
                {...props}
                icon="done"
                onPress={beautyRoomSend}
                navigation={navigation}
              />
            );
          },
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.headerTitleStyle,
        };
      }}
    />

    <UserStack.Screen
      name="ScheduleBreak"
      component={ScheduleBreak}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('breaks'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} icon="close" />
        ),
        headerRight: (props) => {
          try {
            return (
              <HeaderRightIcon
                {...props}
                icon="done"
                onPress={() => {
                  navigation.goBack();
                }}
              />
            );
          } catch (e) {
            return null;
          }
        },
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      })}
    />
    <UserStack.Screen
      name="Price"
      component={PriceScreen}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: _.t('services_prices'),
        headerLeft: (props) => (
          <HeaderLeft {...props} navigation={navigation} />
        ),
        headerStyle: styles.headerStyle,
        headerTitleStyle: [styles.headerTitleStyle, {color: '#86888B'}],
      })}
    />
    <UserStack.Screen
      name="Test"
      component={Test}
      options={({navigation, route}) => ({
        headerShown: false,
      })}
    />
  </UserStack.Navigator>
);

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderTopColor: '#7B7B7B',
    height: 60,
  },
  headerTitleStyle: {
    textAlign: 'left',
    width: width - 100,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
});

export default UserStackScreens;
