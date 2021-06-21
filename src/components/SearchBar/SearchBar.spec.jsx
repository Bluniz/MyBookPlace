import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import SearchBar from '.'

const mockSetTerm = jest.fn()
const mockHandleSearch = jest.fn()
const mockHandleChangeOrder = jest.fn()
const mockHandleChange = jest.fn()

const mockEvent = {
    target: {
        value: 'batata',
    },
}

describe('Search Bar Component', () => {
    it('renders correctly', () => {
        render(
            <SearchBar
                setTerm={mockSetTerm}
                handleSearch={mockHandleSearch}
                handleChangeOrder={mockHandleChangeOrder}
            />
        )

        expect(screen.getByText('Mais novo')).toBeInTheDocument()
        expect(screen.getByText('Relevância')).toBeInTheDocument()
    })

    it('renders correctly when setTerm, handleSearch and HandleChangeOrder is clicked', () => {
        render(
            <SearchBar
                handleSearch={mockHandleSearch}
                handleChangeOrder={mockHandleChangeOrder}
                handleChange={mockHandleChange}
            />
        )

        const searchInputElement = screen.getByPlaceholderText(
            'Pesquise aqui um livro'
        )

        fireEvent.click(screen.getByTestId('icon-button'))
        fireEvent.change(searchInputElement, mockEvent)
        fireEvent.click(screen.getByText('Mais novo'))

        expect(mockHandleSearch).toBeCalled()
        expect(searchInputElement.value).toBe('batata')
        expect(mockHandleChange).toBeCalled()
        expect(mockHandleChangeOrder).toBeCalled()
    })
})
