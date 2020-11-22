import React from 'react';
import SearchBar from '../../components/SearchBar/index.jsx';
import BookCard from '../../components/BookCard/index.jsx';
import {useSelector} from 'react-redux';
import noImage from '../../assets/no-image.jpg';
import Alert from '@material-ui/lab/Alert';
import {CircularProgress, Box} from '@material-ui/core';
import Header from '../../components/Header/index.jsx';
import useStyles from './style';

const SearchPage = () => {
  const classes = useStyles();
  const {books,notFound} = useSelector(state => state.books);
  const { searchList } = useSelector(state => state.loading);
  

  return(
    <Box className={classes.root}>
        <Header />
      <SearchBar />
                    <div className={classes.bookList}>

        {searchList
        ? (<CircularProgress className={classes.spinner}/>)
          : (
          <>
                {books.map(book => {
                  return(
                     <BookCard 
                       key={book.id}
                       title={book.volumeInfo.title}
                       image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : noImage}
                      bookId={book.id}
                      subtitle={book.volumeInfo?.subtitle}
                      />
      )
    })}

            </>
          )}
        
         {notFound && (
      <Alert severity="error" className={classes.alert}>Dados não encontrados :/</Alert>
    )}

        {books.length === 0 && !searchList && !notFound && (
          <Alert severity="info" className={classes.alert}>Bem vindo :D, utilize a barra acima para pesquisar algum livro!</Alert>
        )}
       
                    </div>

        
   
     
    </Box>
  )
}




export default SearchPage;