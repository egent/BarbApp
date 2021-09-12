"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promoStatusUpdateFailure = exports.promoStatusUpdateSuccess = exports.promoStatusUpdateRequest = exports.promosSelect = exports.promosManage = exports.promoDetailsFailure = exports.promoDetailsSuccess = exports.promoDetailsRequest = exports.promoUpdateFailure = exports.promoUpdateSuccess = exports.promoUpdateRequest = exports.promoStoreFailure = exports.promoAddSuccess = exports.promoAddRequest = exports.deletePromoPhoto = exports.addPromoPhoto = exports.promosCatsSelect = exports.promosCatsFailure = exports.promosCatsSuccess = exports.promosCatsRequest = exports.promosFailure = exports.promosSuccess = exports.promosRequest = exports.serviceDetailsFailure = exports.serviceDetailsSuccess = exports.serviceDetailsRequest = exports.serviceUpdateStatusFailure = exports.serviceUpdateStatusSuccess = exports.serviceUpdateStatusRequest = exports.servicesSelect = exports.servicesManage = exports.serviceUpdateFailure = exports.serviceUpdateSuccess = exports.serviceUpdateRequest = exports.serviceAddFailure = exports.serviceAddSuccess = exports.serviceAddRequest = exports.servicesCategoryPhotoRemove = exports.servicesCategoryPhotos = exports.servicesCategorySelect = exports.servicesStateUpdate = exports.servicesCategoryFailure = exports.servicesCategorySuccess = exports.servicesCategoryRequest = exports.servicesFailure = exports.servicesSuccess = exports.servicesRequest = exports.types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
  SERVICES: {
    REQUEST: 'SERVICES.REQUEST',
    SUCCESS: 'SERVICES.SUCCESS',
    FAILURE: 'SERVICES.FAILURE',
    MANAGE: 'SERVICES.MANAGE',
    SELECT: 'SERVICES.SELECT'
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
  },
  SERVICE_DETAILS: {
    REQUEST: 'SERVICE_DETAILS.REQUEST',
    SUCCESS: 'SERVICE_DETAILS.SUCCESS',
    FAILURE: 'SERVICE_DETAILS.FAILURE'
  },
  SERVICE_UPDATE: {
    REQUEST: 'SERVICE_UPDATE.REQUEST',
    SUCCESS: 'SERVICE_UPDATE.SUCCESS',
    FAILURE: 'SERVICE_UPDATE.FAILURE'
  },
  SERVICES_UPDATE_STATUS: {
    REQUEST: 'SERVICES_UPDATE_STATUS.REQUEST',
    SUCCESS: 'SERVICES_UPDATE_STATUS.SUCCESS',
    FAILURE: 'SERVICES_UPDATE_STATUS.FAILURE'
  },
  PROMOS: {
    REQUEST: 'PROMOS.REQUEST',
    SUCCESS: 'PROMOS.SUCCESS',
    FAILURE: 'PROMOS.FAILURE',
    PHOTO_ADD: 'PROMOS.PHOTO_ADD',
    PHOTO_DELETE: 'PROMOS.PHOTO_DELETE',
    MANAGE: 'PROMOS.MANAGE',
    SELECT: 'PROMOS.SELECT'
  },
  PROMOS_CATS: {
    REQUEST: 'PROMOS_CATS.REQUEST',
    SUCCESS: 'PROMOS_CATS.SUCCESS',
    FAILURE: 'PROMOS_CATS.FAILURE',
    SELECT: 'PROMOS_CATS.SELECT'
  },
  PROMO_ADD: {
    REQUEST: 'PROMO_ADD.REQUEST',
    SUCCESS: 'PROMO_ADD.SUCCESS',
    FAILURE: 'PROMO_ADD.FAILURE'
  },
  PROMO_UPDATE: {
    REQUEST: 'PROMO_UPDATE.REQUEST',
    SUCCESS: 'PROMO_UPDATE.SUCCESS',
    FAILURE: 'PROMO_UPDATE.FAILURE'
  },
  PROMO_DETAILS: {
    REQUEST: 'PROMO_DETAILS.REQUEST',
    SUCCESS: 'PROMO_DETAILS.SUCCESS',
    FAILURE: 'PROMO_DETAILS.FAILURE'
  },
  PROMO_STATUS: {
    REQUEST: 'PROMO_STATUS.REQUEST',
    SUCCESS: 'PROMO_STATUS.SUCCESS',
    FAILURE: 'PROMO_STATUS.FAILURE'
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

var serviceUpdateRequest = function serviceUpdateRequest(payload) {
  return {
    type: types.SERVICE_UPDATE.REQUEST,
    payload: payload
  };
};

exports.serviceUpdateRequest = serviceUpdateRequest;

var serviceUpdateSuccess = function serviceUpdateSuccess(data) {
  return _objectSpread({
    type: types.SERVICE_UPDATE.SUCCESS
  }, data);
};

exports.serviceUpdateSuccess = serviceUpdateSuccess;

var serviceUpdateFailure = function serviceUpdateFailure(data) {
  return _objectSpread({
    type: types.SERVICE_UPDATE.FAILURE
  }, data);
};

exports.serviceUpdateFailure = serviceUpdateFailure;

var servicesManage = function servicesManage(payload) {
  return {
    type: types.SERVICES.MANAGE,
    payload: payload
  };
};

exports.servicesManage = servicesManage;

var servicesSelect = function servicesSelect(payload) {
  return {
    type: types.SERVICES.SELECT,
    payload: payload
  };
};

exports.servicesSelect = servicesSelect;

var serviceUpdateStatusRequest = function serviceUpdateStatusRequest(payload) {
  return {
    type: types.SERVICES_UPDATE_STATUS.REQUEST,
    payload: payload
  };
};

exports.serviceUpdateStatusRequest = serviceUpdateStatusRequest;

var serviceUpdateStatusSuccess = function serviceUpdateStatusSuccess(data) {
  return _objectSpread({
    type: types.SERVICES_UPDATE_STATUS.SUCCESS
  }, data);
};

exports.serviceUpdateStatusSuccess = serviceUpdateStatusSuccess;

var serviceUpdateStatusFailure = function serviceUpdateStatusFailure(data) {
  return _objectSpread({
    type: types.SERVICES_UPDATE_STATUS.FAILURE
  }, data);
};

exports.serviceUpdateStatusFailure = serviceUpdateStatusFailure;

var serviceDetailsRequest = function serviceDetailsRequest(payload) {
  return {
    type: types.SERVICE_DETAILS.REQUEST,
    payload: payload
  };
};

exports.serviceDetailsRequest = serviceDetailsRequest;

var serviceDetailsSuccess = function serviceDetailsSuccess(data) {
  return _objectSpread({
    type: types.SERVICE_DETAILS.SUCCESS
  }, data);
};

exports.serviceDetailsSuccess = serviceDetailsSuccess;

var serviceDetailsFailure = function serviceDetailsFailure(data) {
  return _objectSpread({
    type: types.SERVICE_DETAILS.FAILURE
  }, data);
};

exports.serviceDetailsFailure = serviceDetailsFailure;

var promosRequest = function promosRequest(payload) {
  return {
    type: types.PROMOS.REQUEST,
    payload: payload
  };
};

exports.promosRequest = promosRequest;

var promosSuccess = function promosSuccess(data) {
  return _objectSpread({
    type: types.PROMOS.SUCCESS
  }, data);
};

exports.promosSuccess = promosSuccess;

var promosFailure = function promosFailure(data) {
  return _objectSpread({
    type: types.PROMOS.FAILURE
  }, data);
};

exports.promosFailure = promosFailure;

var promosCatsRequest = function promosCatsRequest(payload) {
  return {
    type: types.PROMOS_CATS.REQUEST,
    payload: payload
  };
};

exports.promosCatsRequest = promosCatsRequest;

var promosCatsSuccess = function promosCatsSuccess(data) {
  return _objectSpread({
    type: types.PROMOS_CATS.SUCCESS
  }, data);
};

exports.promosCatsSuccess = promosCatsSuccess;

var promosCatsFailure = function promosCatsFailure(data) {
  return _objectSpread({
    type: types.PROMOS_CATS.FAILURE
  }, data);
};

exports.promosCatsFailure = promosCatsFailure;

var promosCatsSelect = function promosCatsSelect(data) {
  return {
    type: types.PROMOS_CATS.SELECT,
    data: data
  };
};

exports.promosCatsSelect = promosCatsSelect;

var addPromoPhoto = function addPromoPhoto(data) {
  return {
    type: types.PROMOS.PHOTO_ADD,
    data: data
  };
};

exports.addPromoPhoto = addPromoPhoto;

var deletePromoPhoto = function deletePromoPhoto(data) {
  return {
    type: types.PROMOS.PHOTO_DELETE,
    data: data
  };
};

exports.deletePromoPhoto = deletePromoPhoto;

var promoAddRequest = function promoAddRequest(payload) {
  return {
    type: types.PROMO_ADD.REQUEST,
    payload: payload
  };
};

exports.promoAddRequest = promoAddRequest;

var promoAddSuccess = function promoAddSuccess(data) {
  return _objectSpread({
    type: types.PROMO_ADD.SUCCESS
  }, data);
};

exports.promoAddSuccess = promoAddSuccess;

var promoStoreFailure = function promoStoreFailure(data) {
  return _objectSpread({
    type: types.PROMO_ADD.FAILURE
  }, data);
};

exports.promoStoreFailure = promoStoreFailure;

var promoUpdateRequest = function promoUpdateRequest(payload) {
  return {
    type: types.PROMO_UPDATE.REQUEST,
    payload: payload
  };
};

exports.promoUpdateRequest = promoUpdateRequest;

var promoUpdateSuccess = function promoUpdateSuccess(data) {
  return _objectSpread({
    type: types.PROMO_UPDATE.SUCCESS
  }, data);
};

exports.promoUpdateSuccess = promoUpdateSuccess;

var promoUpdateFailure = function promoUpdateFailure(data) {
  return _objectSpread({
    type: types.PROMO_UPDATE.FAILURE
  }, data);
};

exports.promoUpdateFailure = promoUpdateFailure;

var promoDetailsRequest = function promoDetailsRequest(payload) {
  return {
    type: types.PROMO_DETAILS.REQUEST,
    payload: payload
  };
};

exports.promoDetailsRequest = promoDetailsRequest;

var promoDetailsSuccess = function promoDetailsSuccess(data) {
  return _objectSpread({
    type: types.PROMO_DETAILS.SUCCESS
  }, data);
};

exports.promoDetailsSuccess = promoDetailsSuccess;

var promoDetailsFailure = function promoDetailsFailure(data) {
  return _objectSpread({
    type: types.PROMO_DETAILS.FAILURE
  }, data);
};

exports.promoDetailsFailure = promoDetailsFailure;

var promosManage = function promosManage(payload) {
  return {
    type: types.PROMOS.MANAGE,
    payload: payload
  };
};

exports.promosManage = promosManage;

var promosSelect = function promosSelect(payload) {
  return {
    type: types.PROMOS.SELECT,
    payload: payload
  };
};

exports.promosSelect = promosSelect;

var promoStatusUpdateRequest = function promoStatusUpdateRequest(payload) {
  return {
    type: types.PROMO_STATUS.REQUEST,
    payload: payload
  };
};

exports.promoStatusUpdateRequest = promoStatusUpdateRequest;

var promoStatusUpdateSuccess = function promoStatusUpdateSuccess(data) {
  return _objectSpread({
    type: types.PROMO_STATUS.SUCCESS
  }, data);
};

exports.promoStatusUpdateSuccess = promoStatusUpdateSuccess;

var promoStatusUpdateFailure = function promoStatusUpdateFailure(data) {
  return _objectSpread({
    type: types.PROMO_STATUS.FAILURE
  }, data);
};

exports.promoStatusUpdateFailure = promoStatusUpdateFailure;