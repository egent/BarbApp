import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
  SafeAreaView,
  Image,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from './src/store/configure';
import Navigator from './src/screens/Navigator';
import * as RNLocalize from 'react-native-localize';

console.disableYellowBox = true;

const { store, persistor } = configureStore();
const imgLoading = require('./src/assets/images/barb-anime2.gif');
const imgLogo =  require('./src/assets/images/logo.png');

const locales = RNLocalize.getLocales();
import moment from 'moment';
import "moment/locale/ru";
import "moment/locale/uk";
moment.locale(locales[0].languageCode)


// moment.updateLocale('en', {
//   relativeTime : {
      // future: "in %s",
      // past:   "%s ago",
      // s  : 'a few seconds',
      // ss : '%d seconds',
      // m:  "a minute",
      // mm: "%d minutes",
      // h:  "an hour",
      // hh: "%d hours",
      // d:  "a day",
      // dd: "%d days",
      // w:  "a week",
      // ww: "%d weeks",
      // M:  "a month",
      // MM: "%d months",
      // y:  "a year",
      // yy: "%d years"
//   }
// });

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
    backgroundColor: '#F50263',
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
