import {all} from 'redux-saga/effects';

import {
    watchAuthSaga,
} from './user';

export default function* rootSaga() {
    yield all([
        // user
        watchAuthSaga(),
    ]);
}
