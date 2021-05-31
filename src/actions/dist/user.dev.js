"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workplaceDeleteFailure = exports.workplaceDeleteSuccess = exports.workplaceDeleteRequest = exports.breaksDelete = exports.workplaceAddFailure = exports.workplaceAddSuccess = exports.workplaceAddRequest = exports.cityInfoFailure = exports.cityInfoSuccess = exports.cityInfoRequest = exports.beautyRoomsFailure = exports.beautyRoomsSuccess = exports.beautyRoomsRequest = exports.setForm = exports.getWorkplacesFailure = exports.getWorkplacesSuccess = exports.getWorkplacesRequest = exports.profileDescriptionUpdateFailure = exports.profileDescriptionUpdateSuccess = exports.profileDescriptionUpdateRequest = exports.profileDescriptionsFailure = exports.profileDescriptionsSuccess = exports.profileDescriptionsRequest = exports.specsSetFailure = exports.specsSetSuccess = exports.specsSetRequest = exports.specsFailure = exports.specsSuccess = exports.specsRequest = exports.dialogDeleteFailure = exports.dialogDeleteSuccess = exports.dialogDeleteRequest = exports.onBoardingOff = exports.passwordResetFailure = exports.passwordResetSuccess = exports.passwordResetRequest = exports.getCodeFailure = exports.getCodeSuccess = exports.getCodeRequest = exports.checkCodeFailure = exports.checkCodeSuccess = exports.checkCodeRequest = exports.getRegisterInfoFailure = exports.getRegisterInfoSuccess = exports.getRegisterInfoRequest = exports.saveTokenFailure = exports.saveTokenSuccess = exports.saveTokenRequest = exports.messageSendFailure = exports.messageSendSuccess = exports.messageSendRequest = exports.dialogFailure = exports.dialogSuccess = exports.dialogRequest = exports.dialogsFailure = exports.dialogsSuccess = exports.dialogsRequest = exports.uploadPhotoFailure = exports.uploadPhotoSuccess = exports.uploadPhotoRequest = exports.sendEmailFailure = exports.sendEmailSuccess = exports.sendEmailRequest = exports.userInfoFullUpdateFailure = exports.userInfoFullUpdateSuccess = exports.userInfoFullUpdateRequest = exports.userInfoFullFailure = exports.userInfoFullSuccess = exports.userInfoFullRequest = exports.userInfoFailure = exports.userInfoSuccess = exports.userInfoRequest = exports.registerFailure = exports.registerSuccess = exports.registerRequest = exports.authLogout = exports.authFailure = exports.authSuccess = exports.authRequest = exports.types = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var types = {
  REGISTER_INFO: {
    REQUEST: 'REGISTER_INFO.REQUEST',
    SUCCESS: 'REGISTER_INFO.SUCCESS',
    FAILURE: 'REGISTER_INFO.FAILURE'
  },
  GET_CODE: {
    REQUEST: 'GET_CODE.REQUEST',
    SUCCESS: 'GET_CODE.SUCCESS',
    FAILURE: 'GET_CODE.FAILURE'
  },
  AUTH: {
    REQUEST: 'AUTH.REQUEST',
    SUCCESS: 'AUTH.SUCCESS',
    FAILURE: 'AUTH.FAILURE',
    LOGOUT: 'AUTH.LOGOUT'
  },
  PASSWORD_RESET: {
    REQUEST: 'PASSWORD_RESET.REQUEST',
    SUCCESS: 'PASSWORD_RESET.SUCCESS',
    FAILURE: 'PASSWORD_RESET.FAILURE'
  },
  REGISTER: {
    REQUEST: 'REGISTER.REQUEST',
    SUCCESS: 'REGISTER.SUCCESS',
    FAILURE: 'REGISTER.FAILURE'
  },
  CHECK_CODE: {
    REQUEST: 'CHECK_CODE.REQUEST',
    SUCCESS: 'CHECK_CODE.SUCCESS',
    FAILURE: 'CHECK_CODE.FAILURE'
  },
  INFO: {
    REQUEST: 'INFO.REQUEST',
    SUCCESS: 'INFO.SUCCESS',
    FAILURE: 'INFO.FAILURE'
  },
  INFO_FULL: {
    REQUEST: 'INFO_FULL.REQUEST',
    SUCCESS: 'INFO_FULL.SUCCESS',
    FAILURE: 'INFO_FULL.FAILURE'
  },
  INFO_FULL_UPDATE: {
    REQUEST: 'INFO_FULL_UPDATE.REQUEST',
    SUCCESS: 'INFO_FULL_UPDATE.SUCCESS',
    FAILURE: 'INFO_FULL_UPDATE.FAILURE'
  },
  SEND_EMAIL: {
    REQUEST: 'SEND_EMAIL.REQUEST',
    SUCCESS: 'SEND_EMAIL.SUCCESS',
    FAILURE: 'SEND_EMAIL.FAILURE'
  },
  UPLOAD_PHOTO: {
    REQUEST: 'UPLOAD_PHOTO.REQUEST',
    SUCCESS: 'UPLOAD_PHOTO.SUCCESS',
    FAILURE: 'UPLOAD_PHOTO.FAILURE'
  },
  DIALOGS: {
    REQUEST: 'DIALOGS.REQUEST',
    SUCCESS: 'DIALOGS.SUCCESS',
    FAILURE: 'DIALOGS.FAILURE'
  },
  DIALOG: {
    REQUEST: 'DIALOG.REQUEST',
    SUCCESS: 'DIALOG.SUCCESS',
    FAILURE: 'DIALOG.FAILURE'
  },
  DIALOG_DELETE: {
    REQUEST: 'DIALOG_DELETE.REQUEST',
    SUCCESS: 'DIALOG_DELETE.SUCCESS',
    FAILURE: 'DIALOG_DELETE.FAILURE'
  },
  MESSAGE_SEND: {
    REQUEST: 'MESSAGE_SEND.REQUEST',
    SUCCESS: 'MESSAGE_SEND.SUCCESS',
    FAILURE: 'MESSAGE_SEND.FAILURE'
  },
  SAVE_TOKEN: {
    REQUEST: 'SAVE_TOKEN.REQUEST',
    SUCCESS: 'SAVE_TOKEN.SUCCESS',
    FAILURE: 'SAVE_TOKEN.FAILURE'
  },
  ON_BOARDING: {
    OFF: 'ON_BOARDING.OFF'
  },
  SPECS: {
    REQUEST: 'SPECS.REQUEST',
    SUCCESS: 'SPECS.SUCCESS',
    FAILURE: 'SPECS.FAILURE'
  },
  SPECS_SET: {
    REQUEST: 'SPECS_SET.REQUEST',
    SUCCESS: 'SPECS_SET.SUCCESS',
    FAILURE: 'SPECS_SET.FAILURE'
  },
  PROFILE_DESCRIPTIONS: {
    REQUEST: 'PROFILE_DESCRIPTIONS.REQUEST',
    SUCCESS: 'PROFILE_DESCRIPTIONS.SUCCESS',
    FAILURE: 'PROFILE_DESCRIPTIONS.FAILURE'
  },
  PROFILE_DESCRIPTION_UPDATE: {
    REQUEST: 'PROFILE_DESCRIPTION_UPDATE.REQUEST',
    SUCCESS: 'PROFILE_DESCRIPTION_UPDATE.SUCCESS',
    FAILURE: 'PROFILE_DESCRIPTION_UPDATE.FAILURE'
  },
  GET_WORKPLACES: {
    REQUEST: 'GET_WORKPLACES.REQUEST',
    SUCCESS: 'GET_WORKPLACES.SUCCESS',
    FAILURE: 'GET_WORKPLACES.FAILURE'
  },
  FORM: {
    SET: 'FORM.SET'
  },
  BEAUTY_ROOMS: {
    REQUEST: 'BEAUTY_ROOMS.REQUEST',
    SUCCESS: 'BEAUTY_ROOMS.SUCCESS',
    FAILURE: 'BEAUTY_ROOMS.FAILURE'
  },
  CITY_INFO: {
    REQUEST: 'CITY_INFO.REQUEST',
    SUCCESS: 'CITY_INFO.SUCCESS',
    FAILURE: 'CITY_INFO.FAILURE'
  },
  WORKPLACE_ADD: {
    REQUEST: 'WORKPLACE_ADD.REQUEST',
    SUCCESS: 'WORKPLACE_ADD.SUCCESS',
    FAILURE: 'WORKPLACE_ADD.FAILURE'
  },
  BREAKS: {
    DELETE: 'BREAKS.DELETE'
  },
  WORKPLACE_DELETE: {
    REQUEST: 'WORKPLACE_DELETE.REQUEST',
    SUCCESS: 'WORKPLACE_DELETE.SUCCESS',
    FAILURE: 'WORKPLACE_DELETE.FAILURE'
  },
  BEAUTY_ROOM: {
    SEND: 'BEAUTY_ROOM.SEND',
    ERROR: 'BEAUTY_ROOM.ERROR'
  }
};
exports.types = types;

