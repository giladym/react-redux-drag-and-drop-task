import { compose, applyMiddleware, createStore } from "redux";
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history) {
    let composeEnhancers = compose;
  
    // Create the store with middlewares
    // 1. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [routerMiddleware(history)];
  
    const enhancers = [applyMiddleware(...middlewares)];
  
    const store = createStore(
      createReducer(),
      initialState,
      composeEnhancers(...enhancers),
    );
  
    return store;
  }