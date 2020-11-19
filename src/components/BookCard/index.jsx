import React from 'react';
import useStyles from './style.js'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const BookCard = ({title, image}) => {
  const classes = useStyles();
  return(
   
    <Card  variant="outlined" className={classes.root}>
      <CardActionArea className={classes.container}>
        <Grid container spacing={3}>
          <Grid item sm={3} md={3}>
          <CardMedia> 
          <img src={image} className={classes.image} alt="card-img"/>
        </CardMedia>
          </Grid>
          <Grid item sm={9} md={9}>
          <CardHeader title={title}/>
         <Button variant="outlined" className={classes.button} color="primary">Ver mais</Button> 
          </Grid>
        </Grid>
      </CardActionArea>
     
    </Card>
  )
}



export default BookCard;
