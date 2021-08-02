"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.servicesFailure = exports.servicesSuccess = exports.servicesRequest = exports.types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE'
  }
};
exports.types = types;

var servicesRequest = function servicesRequest(data) {
  return _objectSpread({
    type: types.SERVICES.REQUEST
  }, data);
};

exports.servicesRequest = servicesRequest;

var servicesSuccess = function servicesSuccess(data) {
  return _objectSpread({
    type: types.SERVICES.SUCCESS
  }, data);
};

exports.servicesSuccess = servicesSuccess;

var servicesFailure = function servicesFailure(data) {
  return _objectSpread({
    type: types.SERVICES.FAILURE
  }, data);
};

exports.servicesFailure = servicesFailure;