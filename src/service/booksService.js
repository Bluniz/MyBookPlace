import api from './api';
import bookActions from '../actions/bookActions';

export function getBooks(term, dispatch, index){
  return api.get(`/volumes?q=${term}&startIndex=${index}&langRestrict=Portugues`).then(response=>{
    console.log(response)
    if(response === undefined || response.data.totalItems === 0){
      dispatch(bookActions.notFoundBooks(true))
    } else {
      dispatch(bookActions.getBooks(response.data.items))

    }
    
     
  })
};


export function getBook(id){

  return api.get(`/volumes/${id}`)
}