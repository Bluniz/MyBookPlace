import api from './api';
import bookActions from '../actions/booksActions';
import bookAction from '../actions/bookActions';
import loadingActions from '../actions/loadingActions';

//&langRestrict=pt
export function getBooks(term, dispatch, index) {
  dispatch(loadingActions.startLoading('searchList'));
  return api.get(`/volumes?q=${term}&maxResults=10&startIndex=${index}`).then(response=>{
    if (response === undefined || response.data.totalItems === 0) {
      dispatch(bookActions.notFoundBooks(true))
          dispatch(loadingActions.finishLoading('searchList'));
    } else {
      dispatch(bookActions.getBooks(response.data))
          dispatch(loadingActions.finishLoading('searchList'));

    }
    
  }).catch(error=> console.log(error))
};


export function getBook(id, dispatch) {
        dispatch(loadingActions.startLoading('bookDetail'))
  return api.get(`/volumes/${id}?projection=full`).then(response=>{
    if (response) {
       dispatch(bookAction.getBook(response.data.volumeInfo))
       dispatch(loadingActions.finishLoading('bookDetail'));
    }
  }).catch(error => console.log(error))
}