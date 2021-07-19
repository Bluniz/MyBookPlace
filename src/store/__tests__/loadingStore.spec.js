import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import loadingStore from '../loading/index'
import loadingActions from '../../actions/loadingActions'

const setup = (state) => {
    jest.clearAllMocks()

    const defaultState = {
        searchList: false,
        bookDetail: false,
    }
    const initialState = state || defaultState

    const store = createStore(
        combineReducers({ loading: loadingStore }),
        { loading: initialState },
        applyMiddleware(thunk)
    )

    return {
        store,
        initialState,
    }
}

describe('Loading store', () => {
    it('should correct initial state', () => {
        const { store, initialState } = setup()

        expect(store.getState().loading).toEqual(initialState)
    })

    it('should start loading in one page', () => {
        const { store } = setup()

        store.dispatch(loadingActions.startLoading('searchList'))

        const actualStore = store.getState()

        expect(actualStore.loading.searchList).toBe(true)
    })

    it('should finish loading in one page', () => {
        const state = {
            searchList: true,
            bookDetail: false,
        }

        const { store } = setup(state)

        store.dispatch(loadingActions.finishLoading('searchList'))

        const actualStore = store.getState()

        expect(actualStore.loading.searchList).toBe(false)
    })
})
