import {Alert} from 'react-native';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import _ from '../services/i18n';
import {authLogout} from '../actions/user';
import {
  types,
  servicesRequest,
  servicesSuccess,
  servicesFailure,
  servicesCategorySuccess,
  servicesCategoryFailure,
  serviceAddSuccess,
  serviceAddFailure,
  serviceUpdateStatusSuccess,
  serviceUpdateStatusFailure,
  serviceUpdateSuccess,
  serviceUpdateFailure,
  serviceDetailsSuccess,
  serviceDetailsFailure,
} from '@actions/services';
import {api} from '@services/api';
import {
  ENDPOINT_SERVICES,
  ENDPOINT_SERVICES_CATEGORY,
  ENDPOINT_SERVICE_ADD,
  ENDPOINT_SERVICE_DRAFT,
  ENDPOINT_SERVICE_DELETE,
  ENDPOINT_SERVICE_UPDATE,
  ENDPOINT_SERVICE_DETAILS,
} from '@constants/api';
import {getAccessToken} from './selectors';

function* servicesSaga() {
  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_SERVICES, 'GET', {}, token);

  if (response.data.status_code === 200) {
    yield put(servicesSuccess({payload: response.data}));
  } else if (response.status === 401) {
    yield put(servicesFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(servicesFailure({}));
  }
}

function* servicesCategorySaga() {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_SERVICES_CATEGORY,
    'GET',
    {},
    token,
  );

  if (response.data.status_code === 200) {
    yield put(servicesCategorySuccess({payload: response.data}));
  } else if (response.status === 401) {
    yield put(servicesCategoryFailure({}));
    yield put(authLogout());
  } else {
    Alert.alert('', response.data.message);
    yield put(servicesCategoryFailure({}));
  }
}

function* serviceAddSaga(params) {
  const {data, navigation} = params.payload;

  const token = yield select(getAccessToken);
  const response = yield call(api, ENDPOINT_SERVICE_ADD, 'post', data, token);

  if (response.data.status_code === 200) {
    yield put(serviceAddSuccess({payload: response.data}));
    yield put(servicesRequest());
    navigation.goBack();

    Toast.show({
      type: 'success',
      text2: response.data.data.message,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
  } else if (response.status === 401) {
    yield put(serviceAddFailure({}));
    yield put(authLogout());
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.result,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(serviceAddFailure({}));
  }
}

function* serviceUpdateSaga(params) {
  const {data, navigation} = params.payload;

  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_SERVICE_UPDATE,
    'post',
    data,
    token,
  );

  if (response.data.status_code === 200) {
    yield put(servicesRequest());
    yield put(serviceUpdateSuccess({payload: response.data}));
    navigation.goBack();
    Toast.show({
      type: 'success',
      text2: response.data.data.message,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
  } else if (response.status === 401) {
    yield put(serviceUpdateFailure({}));
    yield put(authLogout());
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.result,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(serviceUpdateFailure({}));
  }
}

function* servicesUpdateStatusSaga(params) {
  const {services, operation} = params.payload;
  const token = yield select(getAccessToken);
  const url =
    operation === 'draft' ? ENDPOINT_SERVICE_DRAFT : ENDPOINT_SERVICE_DELETE;

  const response = yield call(api, url, 'POST', {ids: services}, token);

  if (response.data.status_code === 200) {
    yield put(servicesRequest());
    yield put(serviceUpdateStatusSuccess());
    Toast.show({
      type: 'success',
      text2: response.data.data.message,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
  } else if (response.status === 401) {
    yield put(serviceUpdateStatusFailure({}));
    yield put(authLogout());
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.error,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(serviceUpdateStatusFailure({}));
  }
}

function* serviceDetailsSaga(params) {
  const token = yield select(getAccessToken);
  const response = yield call(
    api,
    ENDPOINT_SERVICE_DETAILS,
    'post',
    params.payload,
    token,
  );

  if (response.data.status_code === 200) {
    yield put(serviceDetailsSuccess({payload: response.data}));
  } else if (response.status === 401) {
    yield put(serviceDetailsFailure({}));
    yield put(authLogout());
  } else {
    Toast.show({
      type: 'error',
      text1: _.t('error'),
      text2: response.data.result,
      position: 'bottom',
      autoHide: true,
      visibilityTime: 2000,
    });
    yield put(serviceDetailsFailure({}));
  }
}

export function* watchServices() {
  yield takeLatest(types.SERVICES.REQUEST, servicesSaga);
}

export function* watchServicesCategory() {
  yield takeLatest(types.SERVICES_CATEGORY.REQUEST, servicesCategorySaga);
}

export function* watchServiceAdd() {
  yield takeLatest(types.SERVICES_ADD.REQUEST, serviceAddSaga);
}

export function* watchServiceUpdateStatus() {
  yield takeLatest(
    types.SERVICES_UPDATE_STATUS.REQUEST,
    servicesUpdateStatusSaga,
  );
}

export function* watchServiceUpdate() {
  yield takeLatest(types.SERVICE_UPDATE.REQUEST, serviceUpdateSaga);
}

export function* watchServiceDetails() {
  yield takeLatest(types.SERVICE_DETAILS.REQUEST, serviceDetailsSaga);
}
