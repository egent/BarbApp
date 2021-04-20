import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import _ from '../../services/i18n';
const Button = ({onPress, btnText, active = true}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, {backgroundColor: active ? '#F50263' : '#D8CFCF'}]}
      activeOpacity={0.8}>
      <Text style={styles.btnText}>{_.t(btnText)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    marginVertical: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Button;
