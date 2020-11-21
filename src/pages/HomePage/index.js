import React from 'react';
import SearchBar from '../../components/SearchBar/index.jsx';
import BookCard from '../../components/BookCard/index.jsx';
import {useSelector} from 'react-redux';
import noImage from '../../assets/no-image.jpg';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const HomePage = () => {

  const {books,notFound} = useSelector(state => state.books);
  const { searchList } = useSelector(state => state.loading);
  

  return(
    <>
    <SearchBar />
     <Container maxWidth="lg" style={{width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
      
        
        {searchList
          ? (<CircularProgress />)
            : (
              <>
                {books.map(book => {
                  return(
                     <BookCard 
                       key={book.id}
                       title={book.volumeInfo.title}
                       image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : noImage}
                      bookId={book.id}
                      />
      )
    })}

              </>
          )}
       
      
        
    {notFound && (
      <Alert severity="error">Dados não encontrados :/</Alert>
    )}

        {books.length === 0 && !searchList && !notFound && (
          <Alert severity="info">Bem vindo :D, utilize a barra acima para pesquisar algum livro!</Alert>
        )}
</Container>
     
    </>
  )
}




export default HomePage;