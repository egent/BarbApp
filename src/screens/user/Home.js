import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    RefreshControl,
    Linking,
} from 'react-native';
import { connect } from 'react-redux';
import OneSignal from "react-native-onesignal";
import _ from '../../services/i18n';
import PreLoader from '../../components/PreLoader';
import { userInfoRequest, saveTokenRequest, dialogsRequest, dialogRequest } from '../../actions/user';
import MenuItem from '../../components/Home/MenuItem';
import globalStyle from '../../components/styles';
import { ONESIGNAL_APP_ID } from "../../constants/api";

const { width, height } = Dimensions.get('window');
const margin = width * 0.05;
const iconMessages = require('../../assets/images/icon_messages.png');
const iconProfile = require('../../assets/images/icon_profile.png');
const iconSettings = require('../../assets/images/icon_settings.png');


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        OneSignal.init(ONESIGNAL_APP_ID);
        OneSignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.
        // // The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
        OneSignal.promptForPushNotificationsWithUserResponse(this.myiOSPromptCallback);
        OneSignal.addEventListener("received", this.onReceived);
        OneSignal.addEventListener("opened", this.onOpened);
        OneSignal.addEventListener("ids", this.onIds);

    }

    componentWillMount() {
        this.getData();
        this._unsubscribe  = this.props.navigation.addListener('focus',this.getData);

    }

    componentWillUnmount() {
        OneSignal.removeEventListener("received", this.onReceived);
        OneSignal.removeEventListener("opened", this.onOpened);
        OneSignal.removeEventListener("ids", this.onIds);
        this._unsubscribe();
    }

    getData = () => {
        this.props.userInfoRequest();
    };

    myiOSPromptCallback = () => {
        console.log('myiOSPromptCallback');
    };

    onReceived = notification => {
        this.props.userInfoRequest();
        this.props.dialogsRequest();
        this.props.dialogRequest({ id: notification.payload.additionalData.dialog_id });
    };

    onOpened = openResult => {
        console.log("Message: ", openResult.notification.payload.body);
        console.log("Data: ", openResult.notification.payload.additionalData);
        console.log("isActive: ", openResult.notification.isAppInFocus);
        console.log("openResult: ", openResult);
    };

    onIds = device => {
        this.props.saveTokenRequest({ push_token: device.userId });
    };

    render() {
        const { loading, info, messages_new } = this.props.user;

        if (loading || info === null) {
            return (<PreLoader />);
        }

        return (
            <>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            colors={['#FF5E89']}
                            tintColor={'#FF5E89'}
                            refreshing={false}
                            onRefresh={() => this.props.userInfoRequest()}
                        />
                    }
                >
                    <View style={globalStyle.center}>
                        <View style={globalStyle.avatarContainer}>
                            {
                                info !== null && (
                                    <Image source={{ uri: info.image }} style={globalStyle.avatar} />
                                )
                            }
                        </View>
                        <Text style={globalStyle.name}>{info.name}</Text>
                        <Text style={globalStyle.spec}>{info.spec}</Text>
                    </View>
                    <View style={globalStyle.infoContainer}>
                        <Text style={globalStyle.tarif}>
                            {_.t('tariff')} {info.tarif.toUpperCase()} <Text style={globalStyle.tarifDate}>{info.tarif_date !== null ? 'до ' + info.tarif_date : ''}

                                {
                                    info.tarif === 'free' ? (
                                        <Text onPress={() => { Linking.openURL('https://barb.ua/tarifs').catch(err => console.error("Couldn't load page", err)) }} style={styles.txtLink}>{_.t('change')}</Text>
                                    ) : (
                                            <Text onPress={() => { Linking.openURL('https://barb.ua/tarifs').catch(err => console.error("Couldn't load page", err)) }} style={styles.txtLink}>{_.t('prolong')}</Text>
                                        )
                                }
                            </Text>
                        </Text>
                    </View>

                    <MenuItem
                        icon={iconMessages}
                        name={_.t('messages')}
                        qty={messages_new}
                        screenName={'Messages'}
                        navigation={this.props.navigation}
                    />

                    <MenuItem
                        icon={iconProfile}
                        name={_.t('barb_profile')}
                        qty={0}
                        url={'https://barb.ua/cabinet/'}
                    />

                    <MenuItem
                        icon={iconSettings}
                        name={_.t('settings')}
                        qty={0}
                        screenName={'Settings'}
                        navigation={this.props.navigation}
                    />


                </ScrollView>
                <Text style={styles.version}>ver. 1.02</Text>
            </>
        );
    }
};


const styles = StyleSheet.create({
    version: {
        bottom: 10,
        right: 0,
        width,
        textAlign: 'center',
        position: 'absolute',
        fontSize: 10,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    txtLink: {
        color: '#336699',

    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    userInfoRequest,
    saveTokenRequest,
    dialogsRequest,
    dialogRequest,
})(Home);
