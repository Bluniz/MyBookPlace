import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import books from './books';
import book from './book';
import loading from './loading'

//! Combina todas as stores
const reducer = combineReducers({
  books,
  book,
  loading,
})



//! Redux possui o mesmo problema do node em lidar com objetos complexos
//! Portantdo é necessário utilizar um middleware para que o redux possa entender
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));