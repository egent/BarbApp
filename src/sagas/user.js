import {Alert} from 'react-native';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import {
    types,
    authSuccess,
    authFailure,
} from '../actions/user';
import {
    getClientId,
    getClientSecret,
    getGrantType,
} from './selectors'
// import {
//     getAccessToken,
//     getUserId,
// } from './selectors';
import { api } from '../services/api';
import {
    ENDPOINT_AUTH
} from "../constants/api";




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
        yield put(authSuccess({
            phone,
            password,
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
        }));
    } else {
        Alert.alert('', response.data.message);
        yield put(authFailure({}));
    }
}

function* watchAuthSaga() {
    yield takeLatest(types.AUTH.REQUEST, authSaga);
}

export {
    watchAuthSaga,
};
