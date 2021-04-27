import React, {Component} from 'react';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './auth/AuthStack';
import UserStack from './user/UserStack';

class Navigator extends Component {
  render() {
    const {logIn} = this.props.user;
    return (
      <NavigationContainer theme={theme}>
        {logIn ? <UserStack /> : <AuthStack />}
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    );
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(Navigator);
