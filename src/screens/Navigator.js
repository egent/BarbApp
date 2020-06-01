import React, { Component } from 'react';
import {
    Text,
  } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthStack from './auth/AuthStack';
import UserStack from './user/UserStack';


class Navigator extends Component {
    render() {
        const { logIn } = this.props.user; 
        return (
            <NavigationContainer theme={theme}>
            {
                logIn ? (
                    <UserStack />
                ) : (
                    <AuthStack />
                )
            }
            </NavigationContainer>
        );
    }
}

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff'
    },
};

const mapStateToProps = state => ({
    user: state.user,
});

export default connect(mapStateToProps, {})(Navigator);
