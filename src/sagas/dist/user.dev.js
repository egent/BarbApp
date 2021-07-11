"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchAuthSaga = watchAuthSaga;
exports.watchUserInfoSaga = watchUserInfoSaga;
exports.watchUserInfoFullSaga = watchUserInfoFullSaga;
exports.watchUserInfoFullUpdateSaga = watchUserInfoFullUpdateSaga;
exports.watchSendEmailSaga = watchSendEmailSaga;
exports.watchUploadPhotoSaga = watchUploadPhotoSaga;
exports.watchDialogsSaga = watchDialogsSaga;
exports.watchDialogSaga = watchDialogSaga;
exports.watchMessageSendSaga = watchMessageSendSaga;
exports.watchSaveTokenSaga = watchSaveTokenSaga;
exports.watchRegisterInfoSaga = watchRegisterInfoSaga;
exports.watchRegisterSaga = watchRegisterSaga;
exports.watchCheckCodeSaga = watchCheckCodeSaga;
exports.watchGetCodeSaga = watchGetCodeSaga;
exports.watchPasswordResetSaga = watchPasswordResetSaga;
exports.watchDialogDeleteSaga = watchDialogDeleteSaga;
exports.watchSpecsSaga = watchSpecsSaga;
exports.watchSpecsSetSaga = watchSpecsSetSaga;
exports.watchProfileDescriptionsSaga = watchProfileDescriptionsSaga;
exports.watchProfileDescriptionUpdateSaga = watchProfileDescriptionUpdateSaga;
exports.watchGetWorkspacesSaga = watchGetWorkspacesSaga;
exports.watchBeautyRoomsSaga = watchBeautyRoomsSaga;
exports.watchCityInfoSaga = watchCityInfoSaga;
exports.watchWorkspaceAddSaga = watchWorkspaceAddSaga;
exports.watchWorkspaceDeleteSaga = watchWorkspaceDeleteSaga;
exports.watchBeautyRoomSendSaga = watchBeautyRoomSendSaga;
exports.watchWorkplaceUpdateSaga = watchWorkplaceUpdateSaga;
exports.watchPriceSaga = watchPriceSaga;
exports.watchPriceUpdateSaga = watchPriceUpdateSaga;

var _reactNative = require("react-native");

var _effects = require("redux-saga/effects");

var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));

var _i18n = _interopRequireDefault(require("../services/i18n"));

var _user = require("../actions/user");

var _selectors = require("./selectors");

var _api = require("../services/api");

var _api2 = require("../constants/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(authSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(userInfoSaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(userInfoFullSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(userInfoFullUpdateSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(sendEmailSaga),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(uploadPhotoSaga),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(dialogsSaga),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(dialogSaga),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(messageSendSaga),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(saveTokenSaga),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(registerInfoSaga),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(registerSaga),
    _marked13 =
/*#__PURE__*/
regeneratorRuntime.mark(checkCodeSaga),
    _marked14 =
/*#__PURE__*/
regeneratorRuntime.mark(getCodeSaga),
    _marked15 =
/*#__PURE__*/
regeneratorRuntime.mark(passwordResetSaga),
    _marked16 =
/*#__PURE__*/
regeneratorRuntime.mark(dialogDeleteSaga),
    _marked17 =
/*#__PURE__*/
regeneratorRuntime.mark(specsSaga),
    _marked18 =
/*#__PURE__*/
regeneratorRuntime.mark(specsSetSaga),
    _marked19 =
/*#__PURE__*/
regeneratorRuntime.mark(profileDescriptionsSaga),
    _marked20 =
/*#__PURE__*/
regeneratorRuntime.mark(profileDescriptionUpdateSaga),
    _marked21 =
/*#__PURE__*/
regeneratorRuntime.mark(getWorkspacesSaga),
    _marked22 =
/*#__PURE__*/
regeneratorRuntime.mark(beautyRoomsSaga),
    _marked23 =
/*#__PURE__*/
regeneratorRuntime.mark(cityInfoSaga),
    _marked24 =
/*#__PURE__*/
regeneratorRuntime.mark(workspaceAddSaga),
    _marked25 =
/*#__PURE__*/
regeneratorRuntime.mark(workspaceDeleteSaga),
    _marked26 =
/*#__PURE__*/
regeneratorRuntime.mark(beautyRoomSendSaga),
    _marked27 =
/*#__PURE__*/
regeneratorRuntime.mark(workplaceUpdateSaga),
    _marked28 =
/*#__PURE__*/
regeneratorRuntime.mark(priceSaga),
    _marked29 =
/*#__PURE__*/
regeneratorRuntime.mark(priceUpdateSaga),
    _marked30 =
/*#__PURE__*/
regeneratorRuntime.mark(watchAuthSaga),
    _marked31 =
/*#__PURE__*/
regeneratorRuntime.mark(watchRegisterInfoSaga),
    _marked32 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserInfoSaga),
    _marked33 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserInfoFullSaga),
    _marked34 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUserInfoFullUpdateSaga),
    _marked35 =
/*#__PURE__*/
regeneratorRuntime.mark(watchSendEmailSaga),
    _marked36 =
/*#__PURE__*/
regeneratorRuntime.mark(watchUploadPhotoSaga),
    _marked37 =
/*#__PURE__*/
regeneratorRuntime.mark(watchDialogsSaga),
    _marked38 =
/*#__PURE__*/
regeneratorRuntime.mark(watchDialogSaga),
    _marked39 =
/*#__PURE__*/
regeneratorRuntime.mark(watchMessageSendSaga),
    _marked40 =
/*#__PURE__*/
regeneratorRuntime.mark(watchSaveTokenSaga),
    _marked41 =
/*#__PURE__*/
regeneratorRuntime.mark(watchRegisterSaga),
    _marked42 =
/*#__PURE__*/
regeneratorRuntime.mark(watchCheckCodeSaga),
    _marked43 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetCodeSaga),
    _marked44 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPasswordResetSaga),
    _marked45 =
/*#__PURE__*/
regeneratorRuntime.mark(watchDialogDeleteSaga),
    _marked46 =
/*#__PURE__*/
regeneratorRuntime.mark(watchSpecsSaga),
    _marked47 =
/*#__PURE__*/
regeneratorRuntime.mark(watchSpecsSetSaga),
    _marked48 =
/*#__PURE__*/
regeneratorRuntime.mark(watchProfileDescriptionsSaga),
    _marked49 =
/*#__PURE__*/
regeneratorRuntime.mark(watchProfileDescriptionUpdateSaga),
    _marked50 =
/*#__PURE__*/
regeneratorRuntime.mark(watchGetWorkspacesSaga),
    _marked51 =
