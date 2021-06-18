import React from 'react'
import { screen } from '@testing-library/react'
import BookList from '.'
import { rendersWithRouter } from '../../utils/utils'
import { mockedBooks, mockedBooksWithNoImage } from '../../helper/mocks'

jest.mock('../../assets/no-image.jpg')

describe('BookList Component', () => {
    it('renders correctly', () => {
        rendersWithRouter(<BookList books={mockedBooks} />)

        expect(screen.getByText('Meu primeiro titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu primeiro subtitulo')).toBeInTheDocument()
        expect(screen.getByText('Meu segundo titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu segundo subtitulo')).toBeInTheDocument()
        expect(screen.getByText('Meu terceiro titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu terceiro subtitulo')).toBeInTheDocument()
    })

    it('renders noImage when books dont have a image', () => {
        rendersWithRouter(<BookList books={mockedBooksWithNoImage} />)

        expect(screen.getByText('Meu primeiro titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu primeiro subtitulo')).toBeInTheDocument()
        expect(screen.getByText('Meu segundo titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu segundo subtitulo')).toBeInTheDocument()
        expect(screen.getByText('Meu terceiro titulo')).toBeInTheDocument()
        expect(screen.getByText('Meu terceiro subtitulo')).toBeInTheDocument()
    })
})