var authRequest = function authRequest(data) {
  return _objectSpread({
    type: types.AUTH.REQUEST
  }, data);
};

exports.authRequest = authRequest;

var authSuccess = function authSuccess(data) {
  return _objectSpread({
    type: types.AUTH.SUCCESS
  }, data);
};

exports.authSuccess = authSuccess;

var authFailure = function authFailure(data) {
  return _objectSpread({
    type: types.AUTH.FAILURE
  }, data);
};

exports.authFailure = authFailure;

var registerRequest = function registerRequest(data) {
  return _objectSpread({
    type: types.REGISTER.REQUEST
  }, data);
};

exports.registerRequest = registerRequest;

var registerSuccess = function registerSuccess(data) {
  return _objectSpread({
    type: types.REGISTER.SUCCESS
  }, data);
};

exports.registerSuccess = registerSuccess;

var registerFailure = function registerFailure(data) {
  return _objectSpread({
    type: types.REGISTER.FAILURE
  }, data);
};

exports.registerFailure = registerFailure;

var authLogout = function authLogout(data) {
  return _objectSpread({
    type: types.AUTH.LOGOUT
  }, data);
};

exports.authLogout = authLogout;

var userInfoRequest = function userInfoRequest(data) {
  return _objectSpread({
    type: types.INFO.REQUEST
  }, data);
};

