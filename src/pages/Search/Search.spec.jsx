import React from 'react'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { render, screen, fireEvent } from '@testing-library/react'
import thunk from 'redux-thunk'
import booksStore from '../../store/books/index'
import loadingStore from '../../store/loading/index'
import booksActions from '../../actions/booksActions'
import { Provider } from 'react-redux'
import { bookStateBuilder } from '../../__mocks__/booksStateBuilder'
import { rendersWithRouter } from '../../utils/utils'

import Search from '.'
import loadingActions from '../../actions/loadingActions'

import axiosMock from '../../__mocks__/axios-mock'
import { TextFieldsTwoTone } from '@material-ui/icons'

const setup = (
    props = {
        initial: false,
        notFound: false,
    }
) => {
    jest.clearAllMocks()

    const loadingState = {
        searchList: false,
        bookDetail: false,
    }

    const nullState = {
        books: [],
        notFound: null,
    }

    const defaultState = bookStateBuilder(props.notFound)

    const initialState = props.initial ? defaultState : nullState

    const books = booksStore
    const loading = loadingStore

    const reducer = combineReducers({
        books,
        loading,
    })

    const store = createStore(
        reducer,
        {
            books: initialState,
            loading: loadingState,
        },
        applyMiddleware(thunk)
    )

    return {
        store,
        initialState,
    }
}

describe('Search page', () => {
    it('renders correctly', () => {
        const { store } = setup()

        render(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        expect(
            screen.getByText(
                'Bem vindo, utilize a barra de pesquisa acima para pesquisar algum livro!'
            )
        ).toBeInTheDocument()
    })

    it('renders correctly when books state is not null', () => {
        const { store, initialState } = setup({ initial: true })

        rendersWithRouter(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        const state = bookStateBuilder()

        store.dispatch(booksActions.getBooks({ items: state.books }))

        expect(screen.findAllByText('React').length).not.toBeNull()
    })

    it('renders correctly when notFound is true', () => {
        const { store, initialState } = setup({ initial: true, notFound: true })
        rendersWithRouter(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        const state = bookStateBuilder()

        store.dispatch(booksActions.getBooks({ items: state.books }))
        store.dispatch(loadingActions.startLoading('searchList'))
        store.dispatch(booksActions.notFoundBooks(true))
        store.dispatch(loadingActions.finishLoading('searchList'))

        expect(screen.getByText('Dados não encontrados :/'))
    })
    it('renders correctly when prevPage and nexPage is clicked', async () => {
        const { store } = setup({ initial: true })
        rendersWithRouter(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        const state = bookStateBuilder()
        store.dispatch(booksActions.getBooks({ items: state.books }))

        const input = screen.getByPlaceholderText('Pesquise aqui um livro')
        const button = screen.getByTestId('icon-button')
        fireEvent.change(input, {
            target: { value: 'Javascript' },
        })

        fireEvent.click(button)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })

        store.dispatch(
            booksActions.getBooks({ items: bookStateBuilder().books })
        )
        store.dispatch(loadingActions.finishLoading('searchList'))

        const nextPageBtn = screen.getByTestId('next')

        fireEvent.click(nextPageBtn)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })

        const prevPageBtn = screen.getByTestId('prev')
        fireEvent.click(prevPageBtn)
        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })

        expect(input.value).toBe('Javascript')
    })
    it('renders correctly when orderTerm is changed', async () => {
        const { store } = setup({ initial: true })
        const { debug } = rendersWithRouter(
            <Provider store={store}>
                <Search />
            </Provider>
        )

        const input = screen.getByPlaceholderText('Pesquise aqui um livro')
        const button = screen.getByTestId('icon-button')
        fireEvent.change(input, {
            target: { value: 'Javascript' },
        })

        fireEvent.click(button)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })

        store.dispatch(
            booksActions.getBooks({ items: bookStateBuilder().books })
        )
        store.dispatch(loadingActions.finishLoading('searchList'))

        const newestBtn = screen.getByText('Mais novo')
        const relevancyBtn = screen.getByText('Relevância')

        fireEvent.click(newestBtn)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })
        store.dispatch(
            booksActions.getBooks({ items: bookStateBuilder().books })
        )
        store.dispatch(loadingActions.finishLoading('searchList'))

        fireEvent.click(relevancyBtn)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })
        store.dispatch(
            booksActions.getBooks({ items: bookStateBuilder().books })
        )
        store.dispatch(loadingActions.finishLoading('searchList'))

        fireEvent.click(relevancyBtn)

        await axiosMock.get.mockResolvedValueOnce({
            data: {
                totalItems: 10,
                items: bookStateBuilder().books,
            },
        })
        store.dispatch(
            booksActions.getBooks({ items: bookStateBuilder().books })
        )
        store.dispatch(loadingActions.finishLoading('searchList'))

        expect(screen.getByText('Mais novo')).toBeInTheDocument()
        expect(screen.getByText('Relevância')).toBeInTheDocument()
    })
})
