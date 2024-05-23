import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'
import { productreducer } from './reducers/reducerProduct';
import { reduceruser } from './reducers/reducer';
import { error_reducer } from './reducers/errorReducer';

const rootreducer=combineReducers({
  allproducts:productreducer,
  users:reduceruser,
  errors:error_reducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));