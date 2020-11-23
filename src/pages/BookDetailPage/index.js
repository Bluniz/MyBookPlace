import React, {useEffect} from 'react';
import {getBook} from '../../service/booksService';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Box, IconButton} from '@material-ui/core';
import {formatDate} from '../../utils/utils';
import noImage from '../../assets/no-image.jpg'
import BookDetails from '../../components/bookDetails/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './style';
import Header from '../../components/Header/index.jsx';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const BookDetailPage = () => {

  const classes = useStyles()
  const {id} = useParams();
  const { book } = useSelector(state => state.book);
  const { bookDetail } = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    getBook(id, dispatch);
  }, [id])

  function handleGoBack() {
    history.goBack();
  }

  
  return (
    <div className={classes.container}>
      <Header/>

    <Box className={classes.root}>
        <Container maxWidth="lg">
          <IconButton className={classes.backButton} onClick={handleGoBack}>
            <ArrowBackIcon/>
          </IconButton>
      {bookDetail
            ? (<div className={classes.spinnerContainer}><CircularProgress className={classes.spinner}/></div>  )
          : (
        <BookDetails
        title={book.title}
        subtitle={book?.subtitle}
        image={book.imageLinks ? book.imageLinks.thumbnail : noImage}
        authors={book.authors}
        publisher={book?.publisher}
        publishedDate={book.publishedDate? formatDate(book.publishedDate): '' }
        pageCount={book.printedPageCount}
        description={book.description ? book.description : 'Este livro não possui descrição'}
        rating={book?.averageRating}
        googleLink={book.infoLink}        
      />
            
            
            )
        }
          </Container>
      </Box>

      </div>
  )
}




export default BookDetailPage;