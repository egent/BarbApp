import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import configureStore from './src/store/configure';
import Navigator from './src/screens/Navigator';


console.disableYellowBox = true;


const { width, height } = Dimensions.get('window');
const { store, persistor } = configureStore();

// const imgSplash = require('./assets/images/splash.png');

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

    // if (!this.state.reHydrated) {
    //   return (
    //     <View style={styles.container}>
    //     <ImageBackground source={imgSplash} style={styles.image}>
    //       <Text style={styles.text}>v 0.27</Text>
    //     </ImageBackground>
    //   </View>
    //   );
    // }

    return (
      <Provider store={store}>
          <Navigator />
      </Provider>

    );
  }

};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    color: "#fff",
    fontSize: 10,
    width: '100%',
    textAlign: 'center',
  }
});

AppRegistry.registerComponent('barbapp', () => App);
