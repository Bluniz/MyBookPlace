import { GET_BOOKS, NOT_FOUND, RESET_BOOKS } from '../../helper/Constants'

const INITIAL_STATE = {
    books: [],
    notFound: null,
}

export default function reducer(state = INITIAL_STATE, action = null) {
    switch (action.type) {
        case GET_BOOKS:
            return { ...state, books: action.payload.items, notFound: false }

        case NOT_FOUND:
            return { books: [], notFound: action.payload }

        case RESET_BOOKS:
            return { books: [] }

        default:
            return state
    }
}
