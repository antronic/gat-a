import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import app, { appWatcherSaga } from './app'

const saga = createSagaMiddleware();


const composeEnhancers = typeof window === 'object'
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
  : compose;

export const reducers = combineReducers({app});
const store = createStore(reducers, composeEnhancers(applyMiddleware(saga)));


export default store;
