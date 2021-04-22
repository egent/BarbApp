import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from '../../services/i18n';
const {width} = Dimensions.get('window');

const InputPassword = ({
  label,
  help = '',
  value,
  setData,
  containerStyles = {},
}) => {
  const [secure, setSecure] = useState(true);
  return (
    <View style={[styles.container, {...containerStyles}]}>
      <Text style={styles.label}>{_.t(label)}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.field}
          value={value}
          onChangeText={setData}
          secureTextEntry={secure}
        />
        <TouchableOpacity
          onPress={() => {
            setSecure(!secure);
          }}
          style={styles.iconContainer}
          activeOpacity={0.8}>
          <Icon
            size={21}
            color="#6DB7E8"
            name={secure ? 'eye-off-outline' : 'eye-outline'}
          />
        </TouchableOpacity>
      </View>
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
    flex: 6,
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
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#D4D6DF',
  },
  iconContainer: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
  },
});

export default InputPassword;
