import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Alert from '@material-ui/lab/Alert'
import { Box } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import SearchBar from '../../components/SearchBar/index.jsx'
import useStyles from './style'
import FloatButton from '../../components/FloatButton/index.jsx'
import { getBooks } from '../../service/booksService'
import booksActions from '../../actions/booksActions'
import Spinner from '../../components/Spinner/index.jsx'
import BookList from '../../components/BookList/index.jsx'

const SearchPage = () => {
    const classes = useStyles()
    const { books, notFound } = useSelector((state) => state.books)
    const { searchList } = useSelector((state) => state.loading)

    const [term, setTerm] = useState('')
    const [index, setIndex] = useState(0)
    const [orderTerm, setOrderTerm] = React.useState('')
    const dispatch = useDispatch()

    function nextPage() {
        setIndex(index + 11)
    }

    function prevPage() {
        setIndex(index - 11)
    }

    function handleChangeOrderTerm(event, newFilterName) {
        setOrderTerm(newFilterName ? newFilterName : '')
    }

    function handleGetBooks() {
        setIndex(0)
        getBooks(term, dispatch, index, orderTerm)
    }

    useEffect(() => {
        if (term !== '') {
            getBooks(term, dispatch, index, orderTerm ? orderTerm : '')
        } else {
            dispatch(booksActions.resetBooks())
        }
    }, [index, orderTerm])

    return (
        <Box className={classes.root}>
            <SearchBar
                setTerm={setTerm}
                handleSearch={handleGetBooks}
                orderTerm={orderTerm}
                handleChangeOrder={handleChangeOrderTerm}
            />

            {index > 0 && books.length > 0 && (
                <FloatButton onClick={prevPage} position="prev">
                    <NavigateBeforeIcon />
                </FloatButton>
            )}
            {index <= 200 && books.length > 0 && (
                <FloatButton onClick={nextPage} position="next">
                    <NavigateNextIcon />
                </FloatButton>
            )}

            <div className={classes.bookList}>
                {searchList ? <Spinner /> : <BookList books={books} />}

                {notFound && !searchList && (
                    <Alert severity="error" className={classes.alert}>
                        Dados não encontrados :/
                    </Alert>
                )}

                {books.length === 0 && !searchList && !notFound && (
                    <Alert severity="info" className={classes.alert}>
                        Bem vindo, utilize a barra de pesquisa acima para
                        pesquisar algum livro!
                    </Alert>
                )}
            </div>
        </Box>
    )
}

export default SearchPage
