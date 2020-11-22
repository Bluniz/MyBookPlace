import React, {useState, useEffect} from 'react';
import {TextField, Box} from '@material-ui/core';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import {getBooks} from '../../service/booksService';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useDispatch } from 'react-redux';


const SearchBar = () =>  {

  const classes = useStyles();

  const [value, setValue] = useState('');

  const [timer, setTimer] = useState(null);

  const dispatch = useDispatch();

  const index = 0;


 

  function loadBooks(){
    try{
      getBooks(value, dispatch, index);
     }catch(error){
       console.log(error);
     }
  }

  useEffect(()=>{
    if(value !== ''){
      loadBooks();
    }
  },[index])

  


   function handleChange(event){
    clearTimeout(timer);
    setValue(event.target.value);
   if(value !== '' && value.length > 1){
    setTimer(setTimeout(()=>{
        loadBooks();
    }, 1000))
       }

  }


  return(
    <Box className={classes.root}>

      <TextField
        className={classes.field}
        variant="outlined"
        value={value}
        onChange={(event)=>handleChange(event)}
        placeholder="Pesquise aqui um livro"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
      <SearchIcon />
            </InputAdornment>
          ),
          className: classes.input,
         
        }}
      />

      
    </Box>
  )
}


export default SearchBar;