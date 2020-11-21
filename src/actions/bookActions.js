import {GET_BOOK} from '../helper/Constants';


export const getBook = book => dispatch =>{
  return dispatch({
    type: GET_BOOK,
    payload: book,
  });
}




export default {
  getBook
}