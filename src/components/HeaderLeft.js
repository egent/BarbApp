import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderLeft = ({navigation, icon = 'chevron-left'}) => {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 10,
      }}
      hitSlop={{top: 25, bottom: 25, left: 25, right: 25}}
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name={icon} color="#000" size={21} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
