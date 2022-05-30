import { all } from 'redux-saga/effects';
import propertiesSaga from './properties/properties.saga';
import usersSaga from './users/users.saga';

export default function* rootSaga() {
  yield all([usersSaga(), propertiesSaga()]);
}
