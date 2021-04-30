import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  _Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';

const {height, width} = Dimensions.get('window');

const ValidationAlert = ({visible, toggle, title, btnOutHandler}) => {
  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={visible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity
        onPress={toggle}
        style={styles.container}
        activeOpacity={1}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={toggle}
            hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
            <Icon name="close" color="#B4B4B4" size={20} />
          </TouchableOpacity>
          <Text style={styles.title}>{_.t(title)}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={toggle}
              style={styles.btnReturn}
              activeOpacity={0.8}>
              <Text style={styles.returnText}>{_.t('return_to_form')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={btnOutHandler}
              activeOpacity={0.8}
              hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
              <Text style={styles.goOutText}>{_.t('go_out')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: height * 0.33,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  title: {
    fontSize: 18,
  },
  btnContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnReturn: {
    backgroundColor: '#F50263',
    paddingVertical: 10,
    width: width - 60,
  },
  returnText: {
    textAlign: 'center',
    color: '#fff',
  },
  goOutText: {
    marginTop: 30,
    fontSize: 14,
    color: '#6DB7E8',
  },
});

export default ValidationAlert;
