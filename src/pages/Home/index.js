import React from 'react';
import SearchBar from '../../components/SearchBar/index.jsx';
import {useSelector} from 'react-redux';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(()=>({
  root: {
    height: '400px',
  },

  container: {
    display: 'flex',
  },

  img: {
    height: '192px',
    width: '120px',
    margin: 10,
  }
  
}))
const Home = () => {
  const classes = useStyles();

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


    {books?.map(book=>{
      console.log(book.volumeInfo.authors);
      return(
        <div key={book.id} className={classes.container}>
          <img className={classes.img} src={book.volumeInfo.imageLinks.thumbnail} alt="algo"/>
          <h1>{book.volumeInfo.title}</h1>
        </div>
      )
    })}


    
     
    </>
  )
}




export default Home;