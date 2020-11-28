import { GET_BOOKS, NOT_FOUND, RESET_BOOKS } from '../helper/Constants'

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

export const resetBooks = () => (dispatch) => {
    return dispatch({
        type: RESET_BOOKS,
        payload: null,
    })
}
export default {
    getBooks,
    notFoundBooks,
    resetBooks,
}
