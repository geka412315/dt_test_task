import { all } from 'redux-saga/effects';

import userDataSagas from './UserData/sagas';

function* rootSaga() {
  yield all([...userDataSagas]);
}

export default rootSaga;
