import moment from 'moment';
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import OneSignal from 'react-native-onesignal';
import _ from '../../services/i18n';
import PreLoader from '../../components/PreLoader';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  userInfoRequest,
  saveTokenRequest,
  dialogsRequest,
  dialogRequest,
  authLogout,
} from '../../actions/user';
import MenuItem from '../../components/Home/MenuItem';
import OnBoarding from '../../components/OnBoarding';
import {ONESIGNAL_APP_ID} from '../../constants/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    OneSignal.init(ONESIGNAL_APP_ID);
    OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
    // // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
    OneSignal.promptForPushNotificationsWithUserResponse(
      this.myiOSPromptCallback,
    );
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillMount() {
    this.getData();
    // todo delete in production
    // this._unsubscribe = this.props.navigation.addListener(
    //   'focus',
    //   this.getData,
    // );
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
    // this._unsubscribe(); // todo delete in production
  }

  getData = () => {
    this.props.userInfoRequest();
  };

  myiOSPromptCallback = () => {
    // console.log('myiOSPromptCallback');
  };

  onReceived = (notification) => {
    this.props.userInfoRequest();
    this.props.dialogsRequest();
    this.props.dialogRequest({
      id: notification.payload.additionalData.dialog_id,
    });
  };

  onOpened = (openResult) => {
    // console.log('Message: ', openResult.notification.payload.body);
    // console.log('Data: ', openResult.notification.payload.additionalData);
    // console.log('isActive: ', openResult.notification.isAppInFocus);
    // console.log('openResult: ', openResult);
  };

  onIds = (device) => {
    this.props.saveTokenRequest({push_token: device.userId});
  };

  render() {
    const {
      loading,
      info,
      messages_new,
      onBoarding,
      profileDescription: {description},
    } = this.props.user;

    if (loading || info === null) {
      return <PreLoader />;
    }

    if (onBoarding) {
      return <OnBoarding navigation={this.props.navigation} />;
    }

    const {city, tarif, tarif_date, image} = info;

    return (
      <>
        <ScrollView
          style={styles.container}
          refreshControl={
            <RefreshControl
              colors={['#F50263']}
              tintColor={'#F50263'}
              refreshing={false}
              onRefresh={() => this.props.userInfoRequest()}
            />
          }>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              {image === undefined || image === null ? (
                <Icon name="person" color="#F50263" size={45} />
              ) : (
                <Image source={{uri: image}} style={styles.avatar} />
              )}
            </View>
            <View style={styles.info}>
              <Text style={styles.fio}>{info?.name}</Text>
              <Text style={styles.city}>{city?.name}</Text>
            </View>
            {Platform.OS !== 'ios' && (
              <View style={styles.tariffContainer}>
                <View style={styles.tariff}>
                  <Text
                    style={[
                      styles.tariffTxt,
                      {color: tarif === 'free' ? '#715D65' : '#F50263'},
                    ]}>
                    {tarif}
                  </Text>
                </View>
                {tarif !== 'free' && (
                  <Text style={styles.tariffDate}>
                    {_.t('to')}: {moment(tarif_date).format('DD.MM.YYYY')}
                  </Text>
                )}
              </View>
            )}
          </View>

          <MenuItem
            icon="chat"
            name={_.t('messages')}
            qty={messages_new}
            screenName={'Messages'}
            screenParams={{title: _.t('client_messages')}}
            navigation={this.props.navigation}
          />

          <MenuItem
            icon="assignment-ind"
            name={_.t('profile_master')}
            symbol={description && description.length > 0 ? '' : '!'}
            screenName={'Profile'}
            navigation={this.props.navigation}
          />

          {/* <MenuItem
            icon="settings"
            name={_.t('settings')}
            screenName={'Profile'}
            navigation={this.props.navigation}
          />  */}
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.authLogout();
          }}
          style={styles.logout}>
          <Text style={styles.logoutText}>{_.t('logout')}</Text>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F50263',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 30,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 6,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  fio: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  city: {
    fontSize: 14,
    color: '#fff',
    paddingTop: 2,
  },
  tariffContainer: {
    flex: 2.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  tariff: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  tariffTxt: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  tariffDate: {
    color: '#fff',
    fontSize: 10,
    marginTop: 5,
  },
  logout: {
    position: 'relative',
    bottom: 0,
    left: 0,
    paddingVertical: 20,
    backgroundColor: '#F50263',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  userInfoRequest,
  saveTokenRequest,
  dialogsRequest,
  dialogRequest,
  authLogout,
})(Home);
