import React, { Component } from "react";
import {
    Dimensions,
    Image,
    RefreshControl,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput,
    Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import { dialogRequest, messageSendRequest } from '../../actions/user';
import ImagePicker from 'react-native-image-picker';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import PreLoader from '../../components/PreLoader';
import globalStyle from '../../components/styles';
import _ from '../../services/i18n';

const { width, height } = Dimensions.get('window');
const margin = width * 0.05;
const iconClip = require('../../assets/images/icon_clip.png');
const iconEnter = require('../../assets/images/icon_enter.png');

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


class MessageDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            inputHeight: 48,
            fileLoading: false,
        };
    }

    componentDidMount() {
        this.props.dialogRequest({ id: this.props.route.params.dialog_id });
    }

    componentDidUpdate(prevProps, prevState) {
        const {dialog_messages} = this.props.user;
        if (prevProps.user.dialog_messages !== dialog_messages) {
            this.setState({message: ''});
        }
    }

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

                // this.props.uploadPhotoRequest({image: 'data:image/jpeg;base64,' + response.data});
                this.props.messageSendRequest({
                    image: 'data:image/jpeg;base64,' + response.data, 
                    dialog_id: this.props.route.params.dialog_id
                });

                this.setState(
                    {
                        // uploadPhoto: {
                        //     uri: response.uri,
                        //     name: response.uri,
                        //     type: response.type
                        // },
                        // image: response.uri,
                        fileLoading: false,
                    }
                );
            }
            this.setState({ fileLoading: false });

        });
    };

    setActiveTab = tab => {
        const { activeTab } = this.state;
        this.setState({ activeTab: activeTab !== tab ? tab : activeTab });
    };

    render() {
        const {
            loading,
            dialog,
            dialog_messages,
        } = this.props.user;
        const { message, inputHeight } = this.state;


        if (loading) {
            return (<PreLoader />);
        }

        return (
            <>
                <View style={{ flex: 1 }}>
                    <View style={[styles.boxMessages]}>
                        <FlatList
                            style={{ paddingTop: margin, }}
                            ref={ref => this.flatList = ref}
                            onContentSizeChange={() => this.flatList.scrollToEnd({animated: true})}
                            onLayout={() => this.flatList.scrollToEnd({animated: true})}
                            showsVerticalScrollIndicator={true}
                            refreshControl={
                                <RefreshControl
                                    colors={['#FF5E89']}
                                    tintColor={'#FF5E89'}
                                    refreshing={false}
                                    onRefresh={() => {
                                        this.props.dialogRequest({ id: this.props.route.params.dialog_id });
                                    }}
                                />
                            }
                            ListFooterComponent={()=>{
                                return (<View style={{marginTop: margin*7}} />);
                            }}
                            data={dialog_messages}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ 
                                        marginBottom: 10,
                                        marginLeft: item.my ? margin*3 : margin,
                                        marginRight: item.my ? margin : margin*3,

                                     }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={item.my ? styles.yourMessageName : styles.userMessageName}>
                                                {item.my ? _.t('you') : dialog.name}
                                            </Text>
                                            <Text style={styles.date}>{item.humans}</Text>
                                        </View>
                                        <View style={item.my ? styles.yourMessage : styles.userMessage}>
                                            {
                                                item.image === null ? (
                                                    <Text style={item.my ? styles.yourMessageTxt : styles.userMessageTxt}>{item.message}</Text>
                                                ) : (
                                                    <TouchableOpacity 
                                                        onPress={()=>{


                                                            this.props.navigation.navigate('ShowImage',{image: item.image});
                                                        }}>
                                                        <Image source={{uri: item.image}} style={styles.responsiveImage} />
                                                    </TouchableOpacity>
                                                )
                                            }
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View>
                        <View style={styles.boxMessageInput}>
                            <TouchableOpacity
                                onPress={()=>{this.handlePhotoUpdate()}} 
                                style={{
                                    flex: 1,
                                }}
                            >
                                <Image source={iconClip} style={styles.icon} />
                            </TouchableOpacity>
                            <View style={{
                                flex: 8,

                            }}>
                                <TextInput
                                    placeholder={_.t('message')}
                                    onChangeText={txt => { this.setState({ message: txt }) }}
                                    onContentSizeChange={(event) => {
                                        const { height } = event.nativeEvent.contentSize;
                                        this.setState({ inputHeight: height });
                                    }}
                                    style={[styles.input, { inputHeight: Math.max(35, inputHeight) }]}
                                    value={message}
                                    multiline={true}
                                    blurOnSubmit={() => Keyboard.dismiss()}
                                />
                            </View>
                            <TouchableOpacity 
                                style={{flex: 1,}}
                                onPress={()=>{
                                    this.props.messageSendRequest({message, dialog_id: this.props.route.params.dialog_id});
                                }}
                            >
                                <Image source={iconEnter} style={[styles.icon,]} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <KeyboardSpacer />
            </>
        );
    }
};


const styles = StyleSheet.create({
    boxMessages: {
        flex: 9,
    },
    boxMessageInput: {
        flex: 1,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        marginHorizontal: margin,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
    },
    icon: {
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },
    input: {
        color: 'rgba(0,0,0,1)',
        fontSize: 14,
        lineHeight: 18,
    },
    userMessageName: {
        flex: 3,
        color: 'rgba(255,94,137,0.3)',
        fontSize: 14,
        lineHeight: 17,
        paddingLeft: 10,
        paddingBottom: 5,
    },
    yourMessageName: {
        flex: 3,
        color: 'rgba(51,102,153,0.3)',
        fontSize: 14,
        lineHeight: 17,
        paddingLeft: 10,
        paddingBottom: 5,

    },
    date: {
        flex: 2,
        textAlign: 'right',
        color: 'rgba(0,0,0,0.25)',
        fontSize: 12,
        lineHeight: 14,
    },
    userMessage: {
        backgroundColor: 'rgba(255,94,137,0.05)',
    },
    userMessageTxt: {
        color: '#FF5E89',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        lineHeight: 20,
    },
    yourMessage: {
        backgroundColor: 'rgba(51,102,153,0.05)',
    },
    yourMessageTxt: {
        color: '#336699',
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
        lineHeight: 20,
    },
    responsiveImage: {
        width: '100%',
        height: undefined,
        aspectRatio: 135 / 76,
        borderWidth: 1,
        borderRadius: 12,
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, { dialogRequest, messageSendRequest })(MessageDetail);
