import React from 'react';
import {Box} from '@material-ui/core';
import useStyles from './style.js';
import Text from '../Text/index.js';
import { Link } from 'react-router-dom';
import logo from '../../assets/estante.svg';
import SearchBar from '../SearchBar/index.jsx';

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
         <div className={classes.container}>
         <div className={classes.titleContainer}>
        <img src={logo} alt="logo" className={classes.image}/>
        <Text component={Link} to="/" variant="h4" className={classes.title}>Book Finder </Text>
          </div>
          <div className={classes.searchBar}>
             <SearchBar/>

          </div>
      </div>
      </Box>

     
      </>
  )
}



export default Header;