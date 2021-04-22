import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import _ from '../../services/i18n';

const {width} = Dimensions.get('window');

const ResetPasswordConfirm = ({navigation}) => {
  const {phone} = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{_.t('reminder_password')}</Text>
      <Text style={styles.subTitle}>{_.t('send_password_phone', {phone})}</Text>
      <Text
        onPress={() => {
          navigation.navigate('Login');
        }}
        style={styles.enter}>
        {_.t('enter')}
      </Text>
      <Text
        onPress={() => {
          navigation.navigate('Registration');
        }}
        style={styles.newAcc}>
        {_.t('create_new_account')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width,
  },
  title: {
    fontSize: 16,
    marginVertical: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  subTitle: {
    color: '#B2B2B2',
    fontSize: 14,
  },
  enter: {
    color: '#6DB7E8',
    fontSize: 16,
    marginTop: 50,
    marginBottom: 20,
  },
  newAcc: {
    color: '#C3C8CB',
    fontSize: 16,
  },
});

export default ResetPasswordConfirm;
