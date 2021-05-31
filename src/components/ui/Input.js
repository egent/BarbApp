import React from 'react';
import {Text, View, TextInput, StyleSheet, Dimensions, Keyboard} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import _ from '../../services/i18n';
const {width} = Dimensions.get('window');

const Input = ({
  label,
  help = '',
  value,
  setData,
  containerStyles = {},
  autoCapitalize = 'none',
  keyboardType = 'default',
  mask = false,
  required = false,
  showLabel = true,
}) => {
  return (
    <View style={[styles.container, {...containerStyles}]}>
      {showLabel && (
        <Text style={styles.label}>
          {_.t(label)}
          {required && <Text> ({_.t('required')})</Text>}
        </Text>
      )}
      {mask === false ? (
        <TextInput
          style={styles.field}
          value={value}
          onChangeText={setData}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          // onSubmitEditing={Keyboard.dismiss}
        />
      ) : (
        <TextInputMask
          style={styles.field}
          returnKeyType="done"
          returnKeyLabel={_.t('close')}
          type={'custom'}
          onChangeText={setData}
          value={value}
          options={{
            mask: '+389999999999',
            validator: (value, settings) =>
              value.length === settings.mask.length,
          }}
          underlineColorAndroid={'transparent'}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          autofocus={true}
        />
      )}
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
    height: 48,
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