/*#__PURE__*/
regeneratorRuntime.mark(watchBeautyRoomsSaga),
    _marked52 =
/*#__PURE__*/
regeneratorRuntime.mark(watchCityInfoSaga),
    _marked53 =
/*#__PURE__*/
regeneratorRuntime.mark(watchWorkspaceAddSaga),
    _marked54 =
/*#__PURE__*/
regeneratorRuntime.mark(watchWorkspaceDeleteSaga),
    _marked55 =
/*#__PURE__*/
regeneratorRuntime.mark(watchBeautyRoomSendSaga),
    _marked56 =
/*#__PURE__*/
regeneratorRuntime.mark(watchWorkplaceUpdateSaga),
    _marked57 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPriceSaga),
    _marked58 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPriceUpdateSaga);

function authSaga(params) {
  var grant_type, client_id, client_secret, phone, password, navigation, response;
  return regeneratorRuntime.wrap(function authSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_selectors.getGrantType);

        case 2:
          grant_type = _context.sent;
          _context.next = 5;
          return (0, _effects.select)(_selectors.getClientId);

        case 5:
          client_id = _context.sent;
          _context.next = 8;
          return (0, _effects.select)(_selectors.getClientSecret);

        case 8:
          client_secret = _context.sent;
          phone = params.phone, password = params.password, navigation = params.navigation;
          _context.next = 12;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_AUTH, 'POST', {
            username: phone,
            password: password,
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret
          });

        case 12:
          response = _context.sent;

          if (!(response.status === 200)) {
            _context.next = 18;
            break;
          }

          _context.next = 16;
          return (0, _effects.put)((0, _user.authSuccess)({
            phone: phone,
            password: password,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token
          }));

        case 16:
          _context.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.error);

          _context.next = 21;
          return (0, _effects.put)((0, _user.authFailure)({}));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function userInfoSaga() {
  var token, response, _response$data$data, messages, user;

  return regeneratorRuntime.wrap(function userInfoSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context2.sent;
          _context2.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_USER_INFO, 'GET', {}, token);

        case 5:
          response = _context2.sent;

          if (!(response.status === 200)) {
            _context2.next = 12;
            break;
          }

          _response$data$data = response.data.data, messages = _response$data$data.messages, user = _response$data$data.user;
          _context2.next = 10;
          return (0, _effects.put)((0, _user.userInfoSuccess)({
            messages: messages,
            user: user
          }));

        case 10:
          _context2.next = 20;
          break;

        case 12:
          if (!(response.status === 401)) {
            _context2.next = 17;
            break;
          }

          _context2.next = 15;
          return (0, _effects.put)((0, _user.authLogout)());

        case 15:
          _context2.next = 20;
          break;

        case 17:
          _reactNative.Alert.alert('', response.data.message);

          _context2.next = 20;
          return (0, _effects.put)((0, _user.userInfoFailure)({}));

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function userInfoFullSaga() {
  var token, response, user;
  return regeneratorRuntime.wrap(function userInfoFullSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context3.sent;
          _context3.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_USER_INFO_FULL, 'GET', {}, token);

        case 5:
          response = _context3.sent;

          if (!(response.status === 200)) {
            _context3.next = 12;
            break;
          }

          user = response.data.data.user;
          _context3.next = 10;
          return (0, _effects.put)((0, _user.userInfoFullSuccess)({
            user: user
          }));

        case 10:
          _context3.next = 20;
          break;

        case 12:
          if (!(response.status === 401)) {
            _context3.next = 17;
            break;
          }

          _context3.next = 15;
          return (0, _effects.put)((0, _user.authLogout)());

        case 15:
          _context3.next = 20;
          break;

        case 17:
          _reactNative.Alert.alert('', response.data.message);

          _context3.next = 20;
          return (0, _effects.put)((0, _user.userInfoFullFailure)({}));

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function userInfoFullUpdateSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function userInfoFullUpdateSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context4.sent;
          _context4.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_USER_INFO_FULL, 'POST', params, token);

        case 5:
          response = _context4.sent;

          if (!(response.status === 200)) {
            _context4.next = 11;
            break;
          }

          _context4.next = 9;
          return (0, _effects.put)((0, _user.userInfoFullUpdateSuccess)());

        case 9:
          _context4.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context4.next = 16;
            break;
          }

          _context4.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context4.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context4.next = 19;
          return (0, _effects.put)((0, _user.userInfoFullUpdateFailure)({}));

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function sendEmailSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function sendEmailSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context5.sent;
          _context5.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SEND_EMAIL, 'GET', {}, token);

        case 5:
          response = _context5.sent;

          if (!(response.status === 200)) {
            _context5.next = 12;
            break;
          }

          _reactNative.Alert.alert('', response.data.data);

          _context5.next = 10;
          return (0, _effects.put)((0, _user.sendEmailSuccess)());

        case 10:
          _context5.next = 20;
          break;

        case 12:
          if (!(response.status === 401)) {
            _context5.next = 17;
            break;
          }

          _context5.next = 15;
          return (0, _effects.put)((0, _user.authLogout)());

        case 15:
          _context5.next = 20;
          break;

        case 17:
          _reactNative.Alert.alert('', response.data.message);

          _context5.next = 20;
          return (0, _effects.put)((0, _user.sendEmailFailure)({}));

        case 20:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function uploadPhotoSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function uploadPhotoSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context6.sent;
          _context6.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_UPLOAD_PHOTO, 'POST', params, token);

        case 5:
          response = _context6.sent;

          if (!(response.status === 200)) {
            _context6.next = 13;
            break;
          }

          _context6.next = 9;
          return (0, _effects.put)((0, _user.uploadPhotoSuccess)());

        case 9:
          _context6.next = 11;
          return (0, _effects.put)((0, _user.profileDescriptionsRequest)());

        case 11:
          _context6.next = 21;
          break;

        case 13:
          if (!(response.status === 401)) {
            _context6.next = 18;
            break;
          }

          _context6.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context6.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context6.next = 21;
          return (0, _effects.put)((0, _user.uploadPhotoFailure)({}));

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function dialogsSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function dialogsSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context7.sent;
          _context7.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_DIALOGS, 'GET', {}, token);

        case 5:
          response = _context7.sent;

          if (!(response.status === 200)) {
            _context7.next = 11;
            break;
          }

          _context7.next = 9;
          return (0, _effects.put)((0, _user.dialogsSuccess)({
            dialogs: response.data.data.dialogs
          }));

        case 9:
          _context7.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context7.next = 16;
            break;
          }

          _context7.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context7.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context7.next = 19;
          return (0, _effects.put)((0, _user.dialogsFailure)({}));

        case 19:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function dialogSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function dialogSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context8.sent;
          _context8.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_DIALOG + params.id, 'GET', {}, token);

        case 5:
          response = _context8.sent;

          if (!(response.status === 200)) {
            _context8.next = 11;
            break;
          }

          _context8.next = 9;
          return (0, _effects.put)((0, _user.dialogSuccess)({
            dialog: response.data.data.dialog,
            dialog_messages: response.data.data.messages
          }));

        case 9:
          _context8.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context8.next = 16;
            break;
          }

          _context8.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context8.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context8.next = 19;
          return (0, _effects.put)((0, _user.dialogFailure)({}));

        case 19:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function messageSendSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function messageSendSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context9.sent;
          _context9.next = 5;
          return (0, _effects.call)(_api.api, _api2.BACKEND_URL + '/api-dialog/' + params.dialog_id + '/send', 'POST', params, token);

        case 5:
          response = _context9.sent;

          if (!(response.status === 200)) {
            _context9.next = 13;
            break;
          }

          _context9.next = 9;
          return (0, _effects.put)((0, _user.messageSendSuccess)());

        case 9:
          _context9.next = 11;
          return (0, _effects.put)((0, _user.dialogRequest)({
            id: params.dialog_id
          }));

        case 11:
          _context9.next = 21;
          break;

        case 13:
          if (!(response.status === 401)) {
            _context9.next = 18;
            break;
          }

          _context9.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context9.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context9.next = 21;
          return (0, _effects.put)((0, _user.messageSendFailure)({}));

        case 21:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function saveTokenSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function saveTokenSaga$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context10.sent;
          _context10.next = 5;
          return (0, _effects.call)(_api.api, _api2.BACKEND_URL + _api2.ENDPOINT_SAVE_PUSH_TOKEN, 'POST', params, token);

        case 5:
          response = _context10.sent;

          if (!(response.status === 200)) {
            _context10.next = 11;
            break;
          }

          _context10.next = 9;
          return (0, _effects.put)((0, _user.saveTokenSuccess)());

        case 9:
          _context10.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context10.next = 16;
            break;
          }

          _context10.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context10.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context10.next = 19;
          return (0, _effects.put)((0, _user.saveTokenFailure)({}));

        case 19:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function registerInfoSaga() {
  var response, _response$data$data2, _types, cities;

  return regeneratorRuntime.wrap(function registerInfoSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_REGISTER, 'GET', {});

        case 2:
          response = _context11.sent;

          if (!(response.status === 200)) {
            _context11.next = 9;
            break;
          }

          _response$data$data2 = response.data.data, _types = _response$data$data2.types, cities = _response$data$data2.cities;
          _context11.next = 7;
          return (0, _effects.put)((0, _user.getRegisterInfoSuccess)({
            types: _types,
            cities: cities
          }));

        case 7:
          _context11.next = 12;
          break;

        case 9:
          _reactNative.Alert.alert('', response.data.message);

          _context11.next = 12;
          return (0, _effects.put)((0, _user.getRegisterInfoFailure)({}));

        case 12:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function registerSaga(params) {
  var payload, navigation, phone, password, response, _response$data$data3, message, result;

  return regeneratorRuntime.wrap(function registerSaga$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          payload = params.payload, navigation = params.navigation;
          phone = payload.phone, password = payload.password;
          _context12.next = 4;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_REGISTER, 'POST', payload);

        case 4:
          response = _context12.sent;

          if (!(response.data.status_code === 200)) {
            _context12.next = 13;
            break;
          }

          _response$data$data3 = response.data.data, message = _response$data$data3.message, result = _response$data$data3.result;
          _context12.next = 9;
          return (0, _effects.put)((0, _user.registerSuccess)({
            result: result
          }));

        case 9:
          _context12.next = 11;
          return (0, _effects.put)((0, _user.authRequest)({
            phone: phone,
            password: password,
            navigation: navigation
          }));

        case 11:
          _context12.next = 16;
          break;

        case 13:
          _reactNative.Alert.alert('', response.data.error);

          _context12.next = 16;
          return (0, _effects.put)((0, _user.registerFailure)({}));

        case 16:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function checkCodeSaga(params) {
  var phone, code, navigation, response, _response$data$data4, message, password;

  return regeneratorRuntime.wrap(function checkCodeSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          phone = params.phone, code = params.code, navigation = params.navigation;
          _context13.next = 3;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_CHECK_CODE, 'POST', {
            phone: phone,
            code: code
          });

        case 3:
          response = _context13.sent;

          if (!(response.status === 200)) {
            _context13.next = 11;
            break;
          }

          _response$data$data4 = response.data.data, message = _response$data$data4.message, password = _response$data$data4.password;
          _context13.next = 8;
          return (0, _effects.put)((0, _user.checkCodeSuccess)({
            phone: phone,
            password: password
          }));

        case 8:
          // Alert.alert('', message);
          navigation.navigate('UserInfo');
          _context13.next = 14;
          break;

        case 11:
          _reactNative.Alert.alert('', response.data.message);

          _context13.next = 14;
          return (0, _effects.put)((0, _user.checkCodeFailure)({}));

        case 14:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function getCodeSaga(params) {
  var phone, city, navigation, response, _response$data$data5, code, message;

  return regeneratorRuntime.wrap(function getCodeSaga$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          phone = params.phone, city = params.city, navigation = params.navigation;
          _context14.next = 3;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_GET_CODE, 'POST', {
            city_id: city.id,
            phone: phone
          });

        case 3:
          response = _context14.sent;

          if (!(response.status === 200)) {
            _context14.next = 19;
            break;
          }

          _response$data$data5 = response.data.data, code = _response$data$data5.code, message = _response$data$data5.message;
          _context14.prev = 6;
          _context14.next = 9;
          return (0, _effects.put)((0, _user.getCodeSuccess)({
            code: code,
            phone: phone,
            city: city
          }));

        case 9:
          navigation.navigate('CheckSms');
          _context14.next = 17;
          break;

        case 12:
          _context14.prev = 12;
          _context14.t0 = _context14["catch"](6);

          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context14.next = 17;
          return (0, _effects.put)((0, _user.getCodeFailure)({}));

        case 17:
          _context14.next = 22;
          break;

        case 19:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context14.next = 22;
          return (0, _effects.put)((0, _user.getCodeFailure)({}));

        case 22:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14, null, [[6, 12]]);
}

function passwordResetSaga(params) {
  var phone, navigation, response, status_code;
  return regeneratorRuntime.wrap(function passwordResetSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          phone = params.phone, navigation = params.navigation;
          _context15.next = 3;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PASSWORD_RESET, 'POST', {
            phone: phone
          });

        case 3:
          response = _context15.sent;
          status_code = response.data.status_code;

          if (!(status_code === 200)) {
            _context15.next = 11;
            break;
          }

          _context15.next = 8;
          return (0, _effects.put)((0, _user.passwordResetSuccess)({
            phone: phone
          }));

        case 8:
          navigation.navigate('ResetPasswordConfirm');
          _context15.next = 14;
          break;

        case 11:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.error,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context15.next = 14;
          return (0, _effects.put)((0, _user.passwordResetFailure)({}));

        case 14:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function dialogDeleteSaga(params) {
  var token, dialogs, response;
  return regeneratorRuntime.wrap(function dialogDeleteSaga$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context16.sent;
          dialogs = params.dialogs;
          _context16.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_DELETE_DIALOGS, 'POST', {
            dialogs: dialogs
          }, token);

        case 6:
          response = _context16.sent;

          if (!(response.status === 200)) {
            _context16.next = 15;
            break;
          }

          _context16.next = 10;
          return (0, _effects.put)((0, _user.dialogDeleteSuccess)());

        case 10:
          _context16.next = 12;
          return (0, _effects.put)((0, _user.dialogsRequest)());

        case 12:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('message_deleted'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context16.next = 25;
          break;

        case 15:
          if (!(response.status === 401)) {
            _context16.next = 22;
            break;
          }

          _context16.next = 18;
          return (0, _effects.put)((0, _user.dialogDeleteFailure)({}));

        case 18:
          _context16.next = 20;
          return (0, _effects.put)((0, _user.authLogout)());

        case 20:
          _context16.next = 25;
          break;

        case 22:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context16.next = 25;
          return (0, _effects.put)((0, _user.dialogDeleteFailure)({}));

        case 25:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function specsSaga() {
  var token, response, specs;
  return regeneratorRuntime.wrap(function specsSaga$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context17.sent;
          _context17.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SPECS, 'GET', {}, token);

        case 5:
          response = _context17.sent;

          if (!(response.status === 200)) {
            _context17.next = 14;
            break;
          }

          specs = response.data.data.specs;
          _context17.next = 10;
          return (0, _effects.put)((0, _user.specsSuccess)({
            specs: specs
          }));

        case 10:
          _context17.next = 12;
          return (0, _effects.put)((0, _user.priceRequest)());

        case 12:
          _context17.next = 24;
          break;

        case 14:
          if (!(response.status === 401)) {
            _context17.next = 21;
            break;
          }

          _context17.next = 17;
          return (0, _effects.put)((0, _user.specsFailure)({}));

        case 17:
          _context17.next = 19;
          return (0, _effects.put)((0, _user.authLogout)());

        case 19:
          _context17.next = 24;
          break;

        case 21:
          _reactNative.Alert.alert('', response.data.message);

          _context17.next = 24;
          return (0, _effects.put)((0, _user.specsFailure)({}));

        case 24:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function specsSetSaga(params) {
  var navigation, payload, token, response, specs;
  return regeneratorRuntime.wrap(function specsSetSaga$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          navigation = params.navigation, payload = params.payload;
          _context18.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context18.sent;
          _context18.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SPECS, 'POST', payload, token);

        case 6:
          response = _context18.sent;

          if (!(response.status === 200)) {
            _context18.next = 17;
            break;
          }

          specs = response.data.data.specs;
          _context18.next = 11;
          return (0, _effects.put)((0, _user.specsSetSuccess)({
            specs: specs
          }));

        case 11:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            // text1: title,
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context18.next = 14;
          return (0, _effects.put)((0, _user.specsRequest)());

        case 14:
          navigation.goBack();
          _context18.next = 27;
          break;

        case 17:
          if (!(response.status === 401)) {
            _context18.next = 24;
            break;
          }

          _context18.next = 20;
          return (0, _effects.put)((0, _user.specsSetFailure)({}));

        case 20:
          _context18.next = 22;
          return (0, _effects.put)((0, _user.authLogout)());

        case 22:
          _context18.next = 27;
          break;

        case 24:
          _reactNative.Alert.alert('', response.data.message);

          _context18.next = 27;
          return (0, _effects.put)((0, _user.specsSetFailure)({}));

        case 27:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function profileDescriptionsSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function profileDescriptionsSaga$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context19.sent;
          _context19.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROFILE_DESCRIPTIONS, 'GET', {}, token);

        case 5:
          response = _context19.sent;

          if (!(response.status === 200)) {
            _context19.next = 11;
            break;
          }

          _context19.next = 9;
          return (0, _effects.put)((0, _user.profileDescriptionsSuccess)({
            data: response.data.data
          }));

        case 9:
          _context19.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context19.next = 18;
            break;
          }

          _context19.next = 14;
          return (0, _effects.put)((0, _user.profileDescriptionsFailure)({}));

        case 14:
          _context19.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context19.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context19.next = 21;
          return (0, _effects.put)((0, _user.profileDescriptionsFailure)({}));

        case 21:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function profileDescriptionUpdateSaga(params) {
  var navigation, payload, token, response;
  return regeneratorRuntime.wrap(function profileDescriptionUpdateSaga$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          navigation = params.navigation, payload = params.payload;
          _context20.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context20.sent;
          _context20.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROFILE_DESCRIPTIONS, 'POST', payload, token);

        case 6:
          response = _context20.sent;

          if (!(response.status === 200)) {
            _context20.next = 16;
            break;
          }

          _context20.next = 10;
          return (0, _effects.put)((0, _user.profileDescriptionUpdateSuccess)());

        case 10:
          _context20.next = 12;
          return (0, _effects.put)((0, _user.profileDescriptionsRequest)());

        case 12:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          navigation.goBack();
          _context20.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context20.next = 23;
            break;
          }

          _context20.next = 19;
          return (0, _effects.put)((0, _user.profileDescriptionUpdateFailure)({}));

        case 19:
          _context20.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context20.next = 26;
          break;

        case 23:
          _reactNative.Alert.alert('', response.data.message);

          _context20.next = 26;
          return (0, _effects.put)((0, _user.profileDescriptionUpdateFailure)({}));

        case 26:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function getWorkspacesSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function getWorkspacesSaga$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context21.sent;
          _context21.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_GET_WORKPLACES, 'GET', {}, token);

        case 5:
          response = _context21.sent;

          if (!(response.status === 200)) {
            _context21.next = 11;
            break;
          }

          _context21.next = 9;
          return (0, _effects.put)((0, _user.getWorkplacesSuccess)({
            data: response.data
          }));

        case 9:
          _context21.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context21.next = 16;
            break;
          }

          _context21.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context21.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context21.next = 19;
          return (0, _effects.put)((0, _user.getWorkplacesFailure)({}));

        case 19:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function beautyRoomsSaga(_ref) {
  var term, token, response;
  return regeneratorRuntime.wrap(function beautyRoomsSaga$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          term = _ref.term;
          _context22.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context22.sent;
          _context22.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_POINT_SEARCH_NAME, 'POST', {
            term: term
          }, token);

        case 6:
          response = _context22.sent;

          if (!(response.data.status_code === 200)) {
            _context22.next = 12;
            break;
          }

          _context22.next = 10;
          return (0, _effects.put)((0, _user.beautyRoomsSuccess)({
            data: response.data
          }));

        case 10:
          _context22.next = 20;
          break;

        case 12:
          if (!(response.status === 401)) {
            _context22.next = 17;
            break;
          }

          _context22.next = 15;
          return (0, _effects.put)((0, _user.authLogout)());

        case 15:
          _context22.next = 20;
          break;

        case 17:
          _reactNative.Alert.alert('', response.data.message);

          _context22.next = 20;
          return (0, _effects.put)((0, _user.beautyRoomsFailure)({}));

        case 20:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function cityInfoSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function cityInfoSaga$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context23.sent;
          _context23.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_GET_CITY_INFO, 'GET', {}, token);

        case 5:
          response = _context23.sent;

          if (!(response.status === 200)) {
            _context23.next = 11;
            break;
          }

          _context23.next = 9;
          return (0, _effects.put)((0, _user.cityInfoSuccess)({
            data: response.data
          }));

        case 9:
          _context23.next = 19;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context23.next = 16;
            break;
          }

          _context23.next = 14;
          return (0, _effects.put)((0, _user.authLogout)());

        case 14:
          _context23.next = 19;
          break;

        case 16:
          _reactNative.Alert.alert('', response.data.message);

          _context23.next = 19;
          return (0, _effects.put)((0, _user.cityInfoFailure)({}));

        case 19:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

function workspaceAddSaga(params) {
  var navigation, payload, token, response;
  return regeneratorRuntime.wrap(function workspaceAddSaga$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          navigation = params.navigation, payload = params.payload;
          _context24.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context24.sent;
          _context24.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_WORKPLACE_ADD, 'POST', payload, token);

        case 6:
          response = _context24.sent;

          if (!(response.data.status_code === 200)) {
            _context24.next = 16;
            break;
          }

          _context24.next = 10;
          return (0, _effects.put)((0, _user.getWorkplacesRequest)());

        case 10:
          _context24.next = 12;
          return (0, _effects.put)((0, _user.workplaceAddSuccess)());

        case 12:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          navigation.goBack();
          _context24.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context24.next = 23;
            break;
          }

          _context24.next = 19;
          return (0, _effects.put)((0, _user.workplaceAddFailure)({}));

        case 19:
          _context24.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context24.next = 26;
          break;

        case 23:
          _reactNative.Alert.alert('', response.data.message);

          _context24.next = 26;
          return (0, _effects.put)((0, _user.workplaceAddFailure)({}));

        case 26:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}

function workspaceDeleteSaga(params) {
  var address_id, navigation, token, response;
  return regeneratorRuntime.wrap(function workspaceDeleteSaga$(_context25) {
    while (1) {
      switch (_context25.prev = _context25.next) {
        case 0:
          address_id = params.address_id, navigation = params.navigation;
          _context25.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context25.sent;
          _context25.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_WORKPLACE_DELETE, 'POST', {
            address_id: address_id
          }, token);

        case 6:
          response = _context25.sent;

          if (!(response.data.status_code === 200)) {
            _context25.next = 16;
            break;
          }

          _context25.next = 10;
          return (0, _effects.put)((0, _user.getWorkplacesRequest)());

        case 10:
          _context25.next = 12;
          return (0, _effects.put)((0, _user.workplaceDeleteSuccess)());

        case 12:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          if (navigation !== undefined) {
            navigation.goBack();
          }

          _context25.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context25.next = 23;
            break;
          }

          _context25.next = 19;
          return (0, _effects.put)((0, _user.workplaceDeleteFailure)({}));

        case 19:
          _context25.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context25.next = 26;
          break;

        case 23:
          _reactNative.Alert.alert('', response.data.message);

          _context25.next = 26;
          return (0, _effects.put)((0, _user.workplaceDeleteFailure)({}));

        case 26:
        case "end":
          return _context25.stop();
      }
    }
  }, _marked25);
}

