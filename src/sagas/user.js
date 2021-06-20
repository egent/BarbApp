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
  getWorkplacesRequest,
  getWorkplacesSuccess,
  getWorkplacesFailure,
  beautyRoomsSuccess,
  beautyRoomsFailure,
  cityInfoSuccess,
  cityInfoFailure,
  workplaceAddRequest,
  workplaceAddSuccess,
  workplaceAddFailure,
  workplaceDeleteSuccess,
  workplaceDeleteFailure,
  beautyRoomSend,
  beautyRoomError,
  setValidationAlert,
  workplaceUpdateRequest,
  workplaceUpdateSuccess,
  workplaceUpdateFailure,
  setWorkplaceClear,
  priceRequest,
  priceSuccess,
  priceFailure,
  priceSaveSuccess,
  priceSaveFailure,
  priceClear,
} from '../actions/user';
import {
  getClientId,
  getClientSecret,
  getGrantType,
  getAccessToken,
  getUserState,
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
  ENDPOINT_GET_WORKPLACES,
  // ENDPOINT_GET_BEAUTY_ROOMS,
  ENDPOINT_GET_CITY_INFO,
  ENDPOINT_WORKPLACE_ADD,
  ENDPOINT_WORKPLACE_DELETE,
  ENDPOINT_WORKPLACE_UPDATE,
  ENDPOINT_POINT_SEARCH_NAME,
  ENDPOINT_PRICE,
  ENDPOINT_PRICE_SAVE,
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
    Alert.alert('', response.data.error);
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

    yield put(authRequest({phone, password, navigation}));

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
  const {phone, city, navigation} = params;
  const response = yield call(api, ENDPOINT_GET_CODE, 'POST', {
    city_id: city.id,
    phone,
  });

  if (response.status === 200) {
    const {code, message} = response.data.data;

    try {
      yield put(
        getCodeSuccess({
          code,
          phone,
          city,
        }),
      );
      navigation.navigate('CheckSms');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: _.t('error'),
        text2: message,
        position: 'bottom',
        autoHide: true,
        visibilityTime: 2000,
      });
      yield put(getCodeFailure({}));
    }
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.message,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(getCodeFailure({}));
  }
}

function* passwordResetSaga(params) {
  const {phone, navigation} = params;
  const response = yield call(api, ENDPOINT_PASSWORD_RESET, 'POST', {phone});

  const {status_code} = response.data;

  if (status_code === 200) {
    yield put(
      passwordResetSuccess({
        phone,
      }),
    );
    navigation.navigate('ResetPasswordConfirm');
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.error,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(passwordResetFailure({}));
  }
}

function* dialogDeleteSaga(params) {
  const token = yield select(getAccessToken);
  const {dialogs} = params;
  const response = yield call(
    api,
    ENDPOINT_DELETE_DIALOGS,
    'POST',
    {dialogs},
    token,
  );

  if (response.status === 200) {
    yield put(dialogDeleteSuccess());
    yield put(dialogsRequest());
    Toast.show({
      type: 'success',
      text2: _.t('message_deleted'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
  } else if (response.status === 401) {
    yield put(dialogDeleteFailure({}));
    yield put(authLogout());
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.message,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(dialogDeleteFailure({}));
  }
}

function* specsSaga() {
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_SPECS, 'GET', {}, token);

  if (response.status === 200) {
    const {specs} = response.data.data;
    yield put(specsSuccess({specs}));
    yield put(priceRequest());
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
    yield put(specsSetSuccess({specs}));
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

  const response = yield call(
    api,
    ENDPOINT_PROFILE_DESCRIPTIONS,
    'GET',
    {},
    token,
  );

  if (response.status === 200) {
    yield put(profileDescriptionsSuccess({data: response.data.data}));
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

  const response = yield call(
    api,
    ENDPOINT_PROFILE_DESCRIPTIONS,
    'POST',
    payload,
    token,
  );

  if (response.status === 200) {
    yield put(profileDescriptionUpdateSuccess());
    yield put(profileDescriptionsRequest());

    Toast.show({
      type: 'success',
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });

    navigation.goBack();
  } else if (response.status === 401) {
    yield put(profileDescriptionUpdateFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(profileDescriptionUpdateFailure({}));
  }
}

function* getWorkspacesSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_GET_WORKPLACES, 'GET', {}, token);

  if (response.status === 200) {
    yield put(getWorkplacesSuccess({data: response.data}));
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(getWorkplacesFailure({}));
  }
}

function* beautyRoomsSaga({term}) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_POINT_SEARCH_NAME,
    'POST',
    {term},
    token,
  );

  // id: 41000
  // name: "Section"
  // salon_spec: 11

  if (response.data.status_code === 200) {
    yield put(beautyRoomsSuccess({data: response.data}));
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(beautyRoomsFailure({}));
  }
}

function* cityInfoSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_GET_CITY_INFO, 'GET', {}, token);
  if (response.status === 200) {
    yield put(cityInfoSuccess({data: response.data}));
  } else if (response.status === 401) {
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(cityInfoFailure({}));
  }
}

