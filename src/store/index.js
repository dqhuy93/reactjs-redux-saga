import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
