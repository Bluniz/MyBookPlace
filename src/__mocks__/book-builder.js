export const bookBuilder = (title = 'JavaScript Remoto') => {
    return {
        items: [
            {
                acessInfo: {
                    country: 'BR',
                    viewability: 'PARTIAL',
                    embeddable: true,
                    epub: {
                        isAvailable: false,
                    },
                    pdf: {
                        isAvailable: false,
                    },
                    publicDoimain: false,
                    quoteSharingAllowed: false,
                    textToSpeechPermission: 'ALLOWED',
                    webReaderLink:
                        'http://play.google.com/books/reader?id=Zi9lDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api',
                },
                etag: 'rDdyEc/9lyk',
                id: 'Zi9lDQAAQBAJ',
                kind: 'books#volume',
                salesInfo: {
                    country: 'BR',
                    isEbook: false,
                    saleability: 'NOT_FOR_SALE',
                },
                searchInfo: {
                    textSnippet:
                        'JavaScript Remoto descreve os detalhes da construção de aplicativos JavaScript remotos completos.',
                },
                selfLink:
                    'https://www.googleapis.com/books/v1/volumes/Zi9lDQAAQBAJ',
                volumeInfo: {
                    allowAnonLogging: false,
                    authors: ['Ben vinegar', 'Anton Kovalyov'],
                    canonicalVolumeLink:
                        'https://books.google.com/books/about/JavaScript_Remoto.html?hl=&id=Zi9lDQAAQBAJ',
                    categories: ['Computers'],
                    contentVersion: '0.1.0.0.preview.1',
                    description:
                        'Há um pouco de arte na criação de JavaScript remoto – scripts incorporáveis e que podem ser conectados a qualquer website. Devem ser...',
                    imageLinks: {
                        smallThumbnail:
                            'http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
                        thumbnail:
                            'http://books.google.com/books/content?id=Zi9lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
                    },
                    industryIndentifiers: [
                        { identifier: '9788575223727', type: 'ISBN_13' },
                        {
                            identifier: '8575223720',
                            type: 'ISBN_10',
                        },
                    ],
                    infoLink:
                        'http://books.google.com.br/books?id=Zi9lDQAAQBAJ&dq=Javascript&hl=&source=gbs_api',
                    language: 'un',
                    maturityRating: 'NOT_MATURE',
                    pageCount: 384,
                    panelizationSummary: {
                        containsEpubBubbles: false,
                        containsImageBubbles: false,
                    },
                    previewLink:
                        'http://books.google.com.br/books?id=Zi9lDQAAQBAJ&printsec=frontcover&dq=Javascript&hl=&cd=1&source=gbs_api',
                    printType: 'BOOK',
                    publishedDate: '2013-08-02',
                    publisher: 'Novatec Editora',
                    readingModes: {
                        image: true,
                        text: false,
                    },
                    subtitle: '',
                    title: title,
                },
            },
        ],
        kind: 'books#volumes',
        totalItems: 10,
    }
}
