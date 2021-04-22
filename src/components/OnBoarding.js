import React from 'react';
import { Text, View } from 'react-native';
import {useDispatch} from 'react-redux';
import {authLogout} from '../actions/user';

const OnBoarding = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>OnBoarding</Text>
        <Text style={{marginTop: 50}} onPress={()=>{dispatch(authLogout())}}>Logout</Text>
    </View>
);
};

export default OnBoarding;
