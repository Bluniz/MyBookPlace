import { bookBuilder } from './book-builder'

export const bookStateBuilder = (props = {}) => {
    const defaultBooks = [
        bookBuilder(),
        bookBuilder('React'),
        bookBuilder('test'),
    ]

    return {
        books: defaultBooks,
        notFound: false,
    }
}
