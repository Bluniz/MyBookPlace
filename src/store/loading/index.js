import { START_LOADING, FINISH_LOADING } from '../../helper/Constants'

const INITIAL_STATE = {
    searchList: false,
    bookDetail: false,
}

export default function reducer(state = INITIAL_STATE, action = null) {
    switch (action.type) {
        case START_LOADING:
            return { ...state, [action.payload]: true }

        case FINISH_LOADING:
            return { ...state, [action.payload]: false }

        default:
            return state
    }
}
