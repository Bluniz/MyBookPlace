import React, {useEffect} from 'react';
import {getBook} from '../../service/booksService';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Box} from '@material-ui/core';
import {formatDate} from '../../utils/utils';
import noImage from '../../assets/no-image.jpg'
import BookDetails from '../../components/bookDetails/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';
import Header from '../../components/Header/index.jsx'
const BookDetailPage = () => {

  const classes = useStyles()
  const {id} = useParams();
  const { book } = useSelector(state => state.book);
  const { bookDetail } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  
  console.log(bookDetail);
  useEffect(() => {
    getBook(id, dispatch);
  }, [id])
  
  // TODO REMOVER STYLE FIXO DA DIV DO SPINNER
  return (
    <div className={classes.dontOverflow}>
     <Header/>
    <Box className={classes.root}>
      <Container maxWidth="lg">
      {bookDetail
        ? (<div style={{width: '100vw', heigth: '100vh',  display: 'flex',justifyContent: 'center', marginTop: '20%'}}><CircularProgress /></div>  )
          : (
        <BookDetails
        title={book.title}
        subtitle={book?.subtitle}
        image={book.imageLinks ? book.imageLinks.thumbnail : noImage}
        authors={book.authors}
        publisher={book?.publisher}
        publishedDate={book.publishedDate? formatDate(book.publishedDate): '' }
        pageCount={book.printedPageCount}
        description={book.description? book.description : 'Este livro não possui descrição'}
      />
            
            
            )
        }
          </Container>
      </Box>
      </div>
  )
}




export default BookDetailPage;