import {applyMiddleware, combineReducers, createStore} from 'redux'
import booksReducer from './books-reducer'


let rootReducer = combineReducers({
    booksPage: booksReducer
})



let store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

window.store = store
export default store
