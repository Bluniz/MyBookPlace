import api from './api'
import bookActions from '../actions/booksActions'
import bookAction from '../actions/bookActions'
import loadingActions from '../actions/loadingActions'

//&langRestrict=pt
export function getBooks(term, dispatch, index, order) {
    dispatch(loadingActions.startLoading('searchList'))
    return api
        .get(`/volumes?q=${term}&maxResults=10&startIndex=${index}${order}`)
        .then((response) => {
            if (response === undefined || response.data.totalItems === 0) {
                dispatch(bookActions.notFoundBooks(true))
            } else {
                dispatch(bookActions.getBooks(response.data))
                console.log(response.data)
            }
        })
        .catch((error) => console.log(error))
        .finally(() => {
            dispatch(loadingActions.finishLoading('searchList'))
        })
}

export function getBook(id, dispatch) {
    dispatch(loadingActions.startLoading('bookDetail'))
    return api
        .get(`/volumes/${id}?projection=full`)
        .then((response) => {
            if (response) {
                dispatch(bookAction.getBook(response.data.volumeInfo))
            }
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(loadingActions.finishLoading('bookDetail')))
}
