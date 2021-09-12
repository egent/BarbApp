"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ENDPOINT_PROMOS_DELETE = exports.ENDPOINT_PROMOS_DRAFT = exports.ENDPOINT_PROMO_DETAILS = exports.ENDPOINT_PROMO_UPDATE = exports.ENDPOINT_PROMO_ADD = exports.ENDPOINT_PROMOS_CATS = exports.ENDPOINT_PROMOS = exports.ENDPOINT_SERVICE_DETAILS = exports.ENDPOINT_SERVICE_UPDATE = exports.ENDPOINT_SERVICE_DELETE = exports.ENDPOINT_SERVICE_DRAFT = exports.ENDPOINT_SERVICES_CATEGORY = exports.ENDPOINT_SERVICES = exports.ENDPOINT_GET_CITY_INFO = exports.ENDPOINT_GET_BEAUTY_ROOMS = exports.ENDPOINT_SAVE_PUSH_TOKEN = exports.ENDPOINT_DIALOG = exports.ENDPOINT_DIALOGS = exports.ENDPOINT_UPLOAD_PHOTO = exports.ENDPOINT_SEND_EMAIL = exports.ENDPOINT_USER_INFO_FULL = exports.ENDPOINT_USER_INFO = exports.ENDPOINT_SERVICE_ADD = exports.ENDPOINT_PRICE_SAVE = exports.ENDPOINT_PRICE = exports.ENDPOINT_POINT_SEARCH_NAME = exports.ENDPOINT_WORKPLACE_UPDATE = exports.ENDPOINT_WORKPLACE_DELETE = exports.ENDPOINT_WORKPLACE_ADD = exports.ENDPOINT_WORKPLACE_STORE = exports.ENDPOINT_GET_WORKPLACES = exports.ENDPOINT_PROFILE_DESCRIPTIONS = exports.ENDPOINT_SPECS = exports.ENDPOINT_DELETE_DIALOGS = exports.ENDPOINT_PASSWORD_RESET = exports.ENDPOINT_AUTH = exports.ENDPOINT_CHECK_CODE = exports.ENDPOINT_GET_CODE = exports.ENDPOINT_REGISTER = exports.BACKEND_URL = exports.ONESIGNAL_APP_ID = void 0;
var ONESIGNAL_APP_ID = '69e49fe0-635c-42f2-acda-2ff356bed6e5';
exports.ONESIGNAL_APP_ID = ONESIGNAL_APP_ID;
var PREFIX = '/app';
var BACKEND_URL = 'https://barb.ua';
exports.BACKEND_URL = BACKEND_URL;
var BACKEND_URL_PREFIX = BACKEND_URL + PREFIX;
var ENDPOINT_AUTH = BACKEND_URL + '/oauth/token';
exports.ENDPOINT_AUTH = ENDPOINT_AUTH;
var ENDPOINT_REGISTER = BACKEND_URL_PREFIX + '/register';
exports.ENDPOINT_REGISTER = ENDPOINT_REGISTER;
var ENDPOINT_GET_CODE = BACKEND_URL_PREFIX + '/send-code';
exports.ENDPOINT_GET_CODE = ENDPOINT_GET_CODE;
var ENDPOINT_CHECK_CODE = BACKEND_URL_PREFIX + '/check-code';
exports.ENDPOINT_CHECK_CODE = ENDPOINT_CHECK_CODE;
var ENDPOINT_PASSWORD_RESET = BACKEND_URL_PREFIX + '/reset-password';
exports.ENDPOINT_PASSWORD_RESET = ENDPOINT_PASSWORD_RESET;
var ENDPOINT_USER_INFO = BACKEND_URL_PREFIX + '/profile';
exports.ENDPOINT_USER_INFO = ENDPOINT_USER_INFO;
var ENDPOINT_USER_INFO_FULL = BACKEND_URL_PREFIX + '/profile';
exports.ENDPOINT_USER_INFO_FULL = ENDPOINT_USER_INFO_FULL;
var ENDPOINT_DELETE_DIALOGS = BACKEND_URL + '/api-dialog/delete';
exports.ENDPOINT_DELETE_DIALOGS = ENDPOINT_DELETE_DIALOGS;
var ENDPOINT_SPECS = BACKEND_URL_PREFIX + '/profile/specs';
exports.ENDPOINT_SPECS = ENDPOINT_SPECS;
var ENDPOINT_PROFILE_DESCRIPTIONS = BACKEND_URL_PREFIX + '/profile/descriptions';
exports.ENDPOINT_PROFILE_DESCRIPTIONS = ENDPOINT_PROFILE_DESCRIPTIONS;
var ENDPOINT_GET_WORKPLACES = BACKEND_URL_PREFIX + '/workplaces';
exports.ENDPOINT_GET_WORKPLACES = ENDPOINT_GET_WORKPLACES;
var ENDPOINT_GET_BEAUTY_ROOMS = BACKEND_URL_PREFIX + '/workplaces/new/get-salons';
exports.ENDPOINT_GET_BEAUTY_ROOMS = ENDPOINT_GET_BEAUTY_ROOMS;
var ENDPOINT_POINT_SEARCH_NAME = BACKEND_URL_PREFIX + '/workplaces/get-salons-addresses';
exports.ENDPOINT_POINT_SEARCH_NAME = ENDPOINT_POINT_SEARCH_NAME;
var ENDPOINT_GET_CITY_INFO = BACKEND_URL_PREFIX + '/workplaces/new/get-city-info';
exports.ENDPOINT_GET_CITY_INFO = ENDPOINT_GET_CITY_INFO;
var ENDPOINT_WORKPLACE_ADD = BACKEND_URL_PREFIX + '/workplaces/new/store-address';
exports.ENDPOINT_WORKPLACE_ADD = ENDPOINT_WORKPLACE_ADD;
var ENDPOINT_WORKPLACE_UPDATE = BACKEND_URL_PREFIX + '/workplaces/new/save-address';
exports.ENDPOINT_WORKPLACE_UPDATE = ENDPOINT_WORKPLACE_UPDATE;
var ENDPOINT_WORKPLACE_STORE = BACKEND_URL_PREFIX + '/workplaces/new/store-address';
exports.ENDPOINT_WORKPLACE_STORE = ENDPOINT_WORKPLACE_STORE;
var ENDPOINT_WORKPLACE_DELETE = BACKEND_URL_PREFIX + '/workplaces/delete-address';
exports.ENDPOINT_WORKPLACE_DELETE = ENDPOINT_WORKPLACE_DELETE;
var ENDPOINT_PRICE = BACKEND_URL_PREFIX + '/price';
exports.ENDPOINT_PRICE = ENDPOINT_PRICE;
var ENDPOINT_PRICE_SAVE = BACKEND_URL_PREFIX + '/price-update';
exports.ENDPOINT_PRICE_SAVE = ENDPOINT_PRICE_SAVE;
var ENDPOINT_SEND_EMAIL = BACKEND_URL + '/api-send-email-code';
exports.ENDPOINT_SEND_EMAIL = ENDPOINT_SEND_EMAIL;
var ENDPOINT_UPLOAD_PHOTO = BACKEND_URL + '/api-settings/update-photo';
exports.ENDPOINT_UPLOAD_PHOTO = ENDPOINT_UPLOAD_PHOTO;
var ENDPOINT_DIALOGS = BACKEND_URL + '/api-dialogs';
exports.ENDPOINT_DIALOGS = ENDPOINT_DIALOGS;
var ENDPOINT_DIALOG = BACKEND_URL + '/api-dialog/';
exports.ENDPOINT_DIALOG = ENDPOINT_DIALOG;
var ENDPOINT_SAVE_PUSH_TOKEN = '/api-save-push-token';
exports.ENDPOINT_SAVE_PUSH_TOKEN = ENDPOINT_SAVE_PUSH_TOKEN;
var ENDPOINT_SERVICES = BACKEND_URL_PREFIX + '/procedures';
exports.ENDPOINT_SERVICES = ENDPOINT_SERVICES;
var ENDPOINT_SERVICES_CATEGORY = BACKEND_URL_PREFIX + '/procedures/cats';
exports.ENDPOINT_SERVICES_CATEGORY = ENDPOINT_SERVICES_CATEGORY;
var ENDPOINT_SERVICE_ADD = BACKEND_URL_PREFIX + '/procedures/store';
exports.ENDPOINT_SERVICE_ADD = ENDPOINT_SERVICE_ADD;
var ENDPOINT_SERVICE_UPDATE = BACKEND_URL_PREFIX + '/procedures/update';
exports.ENDPOINT_SERVICE_UPDATE = ENDPOINT_SERVICE_UPDATE;
var ENDPOINT_SERVICE_DETAILS = BACKEND_URL_PREFIX + '/procedures/edit';
exports.ENDPOINT_SERVICE_DETAILS = ENDPOINT_SERVICE_DETAILS;
var ENDPOINT_SERVICE_DRAFT = BACKEND_URL_PREFIX + '/procedures/draft';
exports.ENDPOINT_SERVICE_DRAFT = ENDPOINT_SERVICE_DRAFT;
var ENDPOINT_SERVICE_DELETE = BACKEND_URL_PREFIX + '/procedures/delete';
exports.ENDPOINT_SERVICE_DELETE = ENDPOINT_SERVICE_DELETE;
var ENDPOINT_PROMOS = BACKEND_URL_PREFIX + '/promos';
exports.ENDPOINT_PROMOS = ENDPOINT_PROMOS;
var ENDPOINT_PROMOS_CATS = BACKEND_URL_PREFIX + '/promos/cats';
exports.ENDPOINT_PROMOS_CATS = ENDPOINT_PROMOS_CATS;
var ENDPOINT_PROMO_ADD = BACKEND_URL_PREFIX + '/promos/store';
exports.ENDPOINT_PROMO_ADD = ENDPOINT_PROMO_ADD;
var ENDPOINT_PROMO_UPDATE = BACKEND_URL_PREFIX + '/promos/update';
exports.ENDPOINT_PROMO_UPDATE = ENDPOINT_PROMO_UPDATE;
var ENDPOINT_PROMO_DETAILS = BACKEND_URL_PREFIX + '/promos/edit';
exports.ENDPOINT_PROMO_DETAILS = ENDPOINT_PROMO_DETAILS;
var ENDPOINT_PROMOS_DRAFT = BACKEND_URL_PREFIX + '/promos/draft';
exports.ENDPOINT_PROMOS_DRAFT = ENDPOINT_PROMOS_DRAFT;
var ENDPOINT_PROMOS_DELETE = BACKEND_URL_PREFIX + '/promos/delete';
exports.ENDPOINT_PROMOS_DELETE = ENDPOINT_PROMOS_DELETE;