exports.userInfoRequest = userInfoRequest;

var userInfoSuccess = function userInfoSuccess(data) {
  return _objectSpread({
    type: types.INFO.SUCCESS
  }, data);
};

exports.userInfoSuccess = userInfoSuccess;

var userInfoFailure = function userInfoFailure(data) {
  return _objectSpread({
    type: types.INFO.FAILURE
  }, data);
};

exports.userInfoFailure = userInfoFailure;

var userInfoFullRequest = function userInfoFullRequest(data) {
  return _objectSpread({
    type: types.INFO_FULL.REQUEST
  }, data);
};

exports.userInfoFullRequest = userInfoFullRequest;

var userInfoFullSuccess = function userInfoFullSuccess(data) {
  return _objectSpread({
    type: types.INFO_FULL.SUCCESS
  }, data);
};

exports.userInfoFullSuccess = userInfoFullSuccess;

var userInfoFullFailure = function userInfoFullFailure(data) {
  return _objectSpread({
    type: types.INFO_FULL_UPDATE.FAILURE
  }, data);
};

exports.userInfoFullFailure = userInfoFullFailure;

var userInfoFullUpdateRequest = function userInfoFullUpdateRequest(data) {
  return _objectSpread({
    type: types.INFO_FULL_UPDATE.REQUEST
  }, data);
};

exports.userInfoFullUpdateRequest = userInfoFullUpdateRequest;

var userInfoFullUpdateSuccess = function userInfoFullUpdateSuccess(data) {
  return _objectSpread({
    type: types.INFO_FULL_UPDATE.SUCCESS
  }, data);
};

exports.userInfoFullUpdateSuccess = userInfoFullUpdateSuccess;

var userInfoFullUpdateFailure = function userInfoFullUpdateFailure(data) {
  return _objectSpread({
    type: types.INFO_FULL_UPDATE.FAILURE
  }, data);
};

exports.userInfoFullUpdateFailure = userInfoFullUpdateFailure;

var sendEmailRequest = function sendEmailRequest(data) {
  return _objectSpread({
    type: types.SEND_EMAIL.REQUEST
  }, data);
};

exports.sendEmailRequest = sendEmailRequest;

var sendEmailSuccess = function sendEmailSuccess(data) {
  return _objectSpread({
    type: types.SEND_EMAIL.SUCCESS
  }, data);
};

exports.sendEmailSuccess = sendEmailSuccess;

var sendEmailFailure = function sendEmailFailure(data) {
  return _objectSpread({
    type: types.SEND_EMAIL.FAILURE
  }, data);
};

exports.sendEmailFailure = sendEmailFailure;

