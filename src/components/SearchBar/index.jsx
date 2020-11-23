import React, {useState, useEffect} from 'react';
import {TextField, Box, IconButton} from '@material-ui/core';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import {getBooks} from '../../service/booksService';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import booksActions from '../../actions/booksActions';

const SearchBar = () =>  {

  const classes = useStyles();
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const index = useSelector(state => state.books.index);

  function handleLoadBooks(event) {
    if (value !== '') {
      if (event?.key === 'Enter' || event?.type === 'click') {
        dispatch(booksActions.resetIndex());
        loadBook();
      }
   }
  }

  function loadBook() {
   try{
      getBooks(value, dispatch, index);
      }catch(error){
       console.log(error);
     }
  }

  useEffect(()=>{
    if(value !== ''){
      loadBook();
    }
  },[index])

  
   function handleChange(event){
    setValue(event.target.value);
  }


  return(
    <Box className={classes.root}>
      <TextField
        className={classes.field}
        variant="outlined"
        value={value}
        onChange={(event)=>handleChange(event)}
        placeholder="Pesquise aqui um livro"
        onKeyPress={handleLoadBooks}
        InputProps={{className: classes.input}}
      />
      <IconButton onClick={handleLoadBooks} className={classes.searchButton} component={Link} to="/search">
              <SearchIcon />
      </IconButton>
    </Box>
  )
}


export default SearchBar;