import {Alert} from 'react-native';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import _ from '../services/i18n';
import {
  types,
  authRequest,
  authSuccess,
  authFailure,
  authLogout,
  userInfoSuccess,
  userInfoFailure,
  userInfoFullSuccess,
  userInfoFullFailure,
  userInfoFullUpdateSuccess,
  userInfoFullUpdateFailure,
  sendEmailSuccess,
  sendEmailFailure,
  uploadPhotoSuccess,
  uploadPhotoFailure,
  dialogsSuccess,
  dialogsRequest,
  dialogsFailure,
  dialogRequest,
  dialogSuccess,
  dialogFailure,
  messageSendSuccess,
  messageSendFailure,
  saveTokenSuccess,
  saveTokenFailure,
  getRegisterInfoSuccess,
  getRegisterInfoFailure,
  registerSuccess,
  registerFailure,
  checkCodeSuccess,
  checkCodeFailure,
  getCodeSuccess,
  getCodeFailure,
  userPassword,
  passwordResetSuccess,
  passwordResetFailure,
  dialogDeleteSuccess,
  dialogDeleteFailure,
  specsRequest,
  specsSuccess,
  specsFailure,
  specsSetSuccess,
  specsSetFailure,
  profileDescriptionsRequest,
  profileDescriptionsSuccess,
  profileDescriptionsFailure,
  profileDescriptionUpdateSuccess,
  profileDescriptionUpdateFailure,
} from '../actions/user';
import {
  getClientId,
  getClientSecret,
  getGrantType,
  getAccessToken,
} from './selectors';
import {api} from '../services/api';
import {
  BACKEND_URL,
  ENDPOINT_AUTH,
  ENDPOINT_USER_INFO,
  ENDPOINT_USER_INFO_FULL,
  ENDPOINT_SEND_EMAIL,
  ENDPOINT_UPLOAD_PHOTO,
  ENDPOINT_DIALOGS,
  ENDPOINT_DIALOG,
  ENDPOINT_SAVE_PUSH_TOKEN,
  ENDPOINT_REGISTER,
  ENDPOINT_CHECK_CODE,
  ENDPOINT_GET_CODE,
  ENDPOINT_PASSWORD_RESET,
  ENDPOINT_DELETE_DIALOGS,
  ENDPOINT_SPECS,
  ENDPOINT_PROFILE_DESCRIPTIONS,
} from '../constants/api';

function* authSaga(params) {
  const grant_type = yield select(getGrantType);
  const client_id = yield select(getClientId);
  const client_secret = yield select(getClientSecret);
  const {phone, password, navigation} = params;
  const response = yield call(api, ENDPOINT_AUTH, 'POST', {
    username: phone,
    password,
    grant_type,
    client_id,
    client_secret,
  });

  if (response.status === 200) {    
    yield put(
      authSuccess({
        phone,
        password,
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      }),
    );

  } else {
    Alert.alert('', response.data.message);
    yield put(authFailure({}));
  }
}

function* userInfoSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_USER_INFO, 'GET', {}, token);

  if (response.status === 200) {
    const {messages, user} = response.data.data;
    yield put(
      userInfoSuccess({
        messages,
        user,
      }),
    );
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(userInfoFailure({}));
  }
}

function* userInfoFullSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_USER_INFO_FULL, 'GET', {}, token);

  if (response.status === 200) {
    const {user} = response.data.data;
    yield put(
      userInfoFullSuccess({
        user,
      }),
    );
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(userInfoFullFailure({}));
  }
}

function* userInfoFullUpdateSaga(params) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_USER_INFO_FULL,
    'POST',
    params,
    token,
  );

  if (response.status === 200) {
    yield put(userInfoFullUpdateSuccess());
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(userInfoFullUpdateFailure({}));
  }
}

function* sendEmailSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_SEND_EMAIL, 'GET', {}, token);
  if (response.status === 200) {
    Alert.alert('', response.data.data);
    yield put(sendEmailSuccess());
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(sendEmailFailure({}));
  }
}

function* uploadPhotoSaga(params) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_UPLOAD_PHOTO,
    'POST',
    params,
    token,
  );

  if (response.status === 200) {
    yield put(uploadPhotoSuccess());
    yield put(profileDescriptionsRequest());
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(uploadPhotoFailure({}));
  }
}

function* dialogsSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_DIALOGS, 'GET', {}, token);
  if (response.status === 200) {
    yield put(dialogsSuccess({dialogs: response.data.data.dialogs}));
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(dialogsFailure({}));
  }
}

