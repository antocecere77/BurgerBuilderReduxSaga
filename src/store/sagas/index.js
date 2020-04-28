import { takeEvery } from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
}