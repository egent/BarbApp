import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderRightIcon = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      style={{marginRight: 10}}
      onPress={onPress}
      hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
      <Icon name={icon} color="#000" size={24} />
    </TouchableOpacity>
  );
};

export default HeaderRightIcon;