function beautyRoomSendSaga(_ref2) {
  var navigation, _ref3, beauty_name, workspace_address, beauty_room, workspace_type, district_select, sub_district_select, info, metro_select_array, workspace_phones, scheduleMenuActive, scheduleDays, schedule_odd, schedule_odd_time, district_select_in_client, workspace_address_comment, address_id, breaks_done, beauty_copy, checkForm, payload, microdistricts, metros, work_dist;

  return regeneratorRuntime.wrap(function beautyRoomSendSaga$(_context26) {
    while (1) {
      switch (_context26.prev = _context26.next) {
        case 0:
          navigation = _ref2.navigation;
          _context26.next = 3;
          return (0, _effects.select)(_selectors.getUserState);

        case 3:
          _ref3 = _context26.sent;
          beauty_name = _ref3.beauty_name;
          workspace_address = _ref3.workspace_address;
          beauty_room = _ref3.beauty_room;
          workspace_type = _ref3.workspace_type;
          district_select = _ref3.district_select;
          sub_district_select = _ref3.sub_district_select;
          info = _ref3.info;
          metro_select_array = _ref3.metro_select_array;
          workspace_phones = _ref3.workspace_phones;
          scheduleMenuActive = _ref3.scheduleMenuActive;
          scheduleDays = _ref3.scheduleDays;
          schedule_odd = _ref3.schedule_odd;
          schedule_odd_time = _ref3.schedule_odd_time;
          district_select_in_client = _ref3.district_select_in_client;
          workspace_address_comment = _ref3.workspace_address_comment;
          address_id = _ref3.address_id;
          breaks_done = _ref3.breaks_done;
          beauty_copy = _ref3.beauty_copy;
          checkForm = false;

          if (workspace_type === 2 && beauty_name.length > 0 && workspace_address.length > 0 && workspace_phones.length > 0) {
            checkForm = true;
          }

          if (workspace_type === 1 && workspace_address.length > 0) {
            checkForm = true;
          }

          if (workspace_type === 3) {
            checkForm = true;
          }

          if (!checkForm) {
            _context26.next = 46;
            break;
          }

          payload = {
            salon_name: beauty_name,
            street: workspace_address,
            workplace: workspace_type,
            id: address_id,
            salon_address_id: address_id,
            salon_id: beauty_room,
            city_id: info.city.id,
            comment: workspace_address_comment,
            breaks: breaks_done
          };

          if (workspace_type !== 3 && district_select !== null) {
            payload = _objectSpread({}, payload, {
              district_id: district_select.id
            });
          }

          if (workspace_type !== 3 && sub_district_select !== null && sub_district_select.length > 0) {
            microdistricts = [];
            sub_district_select.map(function (m) {
              microdistricts.push(m.id);
            });
            payload = _objectSpread({}, payload, {
              microdistricts: microdistricts
            });
          }

          if (workspace_type !== 3 && metro_select_array !== null && metro_select_array.length > 0) {
            metros = [];
            metro_select_array.map(function (m) {
              metros.push(m.id);
            });
            payload = _objectSpread({}, payload, {
              metros: metros
            });
          }

          if (workspace_type === 3 && district_select_in_client !== null && district_select_in_client.length > 0) {
            work_dist = [];
            district_select_in_client.map(function (m) {
              work_dist.push(m.id);
            });
            payload = _objectSpread({}, payload, {
              work_dist: work_dist
            });
          }

          if (workspace_phones !== null && workspace_phones.length > 0) {
            payload = _objectSpread({}, payload, {
              phones: workspace_phones
            });
          }

          if (scheduleMenuActive === 1) {
            payload = _objectSpread({}, payload, {
              schedule_type: 1,
              schedule: {
                day: scheduleDays
              }
            });
          }

          if (scheduleMenuActive === 2) {
            payload = _objectSpread({}, payload, {
              schedule_type: 2,
              schedule_odd: schedule_odd,
              schedule: schedule_odd_time // schedule: {
              //   day: scheduleDays,
              // },

            });
          }

          if (scheduleMenuActive === 3) {
            payload = _objectSpread({}, payload, {
              schedule_type: 3
            });
          } // const breakDays = [];
          // for (let i = 0; i < 7; i++) {
          //   if (workspace_breaks[0].days[i] === 'on') {
          //     breakDays.push(workspace_breaks[0].days[i]);
          //   }
          // }
          // if (breakDays.length > 0) {
          //   payload = {...payload, breaks: breaks_done};
          // }


          if (!(address_id === '-1')) {
            _context26.next = 42;
            break;
          }

          if (beauty_copy !== null) {
            payload = _objectSpread({}, payload, {
              salon_id: beauty_copy.salon_id,
              salon_address_id: beauty_copy.address.id,
              coords: beauty_copy.address.coords
            });
          }

          _context26.next = 40;
          return (0, _effects.put)((0, _user.workplaceAddRequest)({
            navigation: navigation,
            payload: payload
          }));

        case 40:
          _context26.next = 44;
          break;

        case 42:
          _context26.next = 44;
          return (0, _effects.put)((0, _user.workplaceUpdateRequest)({
            navigation: navigation,
            payload: payload
          }));

        case 44:
          _context26.next = 48;
          break;

        case 46:
          _context26.next = 48;
          return (0, _effects.put)((0, _user.beautyRoomError)());

        case 48:
        case "end":
          return _context26.stop();
      }
    }
  }, _marked26);
}

