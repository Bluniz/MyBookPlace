import React from 'react';
import {Grid, Button } from '@material-ui/core';
import useStyles from './style';
import logo from '../../assets/estante.svg';
import Text from '../../components/Text/index';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import StarBorderIcon from '@material-ui/icons/StarBorder';



const HomePage = () => {
  const classes = useStyles();


  return (
      <Grid container  className={classes.root}>
        <Grid item sm={3} md={3}>
        <img className={classes.img}src={logo} alt="logo"/>
        </Grid>
      <Grid item sm={5} md={5}>
        <Text variant="h2">MyBookPlace</Text>
          <Text variant="subtitle2"> Pesquise e favorite seus livros :D</Text>
        <Button className={classes.buttonSearch} component={Link} to="/search"  variant="outlined"> <SearchIcon/> Pesquisar</Button>
          <Button className={classes.buttonFavorite}  variant="outlined"><StarBorderIcon/> Meus favoritos</Button>
          
        </Grid>
      </Grid>

  )
}


export default HomePage