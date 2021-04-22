import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Platform,
} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import {TextInputMask} from 'react-native-masked-text';
import {connect} from 'react-redux';
import PreLoader from '../../components/PreLoader';
import Input from '../../components/ui/Input';
import InputPassword from '../../components/ui/InputPassword';
import Button from '../../components/ui/Button';

import _ from '../../services/i18n';
import {authRequest} from '../../actions/user';

const {width} = Dimensions.get('window');
const margin = width * 0.1;

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
    };
  }

  componentDidMount() {
    const {phone, password, check_code_from_sms} = this.props.user;
    this.setState({
      phone: phone.length > 0 ? phone : '+380',
      password,
    });
    analytics().logEvent('LoginScreen', {});
  }

  componentDidUpdate(prevProps, prevState) {
    const {phone, password} = this.props.user;
    if (prevProps.user.password !== password && password.length > 0) {
      this.setState({phone, password});
    }
  }

  onChangePassword = (password) => {
    this.setState({
      password,
    });
  };

  setPhone = (phone) => {
    this.setState({phone});
  };

  setPassword = (password) => {
    this.setState({password});
  };

  render() {
    const {loading} = this.props.user;
    const {phone, password} = this.state;

    if (loading) {
      return <PreLoader />;
    }

    return (
      <KeyboardAvoidingView style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{_.t('authorization')}</Text>
          <Text style={styles.subtitleContainer}>
            {_.t('login_description')}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            width: width - 20,
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Input
            label="phone"
            value={phone}
            setData={this.setPhone}
            autoCapitalize="sentences"
          />
          <InputPassword
            label="password"
            value={password}
            setData={this.setPassword}
          />

          <Button
            onPress={() => {
            
                if (password.length > 0) {
                  this.props.authRequest({
                    navigation: this.props.navigation,
                    phone,
                    password,
                  });
                }
         
            }}
            btnText="enter"
            active={password.length > 0 ? true : false}
          />

          <View style={styles.linksContainer}>
            <Text
              style={[styles.link, {textAlign: 'center'}]}
              onPress={() => {
                this.props.navigation.navigate('ResetPassword');
              }}>
              {_.t('password_reset')}
            </Text>
          </View>
        </View>
        <View style={styles.emptyBox} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 25,
  },
  title: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  subtitleContainer: {
    marginTop: 14,
    marginHorizontal: 50,
    fontSize: 12,
    textAlign: 'center',
    color: '#B2B2B2',
  },
  linksContainer: {
    marginTop: 10,
    width: width - margin,
    marginHorizontal: margin,
    flexDirection: 'row',
  },
  link: {
    flex: 1,
    color: '#C3C8CB',
    fontSize: 16,
  },
  emptyBox: {flex: 1, justifyContent: 'flex-end'},
});

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  authRequest,
})(Login);
