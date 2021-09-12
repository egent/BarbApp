"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = services;

var _lodash = require("lodash");

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
  serviceId: null,
  serviceName: '',
  serviceCategorySelected: [],
  serviceCategorySelectedStr: '',
  serviceCategoryPhotos: [],
  duration: '',
  priceFrom: false,
  price: '',
  description: '',
  descriptionShort: '',
  // service end
  isServicesManage: false,
  selectedServices: [],
  serviceListKey: Math.random(),
  //
  promos: [],
  promosCats: [],
  // promos begin
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
  promoPhotos: [],
  // promos end
  isPromoManage: false,
  selectedPromos: []
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
        services: action.payload.data,
        serviceListKey: Math.random()
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

    case _services.types.SERVICES.MANAGE:
      var manage = action.payload;
      return _objectSpread({}, state, {
        isServicesManage: manage,
        selectedServices: manage ? state.selectedServices : []
      });

    case _services.types.SERVICES.SELECT:
      var id = action.payload;

      var selServices = _toConsumableArray(state.selectedServices);

      if ((0, _lodash.includes)(selServices, id)) {
        selServices = (0, _lodash.remove)(selServices, function (s) {
          return s !== id;
        });
      } else {
        selServices.push(id);
      }

      return _objectSpread({}, state, {
        selectedServices: selServices
      });

    case _services.types.SERVICES_UPDATE_STATUS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICES_UPDATE_STATUS.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        selectedServices: []
      });

    case _services.types.SERVICES_UPDATE_STATUS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICE_UPDATE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICE_UPDATE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICE_UPDATE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.SERVICE_DETAILS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.SERVICE_DETAILS.SUCCESS:
      var _action$payload$data = action.payload.data,
          procedure = _action$payload$data.procedure,
          procedureCats = _action$payload$data.procedureCats,
          gallery = _action$payload$data.gallery,
          categories = _action$payload$data.categories;
      var cats = [];
      var catsNames = [];
      procedureCats.map(function (c) {
        cats.push(c.id);
        catsNames.push(c.name);
      });
      return _objectSpread({}, state, {
        loading: false,
        serviceId: procedure.id,
        serviceName: procedure.name,
        serviceCategorySelected: categories,
        serviceCategorySelectedStr: catsNames.join(', '),
        serviceCategoryPhotos: gallery,
        duration: procedure.duration.toString(),
        priceFrom: procedure.price_from,
        price: procedure.price.toString(),
        description: procedure.description,
        descriptionShort: procedure.anons
      });

    case _services.types.SERVICE_DETAILS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMOS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.PROMOS.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        promos: action.payload
      });

    case _services.types.PROMOS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMOS_CATS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.PROMOS_CATS.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        promosCats: action.payload.categories
      });

    case _services.types.PROMOS_CATS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMOS_CATS.SELECT:
      var selectedPromos = [];
      action.data.map(function (item) {
        selectedPromos.push(item.name);
      });
      return _objectSpread({}, state, {
        promoCatsSelected: action.data,
        promoCategoriesStr: selectedPromos.join(', ')
      });

    case _services.types.PROMOS.PHOTO_ADD:
      var promoPhotos = _toConsumableArray(state.promoPhotos);

      promoPhotos.push(action.data);
      return _objectSpread({}, state, {
        promoPhotos: promoPhotos
      });

    case _services.types.PROMOS.PHOTO_DELETE:
      var pPhotos = [];
      state.promoPhotos.map(function (p) {
        p.uri !== action.data.uri && pPhotos.push(p);
      });
      return _objectSpread({}, state, {
        promoPhotos: pPhotos
      });

    case _services.types.PROMO_ADD.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.PROMO_ADD.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMO_ADD.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMO_UPDATE.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.PROMO_UPDATE.SUCCESS:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMO_UPDATE.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMO_DETAILS.REQUEST:
      return _objectSpread({}, state);

    case _services.types.PROMO_DETAILS.SUCCESS:
      var data = action.payload.data;
      var promo = data.promo;
      var promoCatsSelected = [];
      var promoCatName = [];
      data.categories.map(function (c) {
        promoCatsSelected.push(c.id);
        promoCatName.push(c.name);
      });
      return _objectSpread({}, state, {
        loading: false,
        promoId: promo.id,
        promoName: promo.name,
        promoDescription: promo.description,
        promoPrice: promo.price,
        promoPriceOld: promo.price_old,
        promoDiscount: promo.discount,
        promoDateFrom: promo.date_from,
        promoDateTo: promo.date_to,
        isPromoDate: !!promo.date_free,
        promoModeration: '',
        promoStatus: promo.status,
        promoCategoriesStr: promoCatName.join(', '),
        promoCatsSelected: promoCatsSelected,
        promoPhotos: data.gallery
      });

    case _services.types.PROMO_DETAILS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    case _services.types.PROMOS.SELECT:
      var promoId = action.payload;

      var selPromos = _toConsumableArray(state.selectedPromos);

      if ((0, _lodash.includes)(selPromos, promoId)) {
        selPromos = (0, _lodash.remove)(selPromos, function (s) {
          return s !== promoId;
        });
      } else {
        selPromos.push(promoId);
      }

      return _objectSpread({}, state, {
        selectedPromos: selPromos
      });

    case _services.types.PROMOS.MANAGE:
      var promosManage = action.payload;
      return _objectSpread({}, state, {
        isPromoManage: promosManage,
        selectedPromos: manage ? state.selectedPromos : []
      });

    case _services.types.PROMO_STATUS.REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _services.types.PROMO_STATUS.SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        selectedPromos: []
      });

    case _services.types.PROMO_STATUS.FAILURE:
      return _objectSpread({}, state, {
        loading: false
      });

    default:
      return state;
  }
}