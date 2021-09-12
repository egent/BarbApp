"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.watchServices = watchServices;
exports.watchServicesCategory = watchServicesCategory;
exports.watchServiceAdd = watchServiceAdd;
exports.watchServiceUpdateStatus = watchServiceUpdateStatus;
exports.watchServiceUpdate = watchServiceUpdate;
exports.watchServiceDetails = watchServiceDetails;
exports.watchPromos = watchPromos;
exports.watchPromosCats = watchPromosCats;
exports.watchPromoAdd = watchPromoAdd;
exports.watchPromoUpdate = watchPromoUpdate;
exports.watchPromoDetails = watchPromoDetails;
exports.watchPromoStatusUpdate = watchPromoStatusUpdate;

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
regeneratorRuntime.mark(serviceAddSaga),
    _marked4 =
/*#__PURE__*/
regeneratorRuntime.mark(serviceUpdateSaga),
    _marked5 =
/*#__PURE__*/
regeneratorRuntime.mark(servicesUpdateStatusSaga),
    _marked6 =
/*#__PURE__*/
regeneratorRuntime.mark(serviceDetailsSaga),
    _marked7 =
/*#__PURE__*/
regeneratorRuntime.mark(promosSaga),
    _marked8 =
/*#__PURE__*/
regeneratorRuntime.mark(promosCatsSaga),
    _marked9 =
/*#__PURE__*/
regeneratorRuntime.mark(promoAddSaga),
    _marked10 =
/*#__PURE__*/
regeneratorRuntime.mark(promoUpdateSaga),
    _marked11 =
/*#__PURE__*/
regeneratorRuntime.mark(promoDetailsSaga),
    _marked12 =
/*#__PURE__*/
regeneratorRuntime.mark(promoUpdateStatusSaga),
    _marked13 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServices),
    _marked14 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServicesCategory),
    _marked15 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServiceAdd),
    _marked16 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServiceUpdateStatus),
    _marked17 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServiceUpdate),
    _marked18 =
/*#__PURE__*/
regeneratorRuntime.mark(watchServiceDetails),
    _marked19 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromos),
    _marked20 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromosCats),
    _marked21 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromoAdd),
    _marked22 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromoUpdate),
    _marked23 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromoDetails),
    _marked24 =
/*#__PURE__*/
regeneratorRuntime.mark(watchPromoStatusUpdate);

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

function serviceAddSaga(params) {
  var _params$payload, data, navigation, token, response;

  return regeneratorRuntime.wrap(function serviceAddSaga$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _params$payload = params.payload, data = _params$payload.data, navigation = _params$payload.navigation;
          _context3.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context3.sent;
          _context3.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SERVICE_ADD, 'post', data, token);

        case 6:
          response = _context3.sent;

          if (!(response.data.status_code === 200)) {
            _context3.next = 16;
            break;
          }

          _context3.next = 10;
          return (0, _effects.put)((0, _services.serviceAddSuccess)({
            payload: response.data
          }));

        case 10:
          _context3.next = 12;
          return (0, _effects.put)((0, _services.servicesRequest)());

        case 12:
          navigation.goBack();

          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context3.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context3.next = 23;
            break;
          }

          _context3.next = 19;
          return (0, _effects.put)((0, _services.serviceAddFailure)({}));

        case 19:
          _context3.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context3.next = 26;
          break;

        case 23:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context3.next = 26;
          return (0, _effects.put)((0, _services.serviceAddFailure)({}));

        case 26:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3);
}

function serviceUpdateSaga(params) {
  var _params$payload2, data, navigation, token, response;

  return regeneratorRuntime.wrap(function serviceUpdateSaga$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _params$payload2 = params.payload, data = _params$payload2.data, navigation = _params$payload2.navigation;
          _context4.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context4.sent;
          _context4.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SERVICE_UPDATE, 'post', data, token);

        case 6:
          response = _context4.sent;

          if (!(response.data.status_code === 200)) {
            _context4.next = 16;
            break;
          }

          _context4.next = 10;
          return (0, _effects.put)((0, _services.servicesRequest)());

        case 10:
          _context4.next = 12;
          return (0, _effects.put)((0, _services.serviceUpdateSuccess)({
            payload: response.data
          }));

        case 12:
          navigation.goBack();

          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context4.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context4.next = 23;
            break;
          }

          _context4.next = 19;
          return (0, _effects.put)((0, _services.serviceUpdateFailure)({}));

        case 19:
          _context4.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context4.next = 26;
          break;

        case 23:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context4.next = 26;
          return (0, _effects.put)((0, _services.serviceUpdateFailure)({}));

        case 26:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4);
}

