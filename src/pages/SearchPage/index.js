import React from 'react';
import BookCard from '../../components/BookCard/index.jsx';
import {useSelector, useDispatch} from 'react-redux';
import noImage from '../../assets/no-image.jpg';
import Alert from '@material-ui/lab/Alert';
import {CircularProgress, Box} from '@material-ui/core';
import Header from '../../components/Header/index.jsx';
import useStyles from './style';
import booksActions from '../../actions/booksActions';
import FloatButton from '../../components/FloatButton/index.jsx';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
const SearchPage = () => {
  const classes = useStyles();
  const {books,notFound, index} = useSelector(state => state.books);
  const { searchList } = useSelector(state => state.loading);

  const dispatch = useDispatch();

  function nextPage() {
    dispatch(booksActions.plusIndex());
  }

  function prevPage() {
        dispatch(booksActions.minusIndex());
  }

  return(
    <Box className={classes.root}>
        <Header />
         <div className={classes.bookList}>
        <div className={classes.floatButtonContainer}>
          {index > 0 && (
            <FloatButton onClick={prevPage} className={classes.floatButtonPrev} >
              <NavigateBeforeIcon />
            </FloatButton>)}
          {index <= 100 && books.length !== 0 && (
            <FloatButton onClick={nextPage} className={classes.floatButtonNext}>
              <NavigateNextIcon />
            </FloatButton>)}
        </div>
        
        {searchList
         ? (<CircularProgress className={classes.spinner}/>)
        : (
          <>
            {books.map(book => {
                return(
                  <BookCard 
                    key={`${book.id} ${book.etag}`}
                    title={book.volumeInfo.title}
                    image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : noImage}
                    bookId={book.id}
                    subtitle={book.volumeInfo.subtitle}
                    rating={book.volumeInfo?.averageRating}
                  />
      )
    })}
            </>
          )}
        
         {notFound && !searchList &&(
      <Alert severity="error" className={classes.alert}>Dados não encontrados :/</Alert>
    )}

        {books.length === 0 && !searchList && !notFound && (
          <Alert severity="info" className={classes.alert}>Bem vindo, utilize a barra de pesquisa acima para pesquisar algum livro!</Alert>
        )}
       
      </div>
    </Box>
  )
}




export default SearchPage;