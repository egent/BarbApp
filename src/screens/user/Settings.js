import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import _ from '../../services/i18n';
import MenuItem from '../../components/Home/MenuItem';
import globalStyle from '../../components/styles';

const iconProfile = require('../../assets/images/icon_profile.png');
const iconDoc = require('../../assets/images/icon_doc.png');


class Settings extends Component {

    render() {
        const { info } = this.props.user;

        return (
            <ScrollView>
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
                <MenuItem
                    icon={iconProfile}
                    name={_.t('profile_master')}
                    qty={0}
                    borderColor={'rgba(0, 0, 0, 0.1)'}
                    screenName={'Profile'}
                    navigation={this.props.navigation}
                />
                <MenuItem
                    icon={iconDoc}
                    name={_.t('user_agreement')}
                    qty={0}
                    borderColor={'rgba(0, 0, 0, 0.1)'}
                    // url={'https://barb.ua/terms'}
                    screenName={'UserAgreement'}
                    navigation={this.props.navigation}
                /> 
            </ScrollView>
        );
    }
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {})(Settings);
