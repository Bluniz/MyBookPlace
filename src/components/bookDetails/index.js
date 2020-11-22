import React from 'react';
import {Grid, Card, CardContent, Button} from '@material-ui/core';
import Text from '../Text/index';
import useStyles from './style';

const BookDetails = ({image, subtitle, title, publisher, publishedDate, authors, pageCount, description}) => {
  const classes = useStyles();
  return(
    <Grid container spacing={2} >
    <Grid item sm ={4} md={4} className={classes.container}>
    <img src={image} alt="book-img" className={classes.img}/>
    </Grid>

      <Grid item  sm={8} md={6}>
      <Text variant="h4" className={classes.title}>{title}</Text>
        <Text variant="subtitle1" className={classes.title} >{subtitle}</Text>
        {authors && (<>{authors.map(author => <Text className={classes.margin}variant="body2" color="textSecondary" key={author}>{author}</Text>)}</>)}
      
      <Text className={classes.margin}variant="body2" color="textSecondary" > {`Editora: ${publisher}${`, publicado em ${publishedDate}`}`}</Text>
      <Text className={classes.margin}variant="body2" color="textSecondary" >{`Quantidade de páginas: ${pageCount}`}</Text>
     
      
      <Button color="primary" className={classes.button} variant="outlined">Ver no google livros</Button>
     
      </Grid>

      <Grid item>
      <Card variant="outlined" className={classes.card}>
    <CardContent>
    <Text variant="subtitle2" >Descrição:</Text>   
     <Text variant="body2">{description}</Text>
  
    </CardContent>
    </Card>
      </Grid>
      </Grid>
  )
}


export default BookDetails;