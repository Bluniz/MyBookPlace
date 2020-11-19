import React, {useState} from 'react';
import {TextField, Box} from '@material-ui/core';
import useStyles from './style';
import SearchIcon from '@material-ui/icons/Search';
import {getBooks} from '../../service/booksService';
import InputAdornment from '@material-ui/core/InputAdornment';



const SearchBar = () =>  {

  const classes = useStyles();

  const [value, setValue] = useState('');

  const [timer, setTimer] = useState(null);



   function handleChange(event){
     clearTimeout(timer);
    setValue(event.target.value);

    setTimer(setTimeout(()=>{
      if(value !== ''){
        try{
         getBooks(value);
        }catch(error){
          console.log(error);
        }
    }
    }, 1000))
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
        }}
      />
      
    </Box>
  )
}


export default SearchBar;