function workplaceUpdateSaga(params) {
  var navigation, payload, token, response;
  return regeneratorRuntime.wrap(function workplaceUpdateSaga$(_context27) {
    while (1) {
      switch (_context27.prev = _context27.next) {
        case 0:
          navigation = params.navigation, payload = params.payload;
          _context27.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context27.sent;
          _context27.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_WORKPLACE_UPDATE, 'POST', payload, token);

        case 6:
          response = _context27.sent;

          if (!(response.data.status_code === 200)) {
            _context27.next = 18;
            break;
          }

          _context27.next = 10;
          return (0, _effects.put)((0, _user.getWorkplacesRequest)());

        case 10:
          _context27.next = 12;
          return (0, _effects.put)((0, _user.workplaceUpdateSuccess)());

        case 12:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context27.next = 15;
          return (0, _effects.put)((0, _user.setWorkplaceClear)());

        case 15:
          navigation.goBack();
          _context27.next = 28;
          break;

        case 18:
          if (!(response.status === 401)) {
            _context27.next = 25;
            break;
          }

          _context27.next = 21;
          return (0, _effects.put)((0, _user.workplaceUpdateFailure)({}));

        case 21:
          _context27.next = 23;
          return (0, _effects.put)((0, _user.authLogout)());

        case 23:
          _context27.next = 28;
          break;

        case 25:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text2: response.data.error,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context27.next = 28;
          return (0, _effects.put)((0, _user.workplaceUpdateFailure)({}));

        case 28:
        case "end":
          return _context27.stop();
      }
    }
  }, _marked27);
}

function priceSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function priceSaga$(_context28) {
    while (1) {
      switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context28.sent;
          _context28.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PRICE, 'GET', {}, token);

        case 5:
          response = _context28.sent;

          if (!(response.data.status_code === 200)) {
            _context28.next = 11;
            break;
          }

          _context28.next = 9;
          return (0, _effects.put)((0, _user.priceSuccess)({
            priceInfo: response.data
          }));

        case 9:
          _context28.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context28.next = 18;
            break;
          }

          _context28.next = 14;
          return (0, _effects.put)((0, _user.priceFailure)({}));

        case 14:
          _context28.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context28.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context28.next = 21;
          return (0, _effects.put)((0, _user.priceFailure)({}));

        case 21:
        case "end":
          return _context28.stop();
      }
    }
  }, _marked28);
}

function priceUpdateSaga() {
  var _ref4, priceDescription, priceSelect, payload, token, response;

  return regeneratorRuntime.wrap(function priceUpdateSaga$(_context29) {
    while (1) {
      switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return (0, _effects.select)(_selectors.getUserState);

        case 2:
          _ref4 = _context29.sent;
          priceDescription = _ref4.priceDescription;
          priceSelect = _ref4.priceSelect;
          payload = {
            description: priceDescription,
            price: priceSelect
          };
          _context29.next = 8;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 8:
          token = _context29.sent;
          _context29.next = 11;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PRICE_SAVE, 'POST', payload, token);

        case 11:
          response = _context29.sent;

          if (!(response.data.status_code === 200)) {
            _context29.next = 22;
            break;
          }

          _context29.next = 15;
          return (0, _effects.put)((0, _user.priceSaveSuccess)());

        case 15:
          _context29.next = 17;
          return (0, _effects.put)((0, _user.priceRequest)());

        case 17:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: _i18n["default"].t('updated_success'),
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context29.next = 20;
          return (0, _effects.put)((0, _user.priceClear)());

        case 20:
          _context29.next = 32;
          break;

        case 22:
          if (!(response.status === 401)) {
            _context29.next = 29;
            break;
          }

          _context29.next = 25;
          return (0, _effects.put)((0, _user.priceSaveFailure)({}));

        case 25:
          _context29.next = 27;
          return (0, _effects.put)((0, _user.authLogout)());

        case 27:
          _context29.next = 32;
          break;

        case 29:
          _reactNative.Alert.alert('', response.data.message);

          _context29.next = 32;
          return (0, _effects.put)((0, _user.priceSaveFailure)({}));

        case 32:
        case "end":
          return _context29.stop();
      }
    }
  }, _marked29);
}

