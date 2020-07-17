import {all} from 'redux-saga/effects';

import {
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
} from './user';

export default function* rootSaga() {
    yield all([
        // user
        watchAuthSaga(),
        watchUserInfoSaga(),
        watchUserInfoFullSaga(),
        watchUserInfoFullUpdateSaga(),
        watchSendEmailSaga(),
        watchUploadPhotoSaga(),
        watchDialogsSaga(),
        watchDialogSaga(),
        watchMessageSendSaga(),
        watchSaveTokenSaga(),
        watchRegisterInfoSaga(),
        watchRegisterSaga(),
        watchCheckCodeSaga(),
    ]);
}
