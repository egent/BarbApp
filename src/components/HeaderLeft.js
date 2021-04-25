import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderLeft = (props) => {
  return (
    <TouchableOpacity
      style={{
        paddingLeft: 10,
      }}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 40}}
      onPress={() => {
        props.navigation.goBack();
      }}>
      <Icon name="chevron-left" color="#000" size={24} />
    </TouchableOpacity>
  );
};

export default HeaderLeft;
