import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';


export default class PreLoader extends Component {
  render() {
    return (
      <View  style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#F50263" />
      </View>
    );
  }
}
