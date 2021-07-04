import { combineReducers, createStore } from 'redux';
import booksReducer from './books-reducer';

let rootReducer = combineReducers({
  booksPage: booksReducer,
});

type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>; // The state of the entire application

let store = createStore(
  rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// @ts-ignore
window.store = store;
export default store;
