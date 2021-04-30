import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderLeft = ({navigation, icon = 'chevron-left'}) => {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 10,
      }}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 40}}
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name={icon} color="#000" size={21} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
