import { createAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { push } from 'redux-first-history';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createAccount, login } from '../../../infra/services/api.service';
import { saveToken } from '../../../infra/services/auth.service';
import { CreateUserRequest } from '../../../shared/requests/create-user.request';
import { AuthResponse } from '../../../shared/responses/auth.response';
import { createAccountSuccess, loginSuccess } from './users.slice';

export const loginSagaAction = createAction<{
  email: string;
  password: string;
}>('@users/login-saga');

export const createAccountSagaAction = createAction<CreateUserRequest>(
  '@users/create-account-saga'
);

function* loginSaga(action: any) {
  try {
    const { email, password } = action.payload;
    const result: AxiosResponse<AuthResponse> = yield call(
      login,
      email,
      password
    );
    if (result.status === 200) {
      saveToken(result.data.token);
      yield put(loginSuccess(result.data));
      yield put(push('/home'));
    }
  } catch (e) {
    console.log('login error');
  }
}

function* createAccountSaga(action: any) {
  try {
    const result: AxiosResponse = yield call(createAccount, action.payload);
    if (result.status === 201) {
      yield put(createAccountSuccess());
      yield put(push('/sign-in'));
    }
  } catch (e) {
    console.log('Error at create account');
  }
}

export default function* usersSaga() {
  yield takeEvery(loginSagaAction.type, loginSaga);
  yield takeEvery(createAccountSagaAction.type, createAccountSaga);
}