function watchAuthSaga() {
  return regeneratorRuntime.wrap(function watchAuthSaga$(_context30) {
    while (1) {
      switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return (0, _effects.takeLatest)(_user.types.AUTH.REQUEST, authSaga);

        case 2:
        case "end":
          return _context30.stop();
      }
    }
  }, _marked30);
}

function watchRegisterInfoSaga() {
  return regeneratorRuntime.wrap(function watchRegisterInfoSaga$(_context31) {
    while (1) {
      switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return (0, _effects.takeLatest)(_user.types.REGISTER_INFO.REQUEST, registerInfoSaga);

        case 2:
        case "end":
          return _context31.stop();
      }
    }
  }, _marked31);
}

function watchUserInfoSaga() {
  return regeneratorRuntime.wrap(function watchUserInfoSaga$(_context32) {
    while (1) {
      switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return (0, _effects.takeLatest)(_user.types.INFO.REQUEST, userInfoSaga);

        case 2:
        case "end":
          return _context32.stop();
      }
    }
  }, _marked32);
}

function watchUserInfoFullSaga() {
  return regeneratorRuntime.wrap(function watchUserInfoFullSaga$(_context33) {
    while (1) {
      switch (_context33.prev = _context33.next) {
        case 0:
          _context33.next = 2;
          return (0, _effects.takeLatest)(_user.types.INFO_FULL.REQUEST, userInfoFullSaga);

        case 2:
        case "end":
          return _context33.stop();
      }
    }
  }, _marked33);
}

