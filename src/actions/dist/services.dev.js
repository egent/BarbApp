"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.serviceAddFailure = exports.serviceAddSuccess = exports.serviceAddRequest = exports.servicesCategoryPhotoRemove = exports.servicesCategoryPhotos = exports.servicesCategorySelect = exports.servicesStateUpdate = exports.servicesCategoryFailure = exports.servicesCategorySuccess = exports.servicesCategoryRequest = exports.servicesFailure = exports.servicesSuccess = exports.servicesRequest = exports.types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE'
  },
  SERVICES_CATEGORY: {
    REQUEST: 'SERVICES_CATEGORY.REQUEST',
    SUCCESS: 'SERVICES_CATEGORY.SUCCESS',
    FAILURE: 'SERVICES_CATEGORY.FAILURE',
    SELECT: 'SERVICES_CATEGORY.SELECT',
    PHOTOS: 'SERVICES_CATEGORY.PHOTOS',
    PHOTO_REMOVE: 'SERVICES_CATEGORY.PHOTO_REMOVE'
  },
  SERVICE_STATE: {
    UPDATE: 'SERVICE_STATE.UPDATE'
  },
  SERVICES_ADD: {
    REQUEST: 'SERVICES_ADD.REQUEST',
    SUCCESS: 'SERVICES_ADD.SUCCESS',
    FAILURE: 'SERVICES_ADD.FAILURE'
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

var servicesCategoryRequest = function servicesCategoryRequest(data) {
  return _objectSpread({
    type: types.SERVICES_CATEGORY.REQUEST
  }, data);
};

exports.servicesCategoryRequest = servicesCategoryRequest;

var servicesCategorySuccess = function servicesCategorySuccess(data) {
  return _objectSpread({
    type: types.SERVICES_CATEGORY.SUCCESS
  }, data);
};

exports.servicesCategorySuccess = servicesCategorySuccess;

var servicesCategoryFailure = function servicesCategoryFailure(data) {
  return _objectSpread({
    type: types.SERVICES_CATEGORY.FAILURE
  }, data);
};

exports.servicesCategoryFailure = servicesCategoryFailure;

var servicesStateUpdate = function servicesStateUpdate(data) {
  return _objectSpread({
    type: types.SERVICE_STATE.UPDATE
  }, data);
};

exports.servicesStateUpdate = servicesStateUpdate;

var servicesCategorySelect = function servicesCategorySelect(payload) {
  return {
    type: types.SERVICES_CATEGORY.SELECT,
    payload: payload
  };
};

exports.servicesCategorySelect = servicesCategorySelect;

var servicesCategoryPhotos = function servicesCategoryPhotos(payload) {
  return {
    type: types.SERVICES_CATEGORY.PHOTOS,
    payload: payload
  };
};

exports.servicesCategoryPhotos = servicesCategoryPhotos;

var servicesCategoryPhotoRemove = function servicesCategoryPhotoRemove(payload) {
  return {
    type: types.SERVICES_CATEGORY.PHOTO_REMOVE,
    payload: payload
  };
};

exports.servicesCategoryPhotoRemove = servicesCategoryPhotoRemove;

var serviceAddRequest = function serviceAddRequest(payload) {
  return {
    type: types.SERVICES_ADD.REQUEST,
    payload: payload
  };
};

exports.serviceAddRequest = serviceAddRequest;

var serviceAddSuccess = function serviceAddSuccess(data) {
  return _objectSpread({
    type: types.SERVICES_ADD.SUCCESS
  }, data);
};

exports.serviceAddSuccess = serviceAddSuccess;

var serviceAddFailure = function serviceAddFailure(data) {
  return _objectSpread({
    type: types.SERVICES_ADD.FAILURE
  }, data);
};

exports.serviceAddFailure = serviceAddFailure;