import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import booksStore from '../books/index'
import { bookBuilder } from '../../__mocks__/books-builder'
import { bookStateBuilder } from '../../__mocks__/booksStateBuilder'
import booksActions from '../../actions/booksActions'

const setup = (state) => {
    jest.clearAllMocks()

    const defaultState = bookStateBuilder()
    const initialState = state || defaultState

    const store = createStore(
        combineReducers({
            books: booksStore,
        }),
        {
            books: initialState,
        },
        applyMiddleware(thunk)
    )

    return {
        store,
        initialState,
    }
}

describe('Book Store', () => {
    it('have correct initial state ', () => {
        const { store, initialState } = setup()

        expect(store.getState()).toEqual({ books: initialState })
    })

    it('should state correctly when get new books', () => {
        const { store } = setup()

        const newBooks = {
            items: [bookBuilder('Teste'), bookBuilder('Rest')],
        }

        store.dispatch(booksActions.getBooks(newBooks))

        const actualStore = store.getState()

        expect(actualStore).toEqual({
            books: {
                books: [...newBooks.items],
                notFound: false,
            },
        })
    })

    it('should not found books', () => {
        const { store } = setup()

        store.dispatch(booksActions.notFoundBooks(true))
        const actualStore = store.getState()

        expect(actualStore.books.notFound).toBe(true)
    })

    it('should reset books', () => {
        const { store } = setup()

        store.dispatch(booksActions.resetBooks())

        const actualStore = store.getState()

        expect(actualStore.books.books.length).toBe(0)
    })
})
