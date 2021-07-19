export const bookBuilder = (title = 'Javascript') => {
    return {
        title: title,
        authors: ['autor1', 'autor2'],
        averageRating: 0,
        categories: ['computing'],
        description: 'teste',
        imageLinks: {
            thumbnail: '',
        },
        language: 'portuguese',
        infoLink: 'test',
        publishedDate: '2013-08-02',
        publisher: 'Novatec Editora',
        pageCount: 0,
    }
}
