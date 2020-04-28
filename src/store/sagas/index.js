import { takeEvery } from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { logoutSaga } from './auth';

export function* watchAuth() {
    yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
}