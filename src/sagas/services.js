import {Alert} from 'react-native';
import {put, takeLatest, call, select} from 'redux-saga/effects';
import Toast from 'react-native-toast-message';
import _ from '../services/i18n';
import {authLogout} from '../actions/user';
import {
  types,
  servicesSuccess,
  servicesFailure,
  servicesCategorySuccess,
  servicesCategoryFailure,
} from '@actions/services';
import {api} from '@services/api';
import {ENDPOINT_SERVICES, ENDPOINT_SERVICES_CATEGORY} from '@constants/api';
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

export function* watchServices() {
  yield takeLatest(types.SERVICES.REQUEST, servicesSaga);
}

export function* watchServicesCategory() {
  yield takeLatest(types.SERVICES_CATEGORY.REQUEST, servicesCategorySaga);
}
