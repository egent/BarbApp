"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchServices = watchServices;
exports.watchServicesCategory = watchServicesCategory;

var _reactNative = require("react-native");

var _effects = require("redux-saga/effects");

var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));

var _i18n = _interopRequireDefault(require("../services/i18n"));

var _user = require("../actions/user");

var _services = require("@actions/services");

var _api = require("@services/api");

var _api2 = require("@constants/api");

var _selectors = require("./selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(servicesSaga),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(servicesCategorySaga),
    _marked3 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServices),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServicesCategory);

function servicesSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function servicesSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context.sent;
          _context.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SERVICES, 'GET', {}, token);

        case 5:
          response = _context.sent;

          if (!(response.data.status_code === 200)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return (0, _effects.put)((0, _services.servicesSuccess)({
            payload: response.data
          }));

        case 9:
          _context.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context.next = 18;
            break;
          }

          _context.next = 14;
          return (0, _effects.put)((0, _services.servicesFailure)({}));

        case 14:
          _context.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context.next = 21;
          return (0, _effects.put)((0, _services.servicesFailure)({}));

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function servicesCategorySaga() {
  var token, response;
  return regeneratorRuntime.wrap(function servicesCategorySaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context2.sent;
          _context2.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SERVICES_CATEGORY, 'GET', {}, token);

        case 5:
          response = _context2.sent;

          if (!(response.data.status_code === 200)) {
            _context2.next = 11;
            break;
          }

          _context2.next = 9;
          return (0, _effects.put)((0, _services.servicesCategorySuccess)({
            payload: response.data
          }));

        case 9:
          _context2.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context2.next = 18;
            break;
          }

          _context2.next = 14;
          return (0, _effects.put)((0, _services.servicesCategoryFailure)({}));

        case 14:
          _context2.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context2.next = 21;
          break;

        case 18:
          _reactNative.Alert.alert('', response.data.message);

          _context2.next = 21;
          return (0, _effects.put)((0, _services.servicesCategoryFailure)({}));

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2);
}

function watchServices() {
  return regeneratorRuntime.wrap(function watchServices$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES.REQUEST, servicesSaga);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function watchServicesCategory() {
  return regeneratorRuntime.wrap(function watchServicesCategory$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES_CATEGORY.REQUEST, servicesCategorySaga);

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}