var uploadPhotoRequest = function uploadPhotoRequest(data) {
  return _objectSpread({
    type: types.UPLOAD_PHOTO.REQUEST
  }, data);
};

exports.uploadPhotoRequest = uploadPhotoRequest;

var uploadPhotoSuccess = function uploadPhotoSuccess(data) {
  return _objectSpread({
    type: types.UPLOAD_PHOTO.SUCCESS
  }, data);
};

exports.uploadPhotoSuccess = uploadPhotoSuccess;

var uploadPhotoFailure = function uploadPhotoFailure(data) {
  return _objectSpread({
    type: types.UPLOAD_PHOTO.FAILURE
  }, data);
};

exports.uploadPhotoFailure = uploadPhotoFailure;

var dialogsRequest = function dialogsRequest(data) {
  return _objectSpread({
    type: types.DIALOGS.REQUEST
  }, data);
};

exports.dialogsRequest = dialogsRequest;

var dialogsSuccess = function dialogsSuccess(data) {
  return _objectSpread({
    type: types.DIALOGS.SUCCESS
  }, data);
};

exports.dialogsSuccess = dialogsSuccess;

var dialogsFailure = function dialogsFailure(data) {
  return _objectSpread({
    type: types.DIALOGS.FAILURE
  }, data);
};

exports.dialogsFailure = dialogsFailure;

var dialogDeleteRequest = function dialogDeleteRequest(data) {
  return _objectSpread({
    type: types.DIALOG_DELETE.REQUEST
  }, data);
};

exports.dialogDeleteRequest = dialogDeleteRequest;

var dialogDeleteSuccess = function dialogDeleteSuccess(data) {
  return _objectSpread({
    type: types.DIALOG_DELETE.SUCCESS
  }, data);
};

exports.dialogDeleteSuccess = dialogDeleteSuccess;

var dialogDeleteFailure = function dialogDeleteFailure(data) {
  return _objectSpread({
    type: types.DIALOG_DELETE.FAILURE
  }, data);
};

exports.dialogDeleteFailure = dialogDeleteFailure;

var dialogRequest = function dialogRequest(data) {
  return _objectSpread({
    type: types.DIALOG.REQUEST
  }, data);
};

exports.dialogRequest = dialogRequest;

var dialogSuccess = function dialogSuccess(data) {
  return _objectSpread({
    type: types.DIALOG.SUCCESS
  }, data);
};

exports.dialogSuccess = dialogSuccess;

var dialogFailure = function dialogFailure(data) {
  return _objectSpread({
    type: types.DIALOG.FAILURE
  }, data);
};

exports.dialogFailure = dialogFailure;

var messageSendRequest = function messageSendRequest(data) {
  return _objectSpread({
    type: types.MESSAGE_SEND.REQUEST
  }, data);
};

exports.messageSendRequest = messageSendRequest;

var messageSendSuccess = function messageSendSuccess(data) {
  return _objectSpread({
    type: types.MESSAGE_SEND.SUCCESS
  }, data);
};

exports.messageSendSuccess = messageSendSuccess;

var messageSendFailure = function messageSendFailure(data) {
  return _objectSpread({
    type: types.DIALOG.FAILURE
  }, data);
};

exports.messageSendFailure = messageSendFailure;

var saveTokenRequest = function saveTokenRequest(data) {
  return _objectSpread({
    type: types.SAVE_TOKEN.REQUEST
  }, data);
};

exports.saveTokenRequest = saveTokenRequest;

var saveTokenSuccess = function saveTokenSuccess(data) {
  return _objectSpread({
    type: types.SAVE_TOKEN.SUCCESS
  }, data);
};

exports.saveTokenSuccess = saveTokenSuccess;

var saveTokenFailure = function saveTokenFailure(data) {
  return _objectSpread({
    type: types.SAVE_TOKEN.FAILURE
  }, data);
};

exports.saveTokenFailure = saveTokenFailure;

var getRegisterInfoRequest = function getRegisterInfoRequest(data) {
  return _objectSpread({
    type: types.REGISTER_INFO.REQUEST
  }, data);
};

exports.getRegisterInfoRequest = getRegisterInfoRequest;

var getRegisterInfoSuccess = function getRegisterInfoSuccess(data) {
  return _objectSpread({
    type: types.REGISTER_INFO.SUCCESS
  }, data);
};

exports.getRegisterInfoSuccess = getRegisterInfoSuccess;

