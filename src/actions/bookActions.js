import {GET_BOOKS, NOT_FOUND} from '../helper/Constants';


export const getBooks = books => dispatch  => {
 //* Obrigatório ter uma proporiedade type con o valor ADD_BOOK
 //* Payload é mais uma convensão
   
 return dispatch({
   type: GET_BOOKS,
   payload: books,
 })
}

export const notFoundBooks = founded => dispatch => {
  
  return dispatch({
    type: NOT_FOUND,
    payload: founded
  })
}



export default {
  getBooks,
  notFoundBooks
}