function* dialogSaga(params) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_DIALOG + params.id,
    'GET',
    {},
    token,
  );
  if (response.status === 200) {
    yield put(
      dialogSuccess({
        dialog: response.data.data.dialog,
        dialog_messages: response.data.data.messages,
      }),
    );
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(dialogFailure({}));
  }
}

function* messageSendSaga(params) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    BACKEND_URL + '/api-dialog/' + params.dialog_id + '/send',
    'POST',
    params,
    token,
  );

  if (response.status === 200) {
    yield put(messageSendSuccess());
    yield put(dialogRequest({id: params.dialog_id}));
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(messageSendFailure({}));
  }
}

function* saveTokenSaga(params) {
  const token = yield select(getAccessToken);

  const response = yield call(
    api,
    BACKEND_URL + ENDPOINT_SAVE_PUSH_TOKEN,
    'POST',
    params,
    token,
  );

  if (response.status === 200) {
    yield put(saveTokenSuccess());
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(saveTokenFailure({}));
  }
}

function* registerInfoSaga() {
  const response = yield call(api, ENDPOINT_REGISTER, 'GET', {});

  if (response.status === 200) {
    const {types, cities} = response.data.data;
    yield put(
      getRegisterInfoSuccess({
        types,
        cities,
      }),
    );
  } else {
    Alert.alert('', response.data.message);
    yield put(getRegisterInfoFailure({}));
  }
}

function* registerSaga(params) {
  const {payload, navigation} = params;
  const {phone, password} = payload;
  const response = yield call(api, ENDPOINT_REGISTER, 'POST', payload);
  if (response.data.status_code === 200) {
    const {message, result} = response.data.data;
    yield put(
      registerSuccess({
        result,
      }),
    );

    yield put(authRequest({ phone, password, navigation }));

    // Alert.alert('', message);
  } else {
    Alert.alert('', response.data.error);
    yield put(registerFailure({}));
  }
}

function* checkCodeSaga(params) {
  const {phone, code, navigation} = params;
  const response = yield call(api, ENDPOINT_CHECK_CODE, 'POST', {phone, code});

  if (response.status === 200) {
    const {message, password} = response.data.data;
    yield put(
      checkCodeSuccess({
        phone,
        password,
      }),
    );

    // Alert.alert('', message);
    navigation.navigate('UserInfo');

  } else {
    Alert.alert('', response.data.message);
    yield put(checkCodeFailure({}));
  }
}

function* getCodeSaga(params) {
  const {phone, city} = params;
  const response = yield call(api, ENDPOINT_GET_CODE, 'POST', {city_id: city.id, phone});

  if (response.status === 200) {
    const {code} = response.data.data;

    yield put(
      getCodeSuccess({
        code,
        phone,
        city
      }),
    );
  } else {
    Alert.alert('', response.data.message);
    yield put(getCodeFailure({}));
  }
}

function* passwordResetSaga(params) {
  const {phone} = params;
  const response = yield call(api, ENDPOINT_PASSWORD_RESET, 'POST', {phone});

  if (response.status === 200) {
    const {code} = response.data.data;
    yield put(
      passwordResetSuccess({
        phone,
      }),
    );
  } else {
    Alert.alert('', response.data.message);
    yield put(passwordResetFailure({}));
  }
}

