import React, { memo } from 'react'
import BookCard from '../BookCard/index.jsx'
import noImage from '../../assets/no-image.jpg'

const BookListComponent = ({ books }) => {
    return (
        <>
            {books.map((book) => {
                return (
                    <BookCard
                        key={`${book.id} ${book.etag}`}
                        title={book.volumeInfo.title}
                        image={
                            book.volumeInfo.imageLinks
                                ? book.volumeInfo.imageLinks.thumbnail
                                : noImage
                        }
                        bookId={book.id}
                        subtitle={book.volumeInfo.subtitle}
                        rating={book.volumeInfo?.averageRating}
                    />
                )
            })}
        </>
    )
}

//! Apenas re-renderiza se os livros mudarem
const BookList = memo(BookListComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.books, nextProps.books)
})

export default BookList
