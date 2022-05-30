import { createAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { push } from 'redux-first-history';
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  createImmobile,
  getProperties,
} from '../../../infra/services/api.service';
import { CreateImmobileRequest } from '../../../shared/requests/create-immobile.request';
import { Immobile } from '../../entities/immobile';
import {
  createPropertySuccess,
  fetchPropertiesFailed,
  fetchPropertiesSuccess,
} from './properties.slice';

export const fetchPropertiesSagaAction = createAction(
  '@properties/fetch-properties-saga'
);

export const createImmobileSagaAction = createAction<CreateImmobileRequest>(
  '@properties/create-immobile-saga'
);

function* fetchPropertiesSaga() {
  try {
    const result: AxiosResponse<Immobile[]> = yield call(getProperties);
    if (result.status === 200) {
      console.log(result.data);
      yield put(fetchPropertiesSuccess(result.data));
    }
  } catch (e) {
    yield put(fetchPropertiesFailed());
  }
}

function* createImmobileSaga(action: any) {
  try {
    const result: AxiosResponse<Immobile> = yield call(
      createImmobile,
      action.payload
    );
    if (result.status === 201) {
      console.log(result.data);
      toast.success('Sucesso no anúncio');
      yield put(createPropertySuccess(result.data));
      yield put(push('/home'));
    }
  } catch (e) {
    console.log(e);
    //yield put(fetchPropertiesFailed());
  }
}

export default function* propertiesSaga() {
  yield takeEvery(fetchPropertiesSagaAction.type, fetchPropertiesSaga);
  yield takeEvery(createImmobileSagaAction.type, createImmobileSaga);
}
