import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { connect } from 'react-redux';

import _ from '../../services/i18n';
import {authLogout} from '../../actions/user';

const { width, height } = Dimensions.get('window');
const margin = width * 0.1;

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text 
                    style={{ color: 'blue' }}
                    onPress={()=>{this.props.authLogout()}}
                >
                    {_.t('logout')}
                </Text>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    authLogout,
})(Home);
