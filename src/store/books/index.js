import {GET_BOOKS, NOT_FOUND} from '../../helper/Constants';


const INITIAL_STATE = {
  books: [],
  notFound: null,
}



//! A função deve ter o nome reducer()
//! Esta função deve receber por padrão um state e um action
//! Para não quebrar o reducer, state = []

export default function reducer(state = INITIAL_STATE, action = null){
  switch(action.type){

    case GET_BOOKS:
      return {...state, books:action.payload.items, notFound: false}

      
    case NOT_FOUND:
      return {books: [], notFound: action.payload}

    default:
      return state;
  }

}