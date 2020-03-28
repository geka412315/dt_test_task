import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { WithSagaTaskStore } from './types';

import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const bindMiddleware = (middleware: [SagaMiddleware<object>]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}): WithSagaTaskStore {
  const sagaMiddleware = createSagaMiddleware();
  const store: WithSagaTaskStore = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
}

export default configureStore;
