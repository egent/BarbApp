import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  AppRegistry,
  SafeAreaView,
  Image,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from './src/store/configure';
import Navigator from './src/screens/Navigator';

console.disableYellowBox = true;

const { width, height } = Dimensions.get('window');
const { store, persistor } = configureStore();
const imgLoading = require('./src/assets/images/barb-anime2.gif');
const imgLogo =  require('./src/assets/images/logo.png');

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      reHydrated: false,
    };
  }

  componentDidMount() {
    persistStore(store, {}, () => {
      this.setState({ reHydrated: true });
    });
  }

  render() {

    if (!this.state.reHydrated) {
      return (
        <View style={styles.container}>
          <Image source={imgLoading} style={styles.image} />
          <Image source={imgLogo} style={styles.logo} />
        </View>
      );
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
          <Navigator />
        </Provider>
      </SafeAreaView>

    );
  }
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FF5E89',
  },
  image: { 
    width: 123, 
    height: 112, 
    resizeMode: 'contain',
  },
  logo: { 
    width: 225, 
    height: 125, 
    resizeMode: 'contain',
  },
});

AppRegistry.registerComponent('barbapp', () => App);
