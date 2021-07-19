import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import bookStore from '../book/index'
import bookActions from '../../actions/bookActions'
import { bookBuilder } from '../../__mocks__/book-builder'

const setup = (state) => {
    jest.clearAllMocks()

    const defaultState = bookBuilder()
    const initialState = state || defaultState

    const store = createStore(
        combineReducers({ book: bookStore }),
        { book: initialState },
        applyMiddleware(thunk)
    )

    return {
        store,
        initialState,
    }
}

describe('Book Store', () => {
    it('should correct initial state', () => {
        const { store, initialState } = setup()

        expect(store.getState()).toEqual({ book: initialState })
    })

    it('should get bookData', () => {
        const { store } = setup()

        const newBook = bookBuilder('Batata')

        store.dispatch(bookActions.getBook(newBook))

        const actualState = store.getState()

        expect(actualState.book.book).toEqual(newBook)
    })
})