function* workspaceAddSaga(params) {
  const {navigation, payload} = params;
  const token = yield select(getAccessToken);

  const response = yield call(
    api,
    ENDPOINT_WORKPLACE_ADD,
    'POST',
    payload,
    token,
  );

  if (response.data.status_code === 200) {
    yield put(getWorkplacesRequest());
    yield put(workplaceAddSuccess());

    Toast.show({
      type: 'success',
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });

    navigation.goBack();
  } else if (response.status === 401) {
    yield put(workplaceAddFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(workplaceAddFailure({}));
  }
}

function* workspaceDeleteSaga(params) {
  const {address_id, navigation} = params;
  const token = yield select(getAccessToken);

  const response = yield call(
    api,
    ENDPOINT_WORKPLACE_DELETE,
    'POST',
    {address_id},
    token,
  );

  if (response.data.status_code === 200) {
    yield put(getWorkplacesRequest());
    yield put(workplaceDeleteSuccess());

    Toast.show({
      type: 'success',
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });

    if (navigation !== undefined) {
      navigation.goBack();
    }
  } else if (response.status === 401) {
    yield put(workplaceDeleteFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(workplaceDeleteFailure({}));
  }
}

function* beautyRoomSendSaga({navigation}) {
  const {
    beauty_name,
    workspace_address,
    beauty_room,
    workspace_type,
    district_select,
    sub_district_select,
    info,
    metro_select_array,
    workspace_phones,
    scheduleMenuActive,
    scheduleDays,
    schedule_odd,
    workspace_breaks,
    district_select_in_client,
    workspace_address_comment,
    address_id,
  } = yield select(getUserState);

  let checkForm = false;
  if (
    workspace_type === 2 &&
    beauty_name.length > 0 &&
    workspace_address.length > 0 &&
    workspace_phones.length > 0
  ) {
    checkForm = true;
  }

  if (workspace_type === 1 && workspace_address.length > 0) {
    checkForm = true;
  }

  if (workspace_type === 3) {
    checkForm = true;
  }

  if (checkForm) {
    let payload = {
      salon_name: beauty_name,
      street: workspace_address,
      workplace: workspace_type,
      id: address_id,
      city_id: info.city.id,
      comment: workspace_address_comment,
    };

    if (workspace_type !== 3 && district_select !== null) {
      payload = {...payload, district_id: district_select.id};
    }

    if (
      workspace_type !== 3 &&
      sub_district_select !== null &&
      sub_district_select.length > 0
    ) {
      const microdistricts = [];
      sub_district_select.map((m) => {
        microdistricts.push(m.id);
      });

      payload = {...payload, microdistricts};
    }

    if (
      workspace_type !== 3 &&
      metro_select_array !== null &&
      metro_select_array.length > 0
    ) {
      const metros = [];
      metro_select_array.map((m) => {
        metros.push(m.id);
      });
      payload = {...payload, metros};
    }

    if (
      workspace_type === 3 &&
      district_select_in_client !== null &&
      district_select_in_client.length > 0
    ) {
      const work_dist = [];
      district_select_in_client.map((m) => {
        work_dist.push(m.id);
      });

      payload = {...payload, work_dist};
    }

    if (workspace_phones !== null && workspace_phones.length > 0) {
      payload = {...payload, phones: workspace_phones};
    }

    if (scheduleMenuActive === 1) {
      payload = {
        ...payload,
        schedule_type: 1,
        schedule: {
          day: scheduleDays,
        },
      };
    }

    if (scheduleMenuActive === 2) {
      payload = {
        ...payload,
        schedule_type: 2,
        schedule_odd,
      };
    }

    if (scheduleMenuActive === 3) {
      payload = {
        ...payload,
        schedule_type: 3,
      };
    }

    const breakDays = [];
    for (let i = 0; i < 7; i++) {
      if (workspace_breaks[0].days[i] === 'on') {
        breakDays.push(workspace_breaks[0].days[i]);
      }
    }

    if (breakDays.length > 0) {
      payload = {...payload, breaks: workspace_breaks[0]};
    }

    if (address_id === '-1') {
      yield put(
        workplaceAddRequest({
          navigation,
          payload,
        }),
      );
      yield put(setWorkplaceClear());
    } else {
      yield put(workplaceUpdateRequest({navigation, payload}));
    }
  } else {
    yield put(beautyRoomError());
  }
}

function* workplaceUpdateSaga(params) {
  const {navigation, payload} = params;
  const token = yield select(getAccessToken);

  const response = yield call(
    api,
    ENDPOINT_WORKPLACE_UPDATE,
    'POST',
    payload,
    token,
  );

  if (response.data.status_code === 200) {
    yield put(getWorkplacesRequest());
    yield put(workplaceUpdateSuccess());

    Toast.show({
      type: 'success',
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });

    yield put(setWorkplaceClear());

    navigation.goBack();
  } else if (response.status === 401) {
    yield put(workplaceUpdateFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(workplaceUpdateFailure({}));
  }
}

function* priceSaga() {
  const token = yield select(getAccessToken);

  const response = yield call(api, ENDPOINT_PRICE, 'GET', {}, token);

  if (response.data.status_code === 200) {
    yield put(priceSuccess({priceInfo: response.data}));
  } else if (response.status === 401) {
    yield put(priceFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(priceFailure({}));
  }
}

function* priceUpdateSaga() {
  const {priceDescription, priceSelect} = yield select(getUserState);
  const payload = {
    description: priceDescription,
    price: priceSelect,
  };
  const token = yield select(getAccessToken);

  const response = yield call(
    api,
    ENDPOINT_PRICE_SAVE,
    'POST',
    payload,
    token,
  );

  if (response.data.status_code === 200) {
    yield put(priceSaveSuccess());
    yield put(priceRequest());

    Toast.show({
      type: 'success',
      text2: _.t('updated_success'),
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });

    yield put(priceClear());

  } else if (response.status === 401) {
    yield put(priceSaveFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(priceSaveFailure({}));
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
  yield takeLatest(
    types.PROFILE_DESCRIPTION_UPDATE.REQUEST,
    profileDescriptionUpdateSaga,
  );
}

function* watchGetWorkspacesSaga() {
  yield takeLatest(types.GET_WORKPLACES.REQUEST, getWorkspacesSaga);
}

function* watchBeautyRoomsSaga() {
  yield takeLatest(types.BEAUTY_ROOMS.REQUEST, beautyRoomsSaga);
}

function* watchCityInfoSaga() {
  yield takeLatest(types.CITY_INFO.REQUEST, cityInfoSaga);
}

function* watchWorkspaceAddSaga() {
  yield takeLatest(types.WORKPLACE_ADD.REQUEST, workspaceAddSaga);
}

function* watchWorkspaceDeleteSaga() {
  yield takeLatest(types.WORKPLACE_DELETE.REQUEST, workspaceDeleteSaga);
}

function* watchBeautyRoomSendSaga() {
  yield takeLatest(types.BEAUTY_ROOM.SEND, beautyRoomSendSaga);
}

function* watchWorkplaceUpdateSaga() {
  yield takeLatest(types.WORKPLACE_UPDATE.REQUEST, workplaceUpdateSaga);
}

function* watchPriceSaga() {
  yield takeLatest(types.PRICE.REQUEST, priceSaga);
}

function* watchPriceUpdateSaga() {
  yield takeLatest(types.PRICE_SAVE.REQUEST, priceUpdateSaga);
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
  watchProfileDescriptionUpdateSaga,
  watchGetWorkspacesSaga,
  watchBeautyRoomsSaga,
  watchCityInfoSaga,
  watchWorkspaceAddSaga,
  watchWorkspaceDeleteSaga,
  watchBeautyRoomSendSaga,
  watchWorkplaceUpdateSaga,
  watchPriceSaga,
  watchPriceUpdateSaga,
};
