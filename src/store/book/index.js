import {GET_BOOK} from '../../helper/Constants';


const INITIAL_STATE={
  book: {
    title: '',
    authors:[],
    averageRating: 0,
    categories: [],
    description: '',
    imageLinks: {},
    language: '',
    infoLink: '',
    publishedDate: '',
    publisher: '',
    pageCount: 0,
  }
};


export default function reducer(state = INITIAL_STATE, action =null){
 switch(action.type){

  case GET_BOOK:
    return {book: action.payload}

    default:
      return state;
 }
}
