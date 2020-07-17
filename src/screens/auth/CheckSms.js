import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    Platform,
} from 'react-native';
import { connect } from 'react-redux';
import PreLoader from '../../components/PreLoader';
import _ from '../../services/i18n';
import { checkCodeRequest } from '../../actions/user';

const { width, height } = Dimensions.get('window');
const margin = width * 0.1;

class CheckSms extends Component {

    constructor(props) {
        super(props);

        this.state = {
            code: '',
            btnActive: false,
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const {check_code_from_sms} = this.props.user;
        if (prevProps.user.check_code_from_sms !== check_code_from_sms && check_code_from_sms === false) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {
        const {loading} = this.props.user;
        const { code, btnActive } = this.state;

        if (loading) {
            return (<PreLoader />);
        }

        return (
            <KeyboardAvoidingView style={[styles.container]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{_.t('check_code_title')}</Text>
                    <Text style={styles.subtitleContainer}>{_.t('check_code_description')}</Text>
                </View>
                <View style={{ flex: 2, }}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('code_from_sms')}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={val => {this.setState({code: val, btnActive: val.length > 0 ? true : false})}}
                            value={code}
                            autoCapitalize={'none'}
                        />
                    </View>

                    <TouchableOpacity
                        activeOpacity={btnActive ? 0.2 : 1}
                        style={[styles.btn, { backgroundColor: btnActive ? '#FF5E89' : 'rgba(0, 0, 0, 0.1)', }]}
                        onPress={() => {
                            if (code.length > 0) {
                                this.props.checkCodeRequest({
                                    code,
                                    phone: this.props.user.info.phone
                                });
                            }
                        }}
                    >
                        <Text style={styles.btnTxt}>{_.t('send')}</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}></View>
            </KeyboardAvoidingView>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    subtitleContainer: {
        marginTop: 14,
        marginHorizontal: 40,
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
        color: '#000',
        opacity: 0.5,
    },
    inputContainer: {
        width: width - margin,
        // height: 60,
        marginHorizontal: margin,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        marginBottom: 10,
        paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    },
    legend: {
        marginHorizontal: margin * 0.5,
        marginTop: margin * 0.25,
        color: 'rgba(0, 0, 0, 0.4)',
        fontSize: 12,
        lineHeight: 14,
    },
    input: {
        marginHorizontal: margin * 0.5,
        marginTop: Platform.OS === 'ios' ? 5 : 0,
        fontSize: 17,
        overflow: 'visible',
    },
    btn: {
        marginVertical: 10,
        width: width - margin,
        marginHorizontal: margin,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnTxt: {
        fontSize: 17,
        lineHeight: 20,
        color: '#fff'
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    checkCodeRequest,
})(CheckSms);
