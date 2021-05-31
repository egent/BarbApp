import React, {Component} from 'react';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import AuthStack from './auth/AuthStack';
import UserStack from './user/UserStack';
import ValidationAlertRedux from '../components/modal/ValidationAlertRedux';

export const navigationRef = React.createRef();
class Navigator extends Component {



  render() {
    const {logIn} = this.props.user;

    return (
      <NavigationContainer ref={navigationRef} theme={theme}>
        {logIn ? <UserStack /> : <AuthStack />}
        <Toast ref={(ref) => Toast.setRef(ref)} />
        <ValidationAlertRedux
          title="fill_fields"
          navigation={navigationRef.current}
        />
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
