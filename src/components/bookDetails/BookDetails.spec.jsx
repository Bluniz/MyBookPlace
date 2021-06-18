import React from 'react'
import { screen } from '@testing-library/react'
import { rendersWithRouter } from '../../utils/utils'

import BookDetails from '.'

const mockedBookDetail = {
    image: '',
    subtitle: 'My Subtitle',
    title: 'My Title',
    publisher: 'Fulano',
    publishedDate: '21 de setembro de 2000',
    authors: ['fulano1', 'fulano2'],
    pageCount: 0,
    description: 'lorem ipmsum',
    rating: 5.5,
    googleLink: 'https://twitter.com/home',
}

const mockedBookDetailWithIncompleteValues = {
    image: '',
    subtitle: 'My Subtitle',
    title: 'My Title',
    publisher: null,
    publishedDate: null,
    authors: ['fulano1', 'fulano2'],
    pageCount: 0,
    description: 'lorem ipmsum',
    rating: null,
    googleLink: 'https://twitter.com/home',
}

describe('BookDetails Component', () => {
    it('renders correctly', () => {
        rendersWithRouter(
            <BookDetails
                image={mockedBookDetail.image}
                subtitle={mockedBookDetail.subtitle}
                title={mockedBookDetail.title}
                publisher={mockedBookDetail.publisher}
                publishedDate={mockedBookDetail.publishedDate}
                authors={mockedBookDetail.authors}
                pageCount={mockedBookDetail.pageCount}
                description={mockedBookDetail.description}
                rating={mockedBookDetail.rating}
                googleLink={mockedBookDetail.googleLink}
            />
        )

        expect(screen.getByText(/My Subtitle/i)).toBeInTheDocument()
        expect(screen.getByText(/My Title/i)).toBeInTheDocument()
        expect(screen.getByText(/21 de setembro de 2000/i)).toBeInTheDocument()
        expect(screen.getByText(/lorem ipmsum/i)).toBeInTheDocument()
        expect(screen.getByText(/fulano1/i)).toBeInTheDocument()
        expect(screen.getByText(/fulano2/i)).toBeInTheDocument()
    })

    it('renders with incompleted values', () => {
        rendersWithRouter(
            <BookDetails
                image={mockedBookDetailWithIncompleteValues.image}
                subtitle={mockedBookDetailWithIncompleteValues.subtitle}
                title={mockedBookDetailWithIncompleteValues.title}
                publisher={mockedBookDetailWithIncompleteValues.publisher}
                publishedDate={
                    mockedBookDetailWithIncompleteValues.publishedDate
                }
                authors={mockedBookDetailWithIncompleteValues.authors}
                pageCount={mockedBookDetailWithIncompleteValues.pageCount}
                description={mockedBookDetailWithIncompleteValues.description}
                rating={mockedBookDetailWithIncompleteValues.rating}
                googleLink={mockedBookDetailWithIncompleteValues.googleLink}
            />
        )

        expect(screen.getByText(/My Subtitle/i)).toBeInTheDocument()
        expect(screen.getByText(/My Title/i)).toBeInTheDocument()
        expect(screen.getByText(/lorem ipmsum/i)).toBeInTheDocument()
        expect(screen.getByText(/fulano1/i)).toBeInTheDocument()
        expect(screen.getByText(/fulano2/i)).toBeInTheDocument()
    })
})