function servicesUpdateStatusSaga(params) {
  var _params$payload3, services, operation, token, url, response;

  return regeneratorRuntime.wrap(function servicesUpdateStatusSaga$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _params$payload3 = params.payload, services = _params$payload3.services, operation = _params$payload3.operation;
          _context5.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context5.sent;
          url = operation === 'draft' ? _api2.ENDPOINT_SERVICE_DRAFT : _api2.ENDPOINT_SERVICE_DELETE;
          _context5.next = 7;
          return (0, _effects.call)(_api.api, url, 'POST', {
            ids: services
          }, token);

        case 7:
          response = _context5.sent;

          if (!(response.data.status_code === 200)) {
            _context5.next = 16;
            break;
          }

          _context5.next = 11;
          return (0, _effects.put)((0, _services.servicesRequest)());

        case 11:
          _context5.next = 13;
          return (0, _effects.put)((0, _services.serviceUpdateStatusSuccess)());

        case 13:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context5.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context5.next = 23;
            break;
          }

          _context5.next = 19;
          return (0, _effects.put)((0, _services.serviceUpdateStatusFailure)({}));

        case 19:
          _context5.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context5.next = 26;
          break;

        case 23:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.error,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context5.next = 26;
          return (0, _effects.put)((0, _services.serviceUpdateStatusFailure)({}));

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5);
}

function serviceDetailsSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function serviceDetailsSaga$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context6.sent;
          _context6.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_SERVICE_DETAILS, 'post', params.payload, token);

        case 5:
          response = _context6.sent;

          if (!(response.data.status_code === 200)) {
            _context6.next = 11;
            break;
          }

          _context6.next = 9;
          return (0, _effects.put)((0, _services.serviceDetailsSuccess)({
            payload: response.data
          }));

        case 9:
          _context6.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context6.next = 18;
            break;
          }

          _context6.next = 14;
          return (0, _effects.put)((0, _services.serviceDetailsFailure)({}));

        case 14:
          _context6.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context6.next = 21;
          break;

        case 18:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context6.next = 21;
          return (0, _effects.put)((0, _services.serviceDetailsFailure)({}));

        case 21:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6);
}

function promosSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function promosSaga$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context7.sent;
          _context7.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROMOS, 'GET', {}, token);

        case 5:
          response = _context7.sent;

          if (!(response.data.status_code === 200)) {
            _context7.next = 11;
            break;
          }

          _context7.next = 9;
          return (0, _effects.put)((0, _services.promosSuccess)({
            payload: response.data.data
          }));

        case 9:
          _context7.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context7.next = 18;
            break;
          }

          _context7.next = 14;
          return (0, _effects.put)((0, _services.promosFailure)({}));

        case 14:
          _context7.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context7.next = 21;
          break;

        case 18:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context7.next = 21;
          return (0, _effects.put)((0, _services.promosFailure)({}));

        case 21:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function promosCatsSaga() {
  var token, response;
  return regeneratorRuntime.wrap(function promosCatsSaga$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context8.sent;
          _context8.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROMOS_CATS, 'GET', {}, token);

        case 5:
          response = _context8.sent;

          if (!(response.data.status_code === 200)) {
            _context8.next = 11;
            break;
          }

          _context8.next = 9;
          return (0, _effects.put)((0, _services.promosCatsSuccess)({
            payload: response.data.data
          }));

        case 9:
          _context8.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context8.next = 18;
            break;
          }

          _context8.next = 14;
          return (0, _effects.put)((0, _services.promosCatsFailure)({}));

        case 14:
          _context8.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context8.next = 21;
          break;

        case 18:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context8.next = 21;
          return (0, _effects.put)((0, _services.promosCatsFailure)({}));

        case 21:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function promoAddSaga(params) {
  var _params$payload4, data, navigation, token, response;

  return regeneratorRuntime.wrap(function promoAddSaga$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _params$payload4 = params.payload, data = _params$payload4.data, navigation = _params$payload4.navigation;
          _context9.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context9.sent;
          _context9.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROMO_ADD, 'post', data, token);

        case 6:
          response = _context9.sent;

          if (!(response.data.status_code === 200)) {
            _context9.next = 18;
            break;
          }

          _context9.next = 10;
          return (0, _effects.put)((0, _services.promoAddSuccess)({
            payload: response.data
          }));

        case 10:
          _context9.next = 12;
          return (0, _effects.put)((0, _services.promosRequest)());

        case 12:
          navigation.goBack();
          _context9.next = 15;
          return (0, _effects.put)((0, _services.servicesStateUpdate)({
            payload: {
              promoId: null,
              promoName: '',
              promoDescription: '',
              promoPrice: '',
              promoPriceOld: '',
              promoDiscount: 0,
              isDiscount: false,
              promoDateFrom: '',
              promoDateTo: '',
              isPromoDate: false,
              promoModeration: '',
              promoStatus: '',
              promoCategoriesStr: '',
              promoCatsSelected: [],
              promoPhotos: []
            }
          }));

        case 15:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context9.next = 28;
          break;

        case 18:
          if (!(response.status === 401)) {
            _context9.next = 25;
            break;
          }

          _context9.next = 21;
          return (0, _effects.put)((0, _services.promoStoreFailure)({}));

        case 21:
          _context9.next = 23;
          return (0, _effects.put)((0, _user.authLogout)());

        case 23:
          _context9.next = 28;
          break;

        case 25:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context9.next = 28;
          return (0, _effects.put)((0, _services.promoStoreFailure)());

        case 28:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function promoUpdateSaga(params) {
  var _params$payload5, data, navigation, token, response;

  return regeneratorRuntime.wrap(function promoUpdateSaga$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _params$payload5 = params.payload, data = _params$payload5.data, navigation = _params$payload5.navigation;
          _context10.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context10.sent;
          _context10.next = 6;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROMO_UPDATE, 'post', data, token);

        case 6:
          response = _context10.sent;

          if (!(response.data.status_code === 200)) {
            _context10.next = 16;
            break;
          }

          _context10.next = 10;
          return (0, _effects.put)((0, _services.promosRequest)());

        case 10:
          _context10.next = 12;
          return (0, _effects.put)((0, _services.promoUpdateSuccess)({
            payload: response.data
          }));

        case 12:
          navigation.goBack();

          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context10.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context10.next = 23;
            break;
          }

          _context10.next = 19;
          return (0, _effects.put)((0, _services.promoUpdateFailure)());

        case 19:
          _context10.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context10.next = 26;
          break;

        case 23:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context10.next = 26;
          return (0, _effects.put)((0, _services.promoUpdateFailure)());

        case 26:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function promoDetailsSaga(params) {
  var token, response;
  return regeneratorRuntime.wrap(function promoDetailsSaga$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 2:
          token = _context11.sent;
          _context11.next = 5;
          return (0, _effects.call)(_api.api, _api2.ENDPOINT_PROMO_DETAILS, 'post', params.payload, token);

        case 5:
          response = _context11.sent;

          if (!(response.data.status_code === 200)) {
            _context11.next = 11;
            break;
          }

          _context11.next = 9;
          return (0, _effects.put)((0, _services.promoDetailsSuccess)({
            payload: response.data
          }));

        case 9:
          _context11.next = 21;
          break;

        case 11:
          if (!(response.status === 401)) {
            _context11.next = 18;
            break;
          }

          _context11.next = 14;
          return (0, _effects.put)((0, _services.promoDetailsFailure)({}));

        case 14:
          _context11.next = 16;
          return (0, _effects.put)((0, _user.authLogout)());

        case 16:
          _context11.next = 21;
          break;

        case 18:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.status_code === 500 ? _i18n["default"].t('error_500') : response.data.result,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context11.next = 21;
          return (0, _effects.put)((0, _services.promoDetailsFailure)({}));

        case 21:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function promoUpdateStatusSaga(params) {
  var _params$payload6, discounts, operation, token, url, response;

  return regeneratorRuntime.wrap(function promoUpdateStatusSaga$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _params$payload6 = params.payload, discounts = _params$payload6.discounts, operation = _params$payload6.operation;
          _context12.next = 3;
          return (0, _effects.select)(_selectors.getAccessToken);

        case 3:
          token = _context12.sent;
          url = operation === 'draft' ? _api2.ENDPOINT_PROMOS_DRAFT : _api2.ENDPOINT_PROMOS_DELETE;
          _context12.next = 7;
          return (0, _effects.call)(_api.api, url, 'POST', {
            ids: discounts
          }, token);

        case 7:
          response = _context12.sent;

          if (!(response.data.status_code === 200)) {
            _context12.next = 16;
            break;
          }

          _context12.next = 11;
          return (0, _effects.put)((0, _services.promosRequest)());

        case 11:
          _context12.next = 13;
          return (0, _effects.put)((0, _services.promoStatusUpdateSuccess)());

        case 13:
          _reactNativeToastMessage["default"].show({
            type: 'success',
            text2: response.data.data.message,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context12.next = 26;
          break;

        case 16:
          if (!(response.status === 401)) {
            _context12.next = 23;
            break;
          }

          _context12.next = 19;
          return (0, _effects.put)((0, _services.promoStatusUpdateFailure)({}));

        case 19:
          _context12.next = 21;
          return (0, _effects.put)((0, _user.authLogout)());

        case 21:
          _context12.next = 26;
          break;

        case 23:
          _reactNativeToastMessage["default"].show({
            type: 'error',
            text1: _i18n["default"].t('error'),
            text2: response.data.error,
            position: 'bottom',
            autoHide: true,
            visibilityTime: 2000
          });

          _context12.next = 26;
          return (0, _effects.put)((0, _services.promoStatusUpdateFailure)({}));

        case 26:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchServices() {
  return regeneratorRuntime.wrap(function watchServices$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES.REQUEST, servicesSaga);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchServicesCategory() {
  return regeneratorRuntime.wrap(function watchServicesCategory$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES_CATEGORY.REQUEST, servicesCategorySaga);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchServiceAdd() {
  return regeneratorRuntime.wrap(function watchServiceAdd$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES_ADD.REQUEST, serviceAddSaga);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchServiceUpdateStatus() {
  return regeneratorRuntime.wrap(function watchServiceUpdateStatus$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICES_UPDATE_STATUS.REQUEST, servicesUpdateStatusSaga);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function watchServiceUpdate() {
  return regeneratorRuntime.wrap(function watchServiceUpdate$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICE_UPDATE.REQUEST, serviceUpdateSaga);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

function watchServiceDetails() {
  return regeneratorRuntime.wrap(function watchServiceDetails$(_context18) {
    while (1) {
      switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _effects.takeLatest)(_services.types.SERVICE_DETAILS.REQUEST, serviceDetailsSaga);

        case 2:
        case "end":
          return _context18.stop();
      }
    }
  }, _marked18);
}

function watchPromos() {
  return regeneratorRuntime.wrap(function watchPromos$(_context19) {
    while (1) {
      switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMOS.REQUEST, promosSaga);

        case 2:
        case "end":
          return _context19.stop();
      }
    }
  }, _marked19);
}

function watchPromosCats() {
  return regeneratorRuntime.wrap(function watchPromosCats$(_context20) {
    while (1) {
      switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMOS_CATS.REQUEST, promosCatsSaga);

        case 2:
        case "end":
          return _context20.stop();
      }
    }
  }, _marked20);
}

function watchPromoAdd() {
  return regeneratorRuntime.wrap(function watchPromoAdd$(_context21) {
    while (1) {
      switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMO_ADD.REQUEST, promoAddSaga);

        case 2:
        case "end":
          return _context21.stop();
      }
    }
  }, _marked21);
}

function watchPromoUpdate() {
  return regeneratorRuntime.wrap(function watchPromoUpdate$(_context22) {
    while (1) {
      switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMO_UPDATE.REQUEST, promoUpdateSaga);

        case 2:
        case "end":
          return _context22.stop();
      }
    }
  }, _marked22);
}

function watchPromoDetails() {
  return regeneratorRuntime.wrap(function watchPromoDetails$(_context23) {
    while (1) {
      switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMO_DETAILS.REQUEST, promoDetailsSaga);

        case 2:
        case "end":
          return _context23.stop();
      }
    }
  }, _marked23);
}

function watchPromoStatusUpdate() {
  return regeneratorRuntime.wrap(function watchPromoStatusUpdate$(_context24) {
    while (1) {
      switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return (0, _effects.takeLatest)(_services.types.PROMO_STATUS.REQUEST, promoUpdateStatusSaga);

        case 2:
        case "end":
          return _context24.stop();
      }
    }
  }, _marked24);
}