var getRegisterInfoFailure = function getRegisterInfoFailure(data) {
  return _objectSpread({
    type: types.REGISTER_INFO.FAILURE
  }, data);
};

exports.getRegisterInfoFailure = getRegisterInfoFailure;

var checkCodeRequest = function checkCodeRequest(data) {
  return _objectSpread({
    type: types.CHECK_CODE.REQUEST
  }, data);
};

exports.checkCodeRequest = checkCodeRequest;

var checkCodeSuccess = function checkCodeSuccess(data) {
  return _objectSpread({
    type: types.CHECK_CODE.SUCCESS
  }, data);
};

exports.checkCodeSuccess = checkCodeSuccess;

var checkCodeFailure = function checkCodeFailure(data) {
  return _objectSpread({
    type: types.CHECK_CODE.FAILURE
  }, data);
};

exports.checkCodeFailure = checkCodeFailure;

var getCodeRequest = function getCodeRequest(data) {
  return _objectSpread({
    type: types.GET_CODE.REQUEST
  }, data);
};

exports.getCodeRequest = getCodeRequest;

var getCodeSuccess = function getCodeSuccess(data) {
  return _objectSpread({
    type: types.GET_CODE.SUCCESS
  }, data);
};

exports.getCodeSuccess = getCodeSuccess;

var getCodeFailure = function getCodeFailure(data) {
  return _objectSpread({
    type: types.GET_CODE.FAILURE
  }, data);
};

exports.getCodeFailure = getCodeFailure;

var passwordResetRequest = function passwordResetRequest(data) {
  return _objectSpread({
    type: types.PASSWORD_RESET.REQUEST
  }, data);
};

exports.passwordResetRequest = passwordResetRequest;

var passwordResetSuccess = function passwordResetSuccess(data) {
  return _objectSpread({
    type: types.PASSWORD_RESET.SUCCESS
  }, data);
};

exports.passwordResetSuccess = passwordResetSuccess;

var passwordResetFailure = function passwordResetFailure(data) {
  return _objectSpread({
    type: types.PASSWORD_RESET.FAILURE
  }, data);
};

exports.passwordResetFailure = passwordResetFailure;

var onBoardingOff = function onBoardingOff(data) {
  return _objectSpread({
    type: types.ON_BOARDING.OFF
  }, data);
};

exports.onBoardingOff = onBoardingOff;

var specsRequest = function specsRequest(data) {
  return _objectSpread({
    type: types.SPECS.REQUEST
  }, data);
};

exports.specsRequest = specsRequest;

var specsSuccess = function specsSuccess(data) {
  return _objectSpread({
    type: types.SPECS.SUCCESS
  }, data);
};

exports.specsSuccess = specsSuccess;

var specsFailure = function specsFailure(data) {
  return _objectSpread({
    type: types.SPECS.FAILURE
  }, data);
};

exports.specsFailure = specsFailure;

var specsSetRequest = function specsSetRequest(data) {
  return _objectSpread({
    type: types.SPECS_SET.REQUEST
  }, data);
};

exports.specsSetRequest = specsSetRequest;

var specsSetSuccess = function specsSetSuccess(data) {
  return _objectSpread({
    type: types.SPECS_SET.SUCCESS
  }, data);
};

exports.specsSetSuccess = specsSetSuccess;

var specsSetFailure = function specsSetFailure(data) {
  return _objectSpread({
    type: types.SPECS_SET.FAILURE
  }, data);
};

exports.specsSetFailure = specsSetFailure;

var profileDescriptionsRequest = function profileDescriptionsRequest(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTIONS.REQUEST
  }, data);
};

exports.profileDescriptionsRequest = profileDescriptionsRequest;

var profileDescriptionsSuccess = function profileDescriptionsSuccess(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTIONS.SUCCESS
  }, data);
};

exports.profileDescriptionsSuccess = profileDescriptionsSuccess;

var profileDescriptionsFailure = function profileDescriptionsFailure(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTIONS.FAILURE
  }, data);
};

exports.profileDescriptionsFailure = profileDescriptionsFailure;

var profileDescriptionUpdateRequest = function profileDescriptionUpdateRequest(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTION_UPDATE.REQUEST
  }, data);
};

exports.profileDescriptionUpdateRequest = profileDescriptionUpdateRequest;

