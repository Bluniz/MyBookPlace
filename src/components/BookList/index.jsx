import React from 'react'
import BookCard from '../BookCard/index.jsx'
import noImage from '../../assets/no-image.jpg'

const BookList = ({ books }) => {
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

export default BookList
