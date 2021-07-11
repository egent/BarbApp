"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactotronReactNative = _interopRequireDefault(require("reactotron-react-native"));

var _reactotronRedux = require("reactotron-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reactotron = _reactotronReactNative["default"] // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
.configure() // controls connection & communication settings
.useReactNative() // add all built-in react native plugins
.use((0, _reactotronRedux.reactotronRedux)()).connect(); // let's connect!


var _default = reactotron;
exports["default"] = _default;