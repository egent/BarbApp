import React from 'react';
import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import _ from '../../services/i18n';

const {height} = Dimensions.get('window');

const ModalAlert = ({visible, toggle, title, subTitle, onPress}) => {
  return (
    <Modal
      animationType={'fade'}
      transparent
      visible={visible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <TouchableOpacity onPress={toggle} style={styles.container}>
        <View style={styles.modal}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={toggle}
            hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
            <Icon name="close" color="#B4B4B4" size={20} />
          </TouchableOpacity>
         <Text style={styles.title}>{_.t(title)}</Text>
         <Text style={styles.subtitle}>{_.t(subTitle)}</Text>
         <View style={styles.btnContainer}>
            <TouchableOpacity onPress={toggle} style={styles.btn}>
               <Text style={styles.btnText}>{_.t('no')}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
               <Text style={styles.btnText}>{_.t('yes')}</Text>
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
     fontSize: 14,
     fontWeight: 'bold',
  }, 
  subtitle: {
     fontSize: 14,
     marginTop: 5,
  },
  btnContainer: {
   flexDirection: 'row',
   width: 200,
  },
  btn: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 20,
     paddingVertical: 20, 
  },
  btnText: {
   textTransform: 'uppercase',
   fontSize: 16,
   color: '#6DB7E8',
  },
});

export default ModalAlert;