function watchUserInfoFullUpdateSaga() {
  return regeneratorRuntime.wrap(function watchUserInfoFullUpdateSaga$(_context34) {
    while (1) {
      switch (_context34.prev = _context34.next) {
        case 0:
          _context34.next = 2;
          return (0, _effects.takeLatest)(_user.types.INFO_FULL_UPDATE.REQUEST, userInfoFullUpdateSaga);

        case 2:
        case "end":
          return _context34.stop();
      }
    }
  }, _marked34);
}

function watchSendEmailSaga() {
  return regeneratorRuntime.wrap(function watchSendEmailSaga$(_context35) {
    while (1) {
      switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return (0, _effects.takeLatest)(_user.types.SEND_EMAIL.REQUEST, sendEmailSaga);

        case 2:
        case "end":
          return _context35.stop();
      }
    }
  }, _marked35);
}

function watchUploadPhotoSaga() {
  return regeneratorRuntime.wrap(function watchUploadPhotoSaga$(_context36) {
    while (1) {
      switch (_context36.prev = _context36.next) {
        case 0:
          _context36.next = 2;
          return (0, _effects.takeLatest)(_user.types.UPLOAD_PHOTO.REQUEST, uploadPhotoSaga);

        case 2:
        case "end":
          return _context36.stop();
      }
    }
  }, _marked36);
}

function watchDialogsSaga() {
  return regeneratorRuntime.wrap(function watchDialogsSaga$(_context37) {
    while (1) {
      switch (_context37.prev = _context37.next) {
        case 0:
          _context37.next = 2;
          return (0, _effects.takeLatest)(_user.types.DIALOGS.REQUEST, dialogsSaga);

        case 2:
        case "end":
          return _context37.stop();
      }
    }
  }, _marked37);
}

function watchDialogSaga() {
  return regeneratorRuntime.wrap(function watchDialogSaga$(_context38) {
    while (1) {
      switch (_context38.prev = _context38.next) {
        case 0:
          _context38.next = 2;
          return (0, _effects.takeLatest)(_user.types.DIALOG.REQUEST, dialogSaga);

        case 2:
        case "end":
          return _context38.stop();
      }
    }
  }, _marked38);
}

function watchMessageSendSaga() {
  return regeneratorRuntime.wrap(function watchMessageSendSaga$(_context39) {
    while (1) {
      switch (_context39.prev = _context39.next) {
        case 0:
          _context39.next = 2;
          return (0, _effects.takeLatest)(_user.types.MESSAGE_SEND.REQUEST, messageSendSaga);

        case 2:
        case "end":
          return _context39.stop();
      }
    }
  }, _marked39);
}

function watchSaveTokenSaga() {
  return regeneratorRuntime.wrap(function watchSaveTokenSaga$(_context40) {
    while (1) {
      switch (_context40.prev = _context40.next) {
        case 0:
          _context40.next = 2;
          return (0, _effects.takeLatest)(_user.types.SAVE_TOKEN.REQUEST, saveTokenSaga);

        case 2:
        case "end":
          return _context40.stop();
      }
    }
  }, _marked40);
}

function watchRegisterSaga() {
  return regeneratorRuntime.wrap(function watchRegisterSaga$(_context41) {
    while (1) {
      switch (_context41.prev = _context41.next) {
        case 0:
          _context41.next = 2;
          return (0, _effects.takeLatest)(_user.types.REGISTER.REQUEST, registerSaga);

        case 2:
        case "end":
          return _context41.stop();
      }
    }
  }, _marked41);
}

function watchCheckCodeSaga() {
  return regeneratorRuntime.wrap(function watchCheckCodeSaga$(_context42) {
    while (1) {
      switch (_context42.prev = _context42.next) {
        case 0:
          _context42.next = 2;
          return (0, _effects.takeLatest)(_user.types.CHECK_CODE.REQUEST, checkCodeSaga);

        case 2:
        case "end":
          return _context42.stop();
      }
    }
  }, _marked42);
}

function watchGetCodeSaga() {
  return regeneratorRuntime.wrap(function watchGetCodeSaga$(_context43) {
    while (1) {
      switch (_context43.prev = _context43.next) {
        case 0:
          _context43.next = 2;
          return (0, _effects.takeLatest)(_user.types.GET_CODE.REQUEST, getCodeSaga);

        case 2:
        case "end":
          return _context43.stop();
      }
    }
  }, _marked43);
}

function watchPasswordResetSaga() {
  return regeneratorRuntime.wrap(function watchPasswordResetSaga$(_context44) {
    while (1) {
      switch (_context44.prev = _context44.next) {
        case 0:
          _context44.next = 2;
          return (0, _effects.takeLatest)(_user.types.PASSWORD_RESET.REQUEST, passwordResetSaga);

        case 2:
        case "end":
          return _context44.stop();
      }
    }
  }, _marked44);
}

