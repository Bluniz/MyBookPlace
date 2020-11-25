import { START_LOADING, FINISH_LOADING } from '../helper/Constants'

export const startLoading = (pageName) => (dispatch) => {
    return dispatch({
        type: START_LOADING,
        payload: pageName,
    })
}

export const finishLoading = (pageName) => (dispatch) => {
    return dispatch({
        type: FINISH_LOADING,
        payload: pageName,
    })
}

export default {
    startLoading,
    finishLoading,
}
