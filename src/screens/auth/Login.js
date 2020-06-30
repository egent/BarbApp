import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    TextInput,
    Linking,
    Platform,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { connect } from 'react-redux';
import PreLoader from '../../components/PreLoader';
import _ from '../../services/i18n';
import { authRequest } from '../../actions/user';

const { width, height } = Dimensions.get('window');
const margin = width * 0.1;

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            password: '',
            btnActive: false,
        };
    }

    componentDidMount() {
        const {phone, password} = this.props.user;
        const btnActive = phone.length > 0 ? true : false;
        this.setState({phone: phone.length > 0 ? phone : "+38", password, btnActive});
    }

    onChangePassword = password => {
        this.setState({
            password,
            btnActive: password.length > 0 ? true : false,
        });
    };

    render() {
        const {loading} = this.props.user;
        const { phone, password, btnActive } = this.state;

        if (loading) {
            return (<PreLoader />);
        }

        return (
            <KeyboardAvoidingView style={[styles.container]}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{_.t('authorization')}</Text>
                    <Text style={styles.subtitleContainer}>{_.t('login_description')}</Text>
                </View>
                <View style={{ flex: 2, }}>

                    <View style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('phone')}</Text>
                        <TextInputMask
                            style={styles.input}
                            returnKeyType='done'
                            returnKeyLabel={_.t('close')}
                            ref={(ref) => this._phone = ref}
                            type={'custom'}
                            onChangeText={val => {
                                this.setState({ 'phone': val });
                            }}
                            value={phone}
                            options={{
                                mask: '+389999999999',
                                validator: (value, settings) => (value.length === settings.mask.length)
                            }}
                            underlineColorAndroid={'transparent'}
                            keyboardType={'phone-pad'}
                            // onSubmitEditing={() => {
                            //   // this.login()
                            // }}
                            // placeholder={'Ваш номер телефона'}
                            autofocus={true}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('password')}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={pwl => this.onChangePassword(pwl)}
                            value={password}
                            secureTextEntry={true}
                        />
                    </View>

                    <TouchableOpacity
                        activeOpacity={btnActive ? 0.2 : 1}
                        style={[styles.btn, { backgroundColor: btnActive ? '#FF5E89' : 'rgba(0, 0, 0, 0.1)', }]}
                        onPress={() => {
                            if (password.length > 0) {
                                this.props.authRequest({
                                    navigation: this.props.navigation,
                                    phone,
                                    password,
                                })
                            }
                        }}
                    >
                        <Text style={styles.btnTxt}>{_.t('enter')}</Text>
                    </TouchableOpacity>

                    <View style={styles.linksContainer}>
                        <Text
                            style={styles.link}
                            onPress={() => { Linking.openURL('https://barb.ua/password/reset') }}
                        >
                            {_.t('password_reset')}
                        </Text>
                        <Text
                            style={[styles.link, { textAlign: 'right' }]}
                            onPress={() => { Linking.openURL('https://barb.ua/join') }}
                        >
                            {_.t('registration')}
                        </Text>
                    </View>


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
        // lineHeight: 20,
        overflow: 'visible',

        // backgroundColor: 'yellow',
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
    linksContainer: {
        marginTop: 10,
        width: width - margin,
        marginHorizontal: margin,
        flexDirection: 'row',
    },
    link: {
        flex: 1,
        color: '#336699',
        fontSize: 15,
        lineHeight: 18,
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    authRequest,
})(Login);
