import {Alert} from 'react-native';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import {
    types,
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
    dialogsFailure,
    dialogRequest,
    dialogSuccess,
    dialogFailure,
    messageSendSuccess,
    messageSendFailure,
    saveTokenSuccess,
    saveTokenFailure,
} from '../actions/user';
import {
    getClientId,
    getClientSecret,
    getGrantType,
    getAccessToken,
} from './selectors';
import { api } from '../services/api';
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


function* userInfoSaga() {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_USER_INFO, 'GET', {}, token);

    if (response.status === 200) {
        const {messages, user} = response.data.data;
        yield put(userInfoSuccess({
           messages,
           user,
        }));
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(userInfoFailure({}));
    }
}

function* userInfoFullSaga() {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_USER_INFO_FULL, 'GET', {}, token);

    if (response.status === 200) {
        const {user} = response.data.data;
        yield put(userInfoFullSuccess({
           user,
        }));
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(userInfoFullFailure({}));
    }
}


function* userInfoFullUpdateSaga(params) {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_USER_INFO_FULL, 'POST', params, token);

    if (response.status === 200) {
        yield put(userInfoFullUpdateSuccess());
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
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
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(sendEmailFailure({}));
    }
}

function* uploadPhotoSaga(params) {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_UPLOAD_PHOTO, 'POST', params, token);

    if (response.status === 200) {
        yield put(uploadPhotoSuccess());
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(uploadPhotoFailure({}));
    }
}

function* dialogsSaga() {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_DIALOGS, 'GET', {}, token);
    if (response.status === 200) {
        yield put(dialogsSuccess({dialogs: response.data.data.dialogs}));
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(dialogsFailure({}));
    }
}


function* dialogSaga(params) {
    const token = yield select(getAccessToken);
    const response = yield call(api, ENDPOINT_DIALOG + params.id, 'GET', {}, token);
    if (response.status === 200) {
        yield put(dialogSuccess({
            dialog: response.data.data.dialog,
            dialog_messages: response.data.data.messages,
        }));
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(dialogFailure({}));
    }
}

function* messageSendSaga(params) {
    const token = yield select(getAccessToken);
    const response = yield call(api, BACKEND_URL + '/api-dialog/'+params.dialog_id+'/send', 'POST', params, token);
    
    if (response.status === 200) {
        yield put(messageSendSuccess());
        yield put(dialogRequest({id: params.dialog_id}));
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(messageSendFailure({}));
    }
}

function* saveTokenSaga(params) {
    const token = yield select(getAccessToken);

    const response = yield call(api, BACKEND_URL + ENDPOINT_SAVE_PUSH_TOKEN, 'POST', params, token);

    if (response.status === 200) {
        yield put(saveTokenSuccess());
    }
    else if (response.status === 401) {
        yield put(authLogout());
    }
    else {
        Alert.alert('', response.data.message);
        yield put(saveTokenFailure({}));
    }
}

function* watchAuthSaga() {
    yield takeLatest(types.AUTH.REQUEST, authSaga);
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
};
