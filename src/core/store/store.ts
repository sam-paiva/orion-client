import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';
import createSagaMiddleware from 'redux-saga';
import propertiesReducer from './properties/properties.slice';
import rootSaga from './root.saga';
import usersReducer from './users/users.slice';

const sagaMiddleware = createSagaMiddleware();
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
  user: usersReducer,
  properties: propertiesReducer,
  router: routerReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares, routerMiddleware))
);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const history = createReduxHistory(store);
export default store;
