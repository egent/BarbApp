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
} from '@actions/services';
import {api} from '@services/api';
import {
  ENDPOINT_SERVICES,
  ENDPOINT_SERVICES_CATEGORY,
  ENDPOINT_SERVICE_ADD,
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

export function* watchServices() {
  yield takeLatest(types.SERVICES.REQUEST, servicesSaga);
}

export function* watchServicesCategory() {
  yield takeLatest(types.SERVICES_CATEGORY.REQUEST, servicesCategorySaga);
}

export function* watchServiceAdd() {
  yield takeLatest(types.SERVICES_ADD.REQUEST, serviceAddSaga);
}
