import { bookBuilder } from './books-builder'

export const bookStateBuilder = (notFound = false) => {
    const defaultBooks = [
        bookBuilder('testando', 0),
        bookBuilder('React', 1, true),
        bookBuilder('test', 2),
    ]

    return {
        books: defaultBooks,
        notFound,
    }
}
