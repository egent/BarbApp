"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = configureStore;

var _redux = require("redux");

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _reduxPersist = require("redux-persist");

var _asyncStorage = _interopRequireDefault(require("@react-native-community/async-storage"));

var _reduxPersistTransformFilter = require("redux-persist-transform-filter");

var _autoMergeLevel = _interopRequireDefault(require("redux-persist/lib/stateReconciler/autoMergeLevel2"));

var _reducers = _interopRequireDefault(require("../reducers"));

var _sagas = _interopRequireDefault(require("../sagas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var saveSubsetBlackFilterUser = (0, _reduxPersistTransformFilter.createBlacklistFilter)('user', ['loading']);
var persistConfig = {
  timeout: 2000,
  key: 'app_2_1',
  storage: _asyncStorage["default"],
  stateReconciler: _autoMergeLevel["default"],
  transforms: [saveSubsetBlackFilterUser]
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, _reducers["default"]);
var sagaMiddleware = (0, _reduxSaga["default"])();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var enhancer = composeEnhancers((0, _redux.applyMiddleware)(sagaMiddleware));

function configureStore(initialState) {
  var store = (0, _redux.createStore)(persistedReducer, initialState, enhancer);
  var persistor = (0, _reduxPersist.persistStore)(store);
  sagaMiddleware.run(_sagas["default"]);
  return {
    store: store,
    persistor: persistor
  };
}