function watchDialogDeleteSaga() {
  return regeneratorRuntime.wrap(function watchDialogDeleteSaga$(_context45) {
    while (1) {
      switch (_context45.prev = _context45.next) {
        case 0:
          _context45.next = 2;
          return (0, _effects.takeLatest)(_user.types.DIALOG_DELETE.REQUEST, dialogDeleteSaga);

        case 2:
        case "end":
          return _context45.stop();
      }
    }
  }, _marked45);
}

function watchSpecsSaga() {
  return regeneratorRuntime.wrap(function watchSpecsSaga$(_context46) {
    while (1) {
      switch (_context46.prev = _context46.next) {
        case 0:
          _context46.next = 2;
          return (0, _effects.takeLatest)(_user.types.SPECS.REQUEST, specsSaga);

        case 2:
        case "end":
          return _context46.stop();
      }
    }
  }, _marked46);
}

function watchSpecsSetSaga() {
  return regeneratorRuntime.wrap(function watchSpecsSetSaga$(_context47) {
    while (1) {
      switch (_context47.prev = _context47.next) {
        case 0:
          _context47.next = 2;
          return (0, _effects.takeLatest)(_user.types.SPECS_SET.REQUEST, specsSetSaga);

        case 2:
        case "end":
          return _context47.stop();
      }
    }
  }, _marked47);
}

function watchProfileDescriptionsSaga() {
  return regeneratorRuntime.wrap(function watchProfileDescriptionsSaga$(_context48) {
    while (1) {
      switch (_context48.prev = _context48.next) {
        case 0:
          _context48.next = 2;
          return (0, _effects.takeLatest)(_user.types.PROFILE_DESCRIPTIONS.REQUEST, profileDescriptionsSaga);

        case 2:
        case "end":
          return _context48.stop();
      }
    }
  }, _marked48);
}

function watchProfileDescriptionUpdateSaga() {
  return regeneratorRuntime.wrap(function watchProfileDescriptionUpdateSaga$(_context49) {
    while (1) {
      switch (_context49.prev = _context49.next) {
        case 0:
          _context49.next = 2;
          return (0, _effects.takeLatest)(_user.types.PROFILE_DESCRIPTION_UPDATE.REQUEST, profileDescriptionUpdateSaga);

        case 2:
        case "end":
          return _context49.stop();
      }
    }
  }, _marked49);
}

function watchGetWorkspacesSaga() {
  return regeneratorRuntime.wrap(function watchGetWorkspacesSaga$(_context50) {
    while (1) {
      switch (_context50.prev = _context50.next) {
        case 0:
          _context50.next = 2;
          return (0, _effects.takeLatest)(_user.types.GET_WORKPLACES.REQUEST, getWorkspacesSaga);

        case 2:
        case "end":
          return _context50.stop();
      }
    }
  }, _marked50);
}

function watchBeautyRoomsSaga() {
  return regeneratorRuntime.wrap(function watchBeautyRoomsSaga$(_context51) {
    while (1) {
      switch (_context51.prev = _context51.next) {
        case 0:
          _context51.next = 2;
          return (0, _effects.takeLatest)(_user.types.BEAUTY_ROOMS.REQUEST, beautyRoomsSaga);

        case 2:
        case "end":
          return _context51.stop();
      }
    }
  }, _marked51);
}

function watchCityInfoSaga() {
  return regeneratorRuntime.wrap(function watchCityInfoSaga$(_context52) {
    while (1) {
      switch (_context52.prev = _context52.next) {
        case 0:
          _context52.next = 2;
          return (0, _effects.takeLatest)(_user.types.CITY_INFO.REQUEST, cityInfoSaga);

        case 2:
        case "end":
          return _context52.stop();
      }
    }
  }, _marked52);
}

function watchWorkspaceAddSaga() {
  return regeneratorRuntime.wrap(function watchWorkspaceAddSaga$(_context53) {
    while (1) {
      switch (_context53.prev = _context53.next) {
        case 0:
          _context53.next = 2;
          return (0, _effects.takeLatest)(_user.types.WORKPLACE_ADD.REQUEST, workspaceAddSaga);

        case 2:
        case "end":
          return _context53.stop();
      }
    }
  }, _marked53);
}

function watchWorkspaceDeleteSaga() {
  return regeneratorRuntime.wrap(function watchWorkspaceDeleteSaga$(_context54) {
    while (1) {
      switch (_context54.prev = _context54.next) {
        case 0:
          _context54.next = 2;
          return (0, _effects.takeLatest)(_user.types.WORKPLACE_DELETE.REQUEST, workspaceDeleteSaga);

        case 2:
        case "end":
          return _context54.stop();
      }
    }
  }, _marked54);
}

function watchBeautyRoomSendSaga() {
  return regeneratorRuntime.wrap(function watchBeautyRoomSendSaga$(_context55) {
    while (1) {
      switch (_context55.prev = _context55.next) {
        case 0:
          _context55.next = 2;
          return (0, _effects.takeLatest)(_user.types.BEAUTY_ROOM.SEND, beautyRoomSendSaga);

        case 2:
        case "end":
          return _context55.stop();
      }
    }
  }, _marked55);
}

function watchWorkplaceUpdateSaga() {
  return regeneratorRuntime.wrap(function watchWorkplaceUpdateSaga$(_context56) {
    while (1) {
      switch (_context56.prev = _context56.next) {
        case 0:
          _context56.next = 2;
          return (0, _effects.takeLatest)(_user.types.WORKPLACE_UPDATE.REQUEST, workplaceUpdateSaga);

        case 2:
        case "end":
          return _context56.stop();
      }
    }
  }, _marked56);
}

function watchPriceSaga() {
  return regeneratorRuntime.wrap(function watchPriceSaga$(_context57) {
    while (1) {
      switch (_context57.prev = _context57.next) {
        case 0:
          _context57.next = 2;
          return (0, _effects.takeLatest)(_user.types.PRICE.REQUEST, priceSaga);

        case 2:
        case "end":
          return _context57.stop();
      }
    }
  }, _marked57);
}

function watchPriceUpdateSaga() {
  return regeneratorRuntime.wrap(function watchPriceUpdateSaga$(_context58) {
    while (1) {
      switch (_context58.prev = _context58.next) {
        case 0:
          _context58.next = 2;
          return (0, _effects.takeLatest)(_user.types.PRICE_SAVE.REQUEST, priceUpdateSaga);

        case 2:
        case "end":
          return _context58.stop();
      }
    }
  }, _marked58);
}