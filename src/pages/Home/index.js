import React from 'react';
import SearchBar from '../../components/SearchBar/index.jsx';
import BookCard from '../../components/BookCard/index.jsx';
import {useSelector} from 'react-redux';
import noImage from '../../assets/no-image.jpg';
import Container from '@material-ui/core/Container';

const Home = () => {

  const {books,notFound} = useSelector(state => state.books);

 console.log(notFound);
 console.log(books);

  return(
    <>
    <SearchBar />
    {/* Pode ser um modal */}
    {notFound && (
      <h1>Não foi possivel encontrar seus dados</h1>
    )}

     <Container maxWidth="lg" style={{width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}} >
    {books?.map(book=>{
      console.log(book.volumeInfo.authors);
      return(
          <BookCard 
            key={book.id}
            title={book.volumeInfo.title}
            image={book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : noImage}
            />
      )
    })}
</Container>
     
    </>
  )
}




export default Home;