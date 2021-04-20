import React from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions} from 'react-native';
import _ from '../../services/i18n';
const {width} = Dimensions.get('window');

const Input = ({label, help = '', value, setData, containerStyles = {}}) => {
  return (
    <View style={[styles.container, {...containerStyles}]}>
      <Text style={styles.label}>{_.t(label)}</Text>
      <TextInput style={styles.field} value={value} onChangeText={setData}  />
      {help.length > 0 && <Text style={styles.help}>{_.t(help)}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginBottom: 20,
  },
  label: {
    paddingBottom: 5,
    color: '#7C7F84',
    fontSize: 13,
  },
  field: {
    borderWidth: 1,
    borderColor: '#D4D6DF', 
    height: 42,
    paddingLeft: 5,
    color: '#7C7F84',
    fontSize: 14,

  },
  help: {
    paddingTop: 5,
    color: '#7C7F84',
    fontSize: 12,
  },

});

export default Input;
