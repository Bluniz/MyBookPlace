import React from 'react';
import {Box} from '@material-ui/core';
import useStyles from './style.js';
import Text from '../Text/index.js';
import { Link } from 'react-router-dom';

const Home = () => {
  const classes = useStyles();

  return(
    <Box className={classes.root}>
      <div className={classes.flex}>
        <Text component={Link} to="/" variant="h2" className={classes.title}>Book Finder </Text>

        </div>
    </Box>
  )
}



export default Home;