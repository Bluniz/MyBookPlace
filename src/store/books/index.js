import {
    GET_BOOKS,
    NOT_FOUND,
    PLUS_INDEX,
    RESET_INDEX,
    MINUS_INDEX,
} from '../../helper/Constants'

const INITIAL_STATE = {
    books: [],
    notFound: null,
    index: 0,
}

export default function reducer(state = INITIAL_STATE, action = null) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.payload.items, notFound: false }

        case NOT_FOUND:
            return { books: [], notFound: action.payload }

        case PLUS_INDEX:
            return { ...state, index: state.index + 11 }

        case MINUS_INDEX: {
            return { ...state, index: state.index - 11 }
        }

        case RESET_INDEX:
            return { ...state, index: 0 }

        default:
            return state
    }
}
