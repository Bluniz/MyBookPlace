import { GET_BOOKS, NOT_FOUND } from '../helper/Constants'

export const getBooks = (payload) => (dispatch) => {
    return dispatch({
        type: GET_BOOKS,
        payload,
    })
}

export const notFoundBooks = (payload) => (dispatch) => {
    return dispatch({
        type: NOT_FOUND,
        payload,
    })
}

export default {
    getBooks,
    notFoundBooks,
}