var profileDescriptionUpdateSuccess = function profileDescriptionUpdateSuccess(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTION_UPDATE.SUCCESS
  }, data);
};

exports.profileDescriptionUpdateSuccess = profileDescriptionUpdateSuccess;

var profileDescriptionUpdateFailure = function profileDescriptionUpdateFailure(data) {
  return _objectSpread({
    type: types.PROFILE_DESCRIPTION_UPDATE.FAILURE
  }, data);
};

exports.profileDescriptionUpdateFailure = profileDescriptionUpdateFailure;

var getWorkplacesRequest = function getWorkplacesRequest(data) {
  return _objectSpread({
    type: types.GET_WORKPLACES.REQUEST
  }, data);
};

exports.getWorkplacesRequest = getWorkplacesRequest;

var getWorkplacesSuccess = function getWorkplacesSuccess(data) {
  return _objectSpread({
    type: types.GET_WORKPLACES.SUCCESS
  }, data);
};

exports.getWorkplacesSuccess = getWorkplacesSuccess;

var getWorkplacesFailure = function getWorkplacesFailure(data) {
  return _objectSpread({
    type: types.GET_WORKPLACES.FAILURE
  }, data);
};

exports.getWorkplacesFailure = getWorkplacesFailure;

var setForm = function setForm(data) {
  return _objectSpread({
    type: types.FORM.SET
  }, data);
};

exports.setForm = setForm;

var beautyRoomsRequest = function beautyRoomsRequest(data) {
  return _objectSpread({
    type: types.BEAUTY_ROOMS.REQUEST
  }, data);
};

exports.beautyRoomsRequest = beautyRoomsRequest;

var beautyRoomsSuccess = function beautyRoomsSuccess(data) {
  return _objectSpread({
    type: types.BEAUTY_ROOMS.SUCCESS
  }, data);
};

exports.beautyRoomsSuccess = beautyRoomsSuccess;

var beautyRoomsFailure = function beautyRoomsFailure(data) {
  return _objectSpread({
    type: types.BEAUTY_ROOMS.FAILURE
  }, data);
};

exports.beautyRoomsFailure = beautyRoomsFailure;

var cityInfoRequest = function cityInfoRequest(data) {
  return _objectSpread({
    type: types.CITY_INFO.REQUEST
  }, data);
};

exports.cityInfoRequest = cityInfoRequest;

var cityInfoSuccess = function cityInfoSuccess(data) {
  return _objectSpread({
    type: types.CITY_INFO.SUCCESS
  }, data);
};

exports.cityInfoSuccess = cityInfoSuccess;

var cityInfoFailure = function cityInfoFailure(data) {
  return _objectSpread({
    type: types.CITY_INFO.FAILURE
  }, data);
};

exports.cityInfoFailure = cityInfoFailure;

var workplaceAddRequest = function workplaceAddRequest(data) {
  return _objectSpread({
    type: types.WORKPLACE_ADD.REQUEST
  }, data);
};

exports.workplaceAddRequest = workplaceAddRequest;

var workplaceAddSuccess = function workplaceAddSuccess(data) {
  return _objectSpread({
    type: types.WORKPLACE_ADD.SUCCESS
  }, data);
};

exports.workplaceAddSuccess = workplaceAddSuccess;

var workplaceAddFailure = function workplaceAddFailure(data) {
  return _objectSpread({
    type: types.WORKPLACE_ADD.FAILURE
  }, data);
};

exports.workplaceAddFailure = workplaceAddFailure;

var breaksDelete = function breaksDelete(data) {
  return _objectSpread({
    type: types.BREAKS.DELETE
  }, data);
};

exports.breaksDelete = breaksDelete;

var workplaceDeleteRequest = function workplaceDeleteRequest(data) {
  return _objectSpread({
    type: types.WORKPLACE_DELETE.REQUEST
  }, data);
};

exports.workplaceDeleteRequest = workplaceDeleteRequest;

var workplaceDeleteSuccess = function workplaceDeleteSuccess(data) {
  return _objectSpread({
    type: types.WORKPLACE_DELETE.SUCCESS
  }, data);
};

exports.workplaceDeleteSuccess = workplaceDeleteSuccess;

var workplaceDeleteFailure = function workplaceDeleteFailure(data) {
  return _objectSpread({
    type: types.WORKPLACE_DELETE.FAILURE
  }, data);
};

exports.workplaceDeleteFailure = workplaceDeleteFailure;