import React from 'react';
import {TouchableOpacity, Dimensions, Image, Linking} from 'react-native';

const {width} = Dimensions.get('window');
const paddingHorizontal = width * 0.05;

const iconPhone = require('../assets/images/icon_phone.png');

const HeaderRight = (props) => {
  const {phone} = props;
  return (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: paddingHorizontal,
      }}
      hitSlop={{top: 10, bottom: 10, left: 10, right: 40}}
      onPress={() => {
        Linking.openURL(`tel:${phone}`);
      }}>
      <Image
        source={iconPhone}
        style={{width: 48, height: 48, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};

export default HeaderRight;
