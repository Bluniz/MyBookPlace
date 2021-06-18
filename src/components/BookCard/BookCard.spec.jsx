import React from 'react'
import { screen } from '@testing-library/react'
import BookCard from '.'

import { rendersWithRouter } from '../../utils/utils'

const mockedClasses = {
    root: '',
    container: '',
    image: '',
    subheader: '',
    buttonAndRatingContainer: '',
    button: '',
}

const mockedBook = {
    bookId: 0,
    title: 'Meu Livro',
    subtitle: 'Meu subtitulo',
    rating: 0,
    image:
        'https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    classes: mockedClasses,
}

describe('BookCard Component', () => {
    it('renders correctly', () => {
        rendersWithRouter(
            <BookCard
                bookId={mockedBook.id}
                title={mockedBook.title}
                subtitle={mockedBook.subtitle}
                rating={mockedBook.rating}
                image={mockedBook.image}
                classes={mockedBook.classes}
            />
        )

        expect(screen.getByText('Meu Livro')).toBeInTheDocument()
        expect(screen.getByText('Meu subtitulo')).toBeInTheDocument()
        expect(screen.getByText('Ver mais')).toBeInTheDocument()
    })
})
