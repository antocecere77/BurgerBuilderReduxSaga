import { takeEvery } from 'redux-saga/effects';

import * as actionType from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';

export function* watchAuth() {
    yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionType.AUTH_USER, authUserSaga);
    yield takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga); 
}

export function* watchBurgerBuilder() {
    yield takeEvery(actionType.INIT_INGREDIENTS, initIngredientsSaga);
}