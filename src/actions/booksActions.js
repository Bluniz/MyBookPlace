import {GET_BOOKS, NOT_FOUND, PLUS_INDEX, RESET_INDEX, MINUS_INDEX} from '../helper/Constants';


export const getBooks = books => dispatch  => {
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

export const plusIndex = () => dispatch => {
  return dispatch({
    type: PLUS_INDEX,
    payload: null,
  })
}

export const minusIndex = () => dispatch => {
  return dispatch({
    type: MINUS_INDEX,
    payload: null,
  })
}

export const resetIndex = () => dispatch => {
  return dispatch({
    type: RESET_INDEX,
    payload: null,
  })
}


export default {
  getBooks,
  notFoundBooks,
  plusIndex,
  minusIndex,
  resetIndex
}