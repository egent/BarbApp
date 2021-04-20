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
    Alert,
    ScrollView,
    _Text,
} from 'react-native';
// import InAppBrowser from 'react-native-inappbrowser-reborn';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import PreLoader from '../../components/PreLoader';
import _ from '../../services/i18n';
import { getRegisterInfoRequest, registerRequest } from '../../actions/user';
import Select2 from '../../components/SelectTwo';
import {
    toFormatUserTypeOptions,
    toFormatCityOptions,
    emailValidation,
} from '../../services/helpers/auth';
const { width, height } = Dimensions.get('window');
const margin = width * 0.1;

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            btnActive: false,
            selectedType: '',
            selectedTypeKey: 0,
            selectTypeData: [],
            firstName: '',
            lastName: '',
            orgName: '',
            cities: [],
            selectedCity: '',
            selectedCityKey: 0,
            email: '',
            phone: '',
        };
    }

    componentDidMount() {
        if (this.props.user.check_code_from_sms === true) {
            this.props.navigation.navigate('CheckSms');
        } else {
            this.props.getRegisterInfoRequest();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { user_types, cities,  check_code_from_sms} = this.props.user;
        if (prevProps.user.user_types !== user_types) {
            let userTypesArr = toFormatUserTypeOptions(user_types, 0);
            if (userTypesArr.length > 0) {
                const activeType = userTypesArr[0];
                userTypesArr = toFormatUserTypeOptions(user_types, activeType['id']);
                this.setState({
                    selectTypeData: userTypesArr,
                    selectedType: activeType['name'],
                    selectedTypeKey: activeType['id'],
                });
            }
        }
        if (prevProps.user.cities !== cities) {
            this.setState({ cities: toFormatCityOptions(cities, 0) })
        }
        if (prevProps.user.check_code_from_sms !== check_code_from_sms && check_code_from_sms === true) {
            this.props.navigation.navigate('CheckSms');
        }
    }

    checkForm = () => {
        const {
            email,
            phone,
            firstName,
            lastName,
            selectedCityKey,
            selectedTypeKey,
            orgName,
        } = this.state;

        if (selectedTypeKey === 'master' && (firstName.length === 0 || lastName.length === 0 )) {
            return Alert.alert('', _.t('name_error'));
        }

        if (selectedTypeKey === 'salon' && orgName.length === 0) {
            return Alert.alert('', _.t('org_error'));
        }

        if (selectedCityKey === 0) {
            return Alert.alert('', _.t('city_error'));
        }

        if (phone.length === 0) {
            return Alert.alert('', _.t('phone_error'));
        }

        if (!emailValidation(email)) {
            return Alert.alert('', _.t('email_error'));
        }

        this.props.registerRequest({
            city_id: selectedCityKey,
            name: selectedTypeKey === 'master' ? firstName : orgName,
            last_name: lastName,
            phone,
            email,
            userType: selectedTypeKey,
        });
    };

    render() {
        const { loading } = this.props.user;
        const {
            btnActive,
            selectedType,
            selectedTypeKey,
            selectTypeData,
            firstName,
            lastName,
            orgName,
            cities,
            selectedCity,
            selectedCityKey,
            email,
            phone,
        } = this.state;

        if (loading) {
            return (<PreLoader />);
        }

        return (
            <KeyboardAvoidingView style={styles.container} behavior="position" enabled keyboardVerticalOffset={-25}>
                <ScrollView>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{_.t('registration')}</Text>
                </View>
                <View style={{ flex: 2, }}>

                    <Select2
                        selectedName={selectedType}
                        ref={o => this.SelectType = o}
                        title={selectedType}
                        isSelectSingle
                        showSearchBox={false}
                        popupTitle={_.t('select_user_type')}
                        data={selectTypeData}
                        buttonStyle={{ borderRadius: 4, }}
                        onSelect={(id, selected) => {
                            if (selected.length > 0) {
                                this.setState({
                                    selectedType: selected[0]['name'],
                                    selectedTypeKey: selected[0]['id'],
                                });

                            }
                        }}
                    />

                    <Select2
                        selectedName={selectedCity}
                        ref={o => this.SelectCity = o}
                        title={selectedCity}
                        isSelectSingle
                        showSearchBox={true}
                        popupTitle={_.t('select_city')}
                        data={cities}
                        buttonStyle={{ borderRadius: 4, }}
                        onSelect={(id, selected) => {
                            if (selected.length > 0) {
                                this.setState({
                                    selectedCity: selected[0]['name'],
                                    selectedCityKey: selected[0]['id'],
                                });
                            }
                        }}
                    />

                    <TouchableOpacity onPress={() => { this.SelectType.showModal(); }} style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('user_type')}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={[styles.input, { flex: 9, }]}
                                // onChangeText={pwl => this.onChangePassword(pwl)}
                                value={selectedType}
                                editable={false}
                            />

                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                <Icon name={'caret-down'} size={20} />
                            </View>

                        </View>
                    </TouchableOpacity>

                    {
                        selectedTypeKey === 'master' ? (
                            <>
                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>{_.t('first_name')}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={val => this.setState({ firstName: val })}
                                        value={firstName}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>{_.t('last_name')}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={val => this.setState({ lastName: val })}
                                        value={lastName}
                                    />
                                </View>
                            </>
                        ) : (
                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>{_.t('org_name')}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={val => this.setState({ orgName: val })}
                                        value={orgName}
                                    />
                                </View>
                            )
                    }

                    <TouchableOpacity onPress={() => { this.SelectCity.showModal(); }} style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('select_city')}</Text>

                        <View style={{ flexDirection: 'row' }}>
                            <TextInput
                                style={[styles.input, { flex: 9, }]}
                                // onChangeText={pwl => this.onChangePassword(pwl)}
                                value={selectedCity}
                                editable={false}
                            />
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                <Icon name={'caret-down'} size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>

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
                            autofocus={true}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.legend}>{_.t('email')}</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={val => this.setState({ email: val })}
                            value={email}
                            keyboardType={'email-address'}
                            autoCapitalize={'none'}
                        />
                    </View>

                     <TouchableOpacity
                        style={styles.agreementCont}
                        onPress={()=>{
                            this.setState({btnActive: !btnActive});
                        }}
                     >
                        <Icon name={btnActive ? 'check-square-o' : 'square-o'} size={15} />
                        <Text style={{paddingLeft: 10}}>{_.t('i_accept')} <Text style={{color:'blue'}} onPress={()=>{this.props.navigation.navigate('Agreement')}}>{_.t('app_rules')}</Text></Text>
                     </TouchableOpacity>       

                    <TouchableOpacity
                        activeOpacity={btnActive ? 0.2 : 1}
                        style={[styles.btn, { backgroundColor: btnActive ? '#FF5E89' : 'rgba(0, 0, 0, 0.1)', }]}
                        onPress={() => {
                            if (btnActive) {
                                this.checkForm();
                            }
                        }}
                    >
                        <Text style={styles.btnTxt}>{_.t('btn_registration')}</Text>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width,
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
        marginHorizontal: margin * 0.5,
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
        marginHorizontal: margin * 0.5,
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
    agreementCont: {
        flexDirection: 'row',
        width: width - margin,
        marginHorizontal: margin * 0.5,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    getRegisterInfoRequest,
    registerRequest,
})(Login);
