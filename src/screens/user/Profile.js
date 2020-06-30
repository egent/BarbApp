import moment from 'moment';
import React, { Component } from "react";
import {
    Dimensions,
    Image,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as RNLocalize from "react-native-localize";
import {
    userInfoFullRequest,
    userInfoFullUpdateRequest,
    sendEmailRequest,
    uploadPhotoRequest,
} from '../../actions/user';
import PreLoader from '../../components/PreLoader';
import globalStyle from '../../components/styles';
import _ from '../../services/i18n';

const locales = RNLocalize.getLocales();
const { width, height } = Dimensions.get('window');
const margin = width * 0.05;

const imgTick = require('../../assets/images/tick.png');

const photoTxtDesc = _.t('select_photo');
const options = {
    title: photoTxtDesc,
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
    cancelButtonTitle: _.t('cancel'),
    takePhotoButtonTitle: _.t('take_photo'),
    chooseFromLibraryButtonTitle: _.t('open_gallery'),
};


class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'about',
            name: '',
            last_name: '',
            birthday: '',
            birthdayRaw: new Date(),
            description: '',
            image: '',
            email: '',
            email_verified: false,
            viber: '',
            whatsapp: '',
            inst: '',
            fb: '',
            vk: '',
            telegram: '',
            yt: '',
            uploadPhoto: null,
            fileLoading: false,
            keyboardShow: false,
            showDatepicker: false,
            showTick: false,
        };
    }

    componentDidMount() {
        this.props.userInfoFullRequest();

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
    }

    componentDidUpdate(prevProps, prevState) {
        const { info_full } = this.props.user;
        if (prevProps.user.info_full !== info_full) {
            const {
                name,
                last_name,
                birthday,
                description,
                image,
                email,
                email_verified,
                socials,
            } = this.props.user.info_full;
            this.setState({
                name,
                last_name,
                birthday,
                description,
                image,
                email,
                email_verified,
                viber: socials.viber,
                whatsapp: socials.whatsapp,
                inst: socials.inst,
                fb: socials.fb,
                vk: socials.vk,
                telegram: socials.telegram,
                yt: socials.yt,
            });
        }
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }


    keyboardDidShow = () => {
        this.setState({ keyboardShow: true });
    }

    keyboardDidHide = () => {
        this.setState({ keyboardShow: false });
    }

    setActiveTab = tab => {
        const { activeTab } = this.state;
        this.setState({ activeTab: activeTab !== tab ? tab : activeTab });
    };


    handlePhotoUpdate = () => {
        // let {saleFile} = this.state;
        this.setState({ fileLoading: true });

        ImagePicker.launchImageLibrary(options, response => {
            // console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

                this.props.uploadPhotoRequest({ image: 'data:image/jpeg;base64,' + response.data });

                this.setState(
                    {
                        uploadPhoto: {
                            uri: response.uri,
                            name: response.uri,
                            type: response.type
                        },
                        image: response.uri,
                        fileLoading: false,
                    }
                );
            }
            this.setState({ fileLoading: false });

        });
    };

    onChangeDate = (event, selectedDate) => {
        if (Platform.OS === 'ios') {
            this.setState({ birthdayRaw: selectedDate });
        } else {
            if (event.type === 'set') {
                const date = moment(selectedDate).format('DD.MM.YYYY');
                this.setState({
                    showDatepicker: false,
                    birthday: date,
                });
                this.props.userInfoFullUpdateRequest({ birthday: date });
            }
            else {
                this.setState({ showDatepicker: false, });
            }
        }
    };

    emailValidate = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    render() {
        const { info_full, loading } = this.props.user;
        const {
            activeTab,
            name,
            last_name,
            image,
            description,
            birthday,
            birthdayRaw,
            email,
            email_verified,
            viber,
            whatsapp,
            inst,
            fb,
            vk,
            telegram,
            yt,
            fileLoading,
            uploadPhoto,
            keyboardShow,
            showDatepicker,
            showTick,
        } = this.state;

        if (loading || fileLoading) {
            return (<PreLoader />);
        }

        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1 }}
                // resetScrollToCoords={{ x: 0, y: 0 }}
                scrollEnabled={true}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            colors={['#FF5E89']}
                            tintColor={'#FF5E89'}
                            refreshing={false}
                            onRefresh={() => this.props.userInfoFullRequest()}
                        />
                    }
                >
                    {
                        keyboardShow === false && (
                            <View style={globalStyle.center}>
                                <View style={styles.tabContainer}>
                                    <TouchableOpacity
                                        onPress={() => this.setActiveTab('about')}
                                        style={[activeTab === 'about' ? styles.activeTabContainer : styles.defaultTabContainer]}
                                    >
                                        <Text style={[activeTab === 'about' ? styles.tabActive : styles.tabDefault, styles.tab]}>
                                            {_.t('master_about')}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.setActiveTab('contacts')}
                                        style={activeTab === 'contacts' ? styles.activeTabContainer : styles.defaultTabContainer}
                                    >
                                        <Text style={[activeTab === 'contacts' ? styles.tabActive : styles.tabDefault, , styles.tab]}>
                                            {_.t('contacts')}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={globalStyle.avatarContainer}>
                                    {
                                        info_full !== null && (
                                            <TouchableOpacity onPress={() => { this.handlePhotoUpdate() }}>
                                                <Image source={{ uri: image }} style={globalStyle.avatar} />
                                            </TouchableOpacity>
                                        )
                                    }
                                </View>
                                {
                                    uploadPhoto === null && (
                                        <Text onPress={() => { this.handlePhotoUpdate() }} style={styles.changePhoto}>{_.t('change_photo')}</Text>
                                    )
                                }
                            </View>
                        )
                    }
                    {
                        activeTab === 'about' && (
                            <>
                                {
                                    keyboardShow === false && (
                                        <>
                                            <View style={styles.inputContainer}>
                                                <Text style={styles.legend}>{_.t('name')}</Text>
                                                <TextInput
                                                    style={styles.input}
                                                    onChangeText={nName => this.setState({ name: nName })}
                                                    value={name}
                                                    editable={false}
                                                />
                                            </View>

                                            <View style={styles.inputContainer}>
                                                <Text style={styles.legend}>{_.t('last_name')}</Text>
                                                <TextInput
                                                    style={styles.input}
                                                    onChangeText={val => this.setState({ last_name: val })}
                                                    value={last_name}
                                                    editable={false}
                                                />
                                            </View>

                                            {showDatepicker && (
                                                <>
                                                    <DateTimePicker
                                                        locale={locales[0].languageTag}
                                                        testID="dateTimePicker"
                                                        value={birthdayRaw}
                                                        mode={'date'}
                                                        onChange={this.onChangeDate}
                                                        // display="date"
                                                        timeZoneOffsetInMinutes={0}
                                                    />

                                                    {
                                                        Platform.OS === 'ios' && (
                                                            <TouchableOpacity style={[globalStyle.center, styles.saveTextBtn]} onPress={() => {
                                                                const date = moment(birthdayRaw).format('DD.MM.YYYY');
                                                                this.setState({
                                                                    showDatepicker: false,
                                                                    birthday: date,
                                                                });
                                                                this.props.userInfoFullUpdateRequest({ birthday: date });
                                                            }}>
                                                                <Text style={styles.saveTextBtnTxt}>{_.t('save_date')}</Text>
                                                            </TouchableOpacity>
                                                        )
                                                    }
                                                </>
                                            )
                                            }

                                            {
                                                showDatepicker === false && (
                                                    <TouchableOpacity onPress={() => { this.setState({ showDatepicker: true }) }} style={styles.inputContainer}>
                                                        <Text style={styles.legend}>{_.t('birthday')}</Text>
                                                        <TextInput
                                                            style={styles.input}
                                                            // onChangeText={nBirthday => this.setState({ birthday: nBirthday })}
                                                            value={birthday}
                                                        // editable={false}
                                                        />
                                                    </TouchableOpacity>
                                                )
                                            }
                                        </>
                                    )
                                }

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>{_.t('about')}</Text>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={val => this.setState({ description: val })}
                                        value={description.replace(/<[^>]*>?/gm, '')}
                                        multiline={true}
                                        blurOnSubmit={() => Keyboard.dismiss()}
                                    />
                                </View>
                                {
                                    keyboardShow === false && (
                                        <TouchableOpacity style={[globalStyle.center, styles.saveTextBtn]} onPress={() => {
                                            this.props.userInfoFullUpdateRequest({ description });
                                        }}>
                                            <Text style={styles.saveTextBtnTxt}>{_.t('save_text')}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </>
                        )
                    }
                    {
                        activeTab === 'contacts' && (
                            <>
                                <View style={styles.inputContainer}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.legend}>{_.t('email')}</Text>
                                        <Text style={[styles.legend, { color: email_verified && showTick !== true ? 'green' : '#FF5E89' }]}>{_.t(email_verified === true && showTick !== true ? 'confirmed' : 'unconfirmed')}</Text>
                                    </View>
                                    <View style={[{ flexDirection: 'row' }]}>
                                        <View style={{
                                            flex: 9,
                                        }}>
                                            <TextInput
                                                style={styles.input}
                                                onChangeText={val => {
                                                    this.setState({ email: val, showTick: this.emailValidate(val) ? true : false })
                                                }}
                                                value={email}
                                            // blurOnSubmit={()=>Keyboard.dismiss()}
                                            />
                                        </View>
                                        {
                                            showTick && keyboardShow === false && (
                                                <TouchableOpacity onPress={() => {
                                                    this.props.userInfoFullUpdateRequest({ email });
                                                    this.setState({ showTick: false });
                                                }} style={styles.iconTickCont}>
                                                    <Image style={styles.iconTick} source={imgTick} />
                                                </TouchableOpacity>
                                            )
                                        }
                                    </View>
                                </View>
                                {
                                    !email_verified && keyboardShow === false && (
                                        <TouchableOpacity style={[globalStyle.center, styles.saveTextBtn]} onPress={() => {
                                            this.props.sendEmailRequest();
                                        }}>
                                            <Text style={styles.saveTextBtnTxt}>{_.t('send_email')}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>{_.t('phone')}</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={info_full.phone}
                                        editable={false}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Viber</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={viber}
                                        onChangeText={val => this.setState({ viber: val })}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Whatsapp</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={whatsapp}
                                        onChangeText={val => this.setState({ whatsapp: val })}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Instagram</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={inst}
                                        onChangeText={val => this.setState({ inst: val })}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Facebook</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={fb}
                                        onChangeText={val => this.setState({ fb: val })}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Vkontakte</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={vk}
                                        onChangeText={val => this.setState({ vk: val })}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.legend}>Telegram</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={telegram}
                                        onChangeText={val => this.setState({ telegram: val })}
                                    />
                                </View>

                                <View style={[styles.inputContainer, { marginBottom: keyboardShow ? 100 : 0 }]}>
                                    <Text style={styles.legend}>Youtube</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={yt}
                                        onChangeText={val => this.setState({ yt: val })}
                                    />
                                </View>

                                {
                                    keyboardShow === false && (
                                        <TouchableOpacity style={[globalStyle.center, styles.saveTextBtn]} onPress={() => {
                                            this.props.userInfoFullUpdateRequest({
                                                socials: {
                                                    viber,
                                                    whatsapp,
                                                    inst,
                                                    fb,
                                                    vk,
                                                    telegram,
                                                    yt,
                                                }
                                            });
                                        }}>
                                            <Text style={styles.saveTextBtnTxt}>{_.t('save_contacts')}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            </>
                        )
                    }
                </ScrollView>
            </KeyboardAvoidingView>

        );
    }
};


const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginTop: margin,
        marginHorizontal: margin,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    activeTabContainer: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#FF5E89',
        borderRadius: 4,
    },
    defaultTabContainer: {
        flex: 1,
    },
    tab: {
        textAlign: 'center',
        paddingVertical: 6,
        fontSize: 15,
        lineHeight: 18,
    },
    tabActive: {
        backgroundColor: '#FF5E89',
        color: '#fff',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    tabDefault: {
        color: 'rgba(0, 0, 0, 0.4)',
    },
    changePhoto: {
        color: '#336699',
        fontSize: 14,
    },
    inputContainer: {
        marginTop: margin,
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
        lineHeight: 20
    },
    saveTextBtn: {
        marginTop: margin * 0.5,
        marginHorizontal: margin,
        marginBottom: margin,
        paddingVertical: 11,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        borderRadius: 4,
    },
    saveTextBtnTxt: {
        fontSize: 15,
        color: '#336699',
    },
    iconTickCont: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    iconTick: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {
    userInfoFullRequest,
    userInfoFullUpdateRequest,
    sendEmailRequest,
    uploadPhotoRequest,
})(Profile);
