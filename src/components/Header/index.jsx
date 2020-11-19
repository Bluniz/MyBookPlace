import React from 'react';
import {Box} from '@material-ui/core';
import useStyles from './style.js';
import Text from '../Text/index.js';


const Home = () => {
  const classes = useStyles();

  return(
    <Box  className={classes.root}>
      <div className={classes.flex}>
      <Text variant="h2">Book Finder </Text>

      </div>
    </Box>
  )
}



export default Home;