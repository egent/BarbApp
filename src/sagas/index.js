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
    watchGetCodeSaga,
    watchPasswordResetSaga,
    watchDialogDeleteSaga,
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
        watchGetCodeSaga(),
        watchPasswordResetSaga(),
        watchDialogDeleteSaga()
    ]);
}