function* dialogDeleteSaga(params) {
  const token = yield select(getAccessToken);
  const {dialogs} = params;
  const response = yield call(api, ENDPOINT_DELETE_DIALOGS, 'POST', {dialogs}, token);

  if (response.status === 200) {
    yield put(
      dialogDeleteSuccess()
    );
    yield put(dialogsRequest());
  } else if (response.status === 401) {
    yield put(dialogDeleteFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(dialogDeleteFailure({}));
  }
}

function* specsSaga() {
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_SPECS, 'GET', {}, token);

  if (response.status === 200) {
    const {specs} = response.data.data;
    yield put(
      specsSuccess({specs})
    );
  } else if (response.status === 401) {
    yield put(specsFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(specsFailure({}));
  }
}

function* specsSetSaga(params) {
  const {navigation, payload} = params;
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_SPECS, 'POST', payload, token);

  if (response.status === 200) {
    const {specs} = response.data.data;
    yield put( specsSetSuccess({specs}));
    Toast.show({
      type: 'success',
      // text1: title,
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    
    yield put(specsRequest());
    navigation.goBack();

  } else if (response.status === 401) {
    yield put(specsSetFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(specsSetFailure({}));
  }
}

function* profileDescriptionsSaga() {
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_PROFILE_DESCRIPTIONS, 'GET', {}, token);

  if (response.status === 200) {
    yield put(
      profileDescriptionsSuccess({data: response.data.data}),
    );
  } else if (response.status === 401) {
    yield put(profileDescriptionsFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(profileDescriptionsFailure({}));
  }
}

function* profileDescriptionUpdateSaga(params) {
  const {navigation, payload} = params;
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_PROFILE_DESCRIPTIONS, 'POST', payload, token);

console.log('response4', response)

  if (response.status === 200) {
    yield put(profileDescriptionUpdateSuccess());
    yield put(profileDescriptionsRequest());
  } else if (response.status === 401) {
    yield put(profileDescriptionUpdateFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(profileDescriptionUpdateFailure({}));
  }
}

function* watchAuthSaga() {
  yield takeLatest(types.AUTH.REQUEST, authSaga);
}

function* watchRegisterInfoSaga() {
  yield takeLatest(types.REGISTER_INFO.REQUEST, registerInfoSaga);
}

function* watchUserInfoSaga() {
  yield takeLatest(types.INFO.REQUEST, userInfoSaga);
}

function* watchUserInfoFullSaga() {
  yield takeLatest(types.INFO_FULL.REQUEST, userInfoFullSaga);
}

function* watchUserInfoFullUpdateSaga() {
  yield takeLatest(types.INFO_FULL_UPDATE.REQUEST, userInfoFullUpdateSaga);
}

function* watchSendEmailSaga() {
  yield takeLatest(types.SEND_EMAIL.REQUEST, sendEmailSaga);
}

function* watchUploadPhotoSaga() {
  yield takeLatest(types.UPLOAD_PHOTO.REQUEST, uploadPhotoSaga);
}

function* watchDialogsSaga() {
  yield takeLatest(types.DIALOGS.REQUEST, dialogsSaga);
}

function* watchDialogSaga() {
  yield takeLatest(types.DIALOG.REQUEST, dialogSaga);
}

function* watchMessageSendSaga() {
  yield takeLatest(types.MESSAGE_SEND.REQUEST, messageSendSaga);
}

function* watchSaveTokenSaga() {
  yield takeLatest(types.SAVE_TOKEN.REQUEST, saveTokenSaga);
}

function* watchRegisterSaga() {
  yield takeLatest(types.REGISTER.REQUEST, registerSaga);
}

function* watchCheckCodeSaga() {
  yield takeLatest(types.CHECK_CODE.REQUEST, checkCodeSaga);
}

function* watchGetCodeSaga() {
  yield takeLatest(types.GET_CODE.REQUEST, getCodeSaga);
}

function* watchPasswordResetSaga() {
  yield takeLatest(types.PASSWORD_RESET.REQUEST, passwordResetSaga);
}

function* watchDialogDeleteSaga() {
  yield takeLatest(types.DIALOG_DELETE.REQUEST, dialogDeleteSaga);
}

function* watchSpecsSaga() {
  yield takeLatest(types.SPECS.REQUEST, specsSaga);
}

function* watchSpecsSetSaga() {
  yield takeLatest(types.SPECS_SET.REQUEST, specsSetSaga);
}

function* watchProfileDescriptionsSaga() {
  yield takeLatest(types.PROFILE_DESCRIPTIONS.REQUEST, profileDescriptionsSaga);
}

function* watchProfileDescriptionUpdateSaga() {
  yield takeLatest(types.PROFILE_DESCRIPTION_UPDATE.REQUEST, profileDescriptionUpdateSaga);
}

export {
  watchAuthSaga,
  watchUserInfoSaga,
  watchUserInfoFullSaga,
  watchUserInfoFullUpdateSaga,
  watchSendEmailSaga,
  watchUploadPhotoSaga,
  watchDialogsSaga,
  watchDialogSaga,
  watchMessageSendSaga,
  watchSaveTokenSaga,
  watchRegisterInfoSaga,
  watchRegisterSaga,
  watchCheckCodeSaga,
  watchGetCodeSaga,
  watchPasswordResetSaga,
  watchDialogDeleteSaga,
  watchSpecsSaga,
  watchSpecsSetSaga,
  watchProfileDescriptionsSaga,
  watchProfileDescriptionUpdateSaga
};
