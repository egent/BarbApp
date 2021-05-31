import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';

const HeaderRightIconRedux = ({onPress, icon, navigation}) => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={{paddingRight: 10}}
      onPress={()=>{dispatch(onPress({navigation}))}}
      hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
      <Icon name={icon} color="#000" size={21} />
    </TouchableOpacity>
  );
};

export default HeaderRightIconRedux;
