import React, {Component} from 'react';
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
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {includes, remove} from 'lodash';
import {dialogsRequest, dialogDeleteRequest} from '../../actions/user';
import PreLoader from '../../components/PreLoader';
import ModalAlert from '../../components/modal/Alert';
import globalStyle from '../../components/styles';
import _ from '../../services/i18n';

const {width} = Dimensions.get('window');
const margin = width * 0.05;

class Messages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'dialogs',
      deleted: [],
      deleteAlertVisible: false,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener(
      'focus',
      this.getData,
    );
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getData = () => {
    this.props.dialogsRequest();
    this.clearDeleted();
  };

  setActiveTab = (tab) => {
    const {activeTab} = this.state;
    this.setState({activeTab: activeTab !== tab ? tab : activeTab});
  };

  updateDeleteDialogs = (id) => {
    let deleted = this.state.deleted;
    let title = _.t('client_messages');

    if (includes(deleted, id)) {
      deleted = remove(deleted, function (item) {
        return item !== id;
      });
    } else {
      deleted.push(id);
    }

    const deleted_length = deleted.length;
    if (deleted_length > 0) {
      title = _.t('delete_messages', {qty: deleted_length});
    }
    this.setState({deleted});
    this.props.navigation.setParams({
      title: title,
      deletePress: deleted_length > 0 ? this.deleteDialogs : undefined,
    });
  };

  deleteDialogs = () => {
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState({deleteAlertVisible: !this.state.deleteAlertVisible});
  };

  deleteDialogConfirm = () => {
    this.setState({deleteAlertVisible: false});
    this.props.dialogDeleteRequest({dialogs: this.state.deleted});
    this.clearDeleted();
  };

  clearDeleted = () => {
    this.props.navigation.setParams({
      title: _.t('client_messages'),
      deletePress: undefined,
    });
    this.setState({
      deleted: [],
    });
  };

  render() {
    const {loading, dialogs} = this.props.user;
    const {activeTab, deleted, deleteAlertVisible} = this.state;

    if (loading) {
      return <PreLoader />;
    }

    return (
      <>
        <ModalAlert
          visible={deleteAlertVisible}
          toggle={this.toggleModal}
          title="delete_title_messages"
          subTitle="delete_subtitle_messages"
          onPress={this.deleteDialogConfirm}
        />
        <View style={globalStyle.center}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              onPress={() => {
                this.setActiveTab('dialogs');
              }}
              style={[
                activeTab === 'dialogs'
                  ? styles.activeTabContainer
                  : styles.defaultTabContainer,
              ]}>
              <Text
                style={[
                  activeTab === 'dialogs'
                    ? styles.tabActive
                    : styles.tabDefault,
                  styles.tab,
                ]}>
                {_.t('dialogs')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setActiveTab('notifications')}
              style={
                activeTab === 'notifications'
                  ? styles.activeTabContainer
                  : styles.defaultTabContainer
              }>
              <Text
                style={[
                  activeTab === 'notifications'
                    ? styles.tabActive
                    : styles.tabDefault,
                  ,
                  styles.tab,
                ]}>
                {_.t('notifications')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {activeTab === 'dialogs' && (
          <FlatList
            style={{
              marginTop: margin,
            }}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                colors={['#F50263']}
                tintColor={'#F50263'}
                refreshing={false}
                onRefresh={() => {
                  this.getData();
                }}
              />
            }
            data={dialogs}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onLongPress={() => {
                    this.updateDeleteDialogs(item.id);
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('MessageDetail', {
                      title: item.name,
                      avatar: item.image,
                      phone: item.phone,
                      dialog_id: item.id,
                    });
                  }}
                  style={styles.dialogCont}>
                  <View
                    style={{
                      flex: 1.5,
                    }}>
                    {includes(deleted, item.id) ? (
                      <Icon name="check-circle" color="#F50263" size={36} />
                    ) : (
                      <Image source={{uri: item.image}} style={styles.avatar} />
                    )}
                  </View>
                  <View
                    style={{
                      flex: 8,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.username}>{item.name}</Text>
                      <Text style={styles.dialogDate}>
                        {item.last_message.humans}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text numberOfLines={2} style={styles.message}>
                        {item.last_message.message}
                      </Text>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'flex-end',
                          justifyContent: 'flex-end',
                        }}>
                        {item.new_messages_count > 0 && (
                          <View style={styles.countContainer}>
                            <Text style={styles.counter}>
                              {item.new_messages_count}
                            </Text>
                          </View>
                        )}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => `dialog-${index}`}
          />
        )}
        {activeTab === 'notifications' && (
          <View style={[globalStyle.center, {flex: 1}]}>
            <Text>{_.t('notifications_no')}</Text>
          </View>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabContainer: {
    flex: 1,
    height: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#F50263',
    justifyContent: 'center',
    alignItems: 'center',
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
    // backgroundColor: '#FF5E89',
    // color: '#fff',
    // borderTopLeftRadius: 4,
    // borderBottomLeftRadius: 4,
    fontWeight: 'bold',
  },
  tabDefault: {
    color: 'rgba(0, 0, 0, 0.4)',
  },
  dialogCont: {
    flexDirection: 'row',
    // marginHorizontal: margin,
    paddingHorizontal: 10,
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomColor: 'rgba(0,0,0,0.25)',
    borderBottomWidth: 0.5,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
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
    color: '#C2C2C2',
    textAlign: 'right',
  },
  message: {
    flex: 9,
    fontSize: 12,
    color: '#4D4D4D',
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

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {dialogsRequest, dialogDeleteRequest})(Messages);
