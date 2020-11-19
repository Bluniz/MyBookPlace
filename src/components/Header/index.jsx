import React from 'react';
import {Box, Typography} from '@material-ui/core';
import useStyles from './style.js';


const Home = () => {
  const classes = useStyles();

  return(
    <Box  className={classes.root}>
      <div className={classes.flex}>
      <Typography variant="h2">Book Finder </Typography>

      </div>
    </Box>
  )
}



export default Home;