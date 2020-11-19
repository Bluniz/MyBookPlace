import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import books from './books';

//! Combina todas as stores
const reducer = combineReducers({
  books
})



//! Redux possui o mesmo problema do node em lidar com objetos complexos
//! Portantdo é necessário utilizar um middleware para que o redux possa entender
export default createStore(reducer, applyMiddleware(thunk));