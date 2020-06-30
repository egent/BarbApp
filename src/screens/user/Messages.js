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
} from 'react-native';
import { connect } from 'react-redux';
import {dialogsRequest} from '../../actions/user';
import PreLoader from '../../components/PreLoader';
import globalStyle from '../../components/styles';
import _ from '../../services/i18n';

const { width, height } = Dimensions.get('window');
const margin = width * 0.05;


class Messages extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: 'dialogs',
        };
    }

    componentDidMount() {
        this._unsubscribe  = this.props.navigation.addListener('focus',this.getData);
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    getData = () => {
        this.props.dialogsRequest();
    };

    setActiveTab = tab => {
        const { activeTab } = this.state;
        this.setState({ activeTab: activeTab !== tab ? tab : activeTab });
    };

    render() {
        const { loading, dialogs } = this.props.user;
        const {
            activeTab,
        } = this.state;

        if (loading) {
            return (<PreLoader />);
        }

        return (
            <>
                <View style={globalStyle.center}>
                    <View style={styles.tabContainer}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setActiveTab('dialogs');
                            }}
                            style={[activeTab === 'dialogs' ? styles.activeTabContainer : styles.defaultTabContainer]}
                        >
                            <Text style={[activeTab === 'dialogs' ? styles.tabActive : styles.tabDefault, styles.tab]}>
                                {_.t('dialogs')}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.setActiveTab('notifications')}
                            style={activeTab === 'notifications' ? styles.activeTabContainer : styles.defaultTabContainer}
                        >
                            <Text style={[activeTab === 'notifications' ? styles.tabActive : styles.tabDefault, , styles.tab]}>
                                {_.t('notifications')}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    activeTab === 'dialogs' && (
                        <FlatList
                            style={{
                                marginTop: margin,
                            }}
                            showsVerticalScrollIndicator={false}
                            refreshControl={
                                <RefreshControl
                                    colors={['#FF5E89']}
                                    tintColor={'#FF5E89'}
                                    refreshing={false}
                                    onRefresh={() => {
                                        this.getData();
                                    }}
                                />
                            }
                            data={dialogs}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity 
                                        onPress={()=>{
                                            this.props.navigation.navigate('MessageDetail',{
                                                title: item.name,
                                                avatar: item.image,
                                                phone: item.phone,
                                                dialog_id: item.id,
                                            })
                                        }} 
                                        style={styles.dialogCont}
                                    >
                                        <View style={{
                                            flex: 2,
                                        }}>
                                            <Image source={{uri:item.image}} style={styles.avatar} />
                                        </View>
                                        <View style={{
                                            flex: 8,
                                        }}>
                                            <View style={{flexDirection: 'row'}}>
                                                <Text style={styles.username}>
                                                    {item.name}
                                                </Text>
                                                <Text style={styles.dialogDate}>
                                                    {item.last_message.humans}
                                                </Text>
                                            </View>
                                            <View style={{flexDirection: 'row',}}>
                                                <Text style={styles.message}>
                                                    {item.last_message.message}
                                                </Text>
                                                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                                    {
                                                        item.new_messages_count > 0 && (
                                                            <View style={styles.countContainer}>
                                                                <Text style={styles.counter}>
                                                                    {item.new_messages_count}
                                                                </Text>
                                                            </View>
                                                        )
                                                    }
                                                </View>
                            
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            // keyExtractor={(item, id) => id.toSting()}
                            keyExtractor = { (item, index) => index.toString() }
                        />
                    )
                }
                {
                    activeTab === 'notifications' && (
                        <View style={[globalStyle.center,{flex:1}]}>
                            <Text>{_.t('notifications_no')}</Text>
                        </View>
                    )
                }
            </>
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
    dialogCont: {
        flexDirection: 'row',
        marginHorizontal: margin,
        marginBottom: 15,
        paddingBottom: 15,
        borderBottomColor: 'rgba(0,0,0,0.25)',
        borderBottomWidth: 0.5,
    },
    avatar: {
        width: 30, 
        height: 30, 
        borderRadius: 15,
        resizeMode: 'contain',
    },
    username: {
        flex: 4,
        fontSize: 14,
        fontWeight: 'bold',
    },
    dialogDate: {
        flex: 2,
        fontSize: 10,
        color: 'rgba(0,0,0,0.25)',
        textAlign: 'right',
    },
    message: {
        flex: 9,
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)',
        paddingTop: 10,
    },
    countContainer: {
        backgroundColor: '#FF5E89',
        width: 18,
        height: 18,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
    },
});

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, {dialogsRequest})(Messages);
