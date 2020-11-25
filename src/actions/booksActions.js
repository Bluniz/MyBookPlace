import {
    GET_BOOKS,
    NOT_FOUND,
    PLUS_INDEX,
    RESET_INDEX,
    MINUS_INDEX,
} from '../helper/Constants'

export const getBooks = (payload) => (dispatch) => {
    return dispatch({
        type: GET_BOOKS,
        payload
    })
}

export const notFoundBooks = (payload) => (dispatch) => {
    return dispatch({
        type: NOT_FOUND,
        payload,
    })
}
//Apagar
export const plusIndex = () => (dispatch) => {
    return dispatch({
        type: PLUS_INDEX,
        payload: null,
    })
}
//Apagar

export const minusIndex = () => (dispatch) => {
    return dispatch({
        type: MINUS_INDEX,
        payload: null,
    })
}
//Apagar

export const resetIndex = () => (dispatch) => {
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
    resetIndex,
}
