"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = services;

var _services = require("../actions/services");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  loading: false,
  services: [],
  servicesCategory: [],
  // service begin
  serviceName: '',
  serviceCategorySelected: [],
  serviceCategorySelectedStr: '',
  serviceCategoryPhotos: [],
  duration: '',
  priceFrom: false,
  price: '',
  description: '',
  descriptionShort: '' // service end

};

function services() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _services.types.SERVICES.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICES.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        services: action.payload.data
      });

    case _services.types.SERVICES.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICES_CATEGORY.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICES_CATEGORY.SUCCESS:
      var servicesCategory = Object.values(action.payload.data.categories);
      servicesCategory.map(function (item) {
        item.checked = false;
      });
      return _objectSpread({}, state, {
        loading: false,
        servicesCategory: servicesCategory
      });

    case _services.types.SERVICES_CATEGORY.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICE_STATE.UPDATE:
      return _objectSpread({}, state, {}, action.payload);

    case _services.types.SERVICES_CATEGORY.SELECT:
      var selected = [];
      action.payload.map(function (item) {
        selected.push(item.name);
      });
      return _objectSpread({}, state, {
        serviceCategorySelected: action.payload,
        serviceCategorySelectedStr: selected.join(', ')
      });

    case _services.types.SERVICES_CATEGORY.PHOTOS:
      var serviceCategoryPhotos = _toConsumableArray(state.serviceCategoryPhotos);

      serviceCategoryPhotos.push(action.payload);
      return _objectSpread({}, state, {
        serviceCategoryPhotos: serviceCategoryPhotos
      });

    case _services.types.SERVICES_CATEGORY.PHOTO_REMOVE:
      var photos = [];
      state.serviceCategoryPhotos.map(function (p) {
        p.uri !== action.payload.uri && photos.push(p);
      });
      return _objectSpread({}, state, {
        serviceCategoryPhotos: photos
      });

    case _services.types.SERVICES_ADD.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICES_ADD.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICES_ADD.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
}