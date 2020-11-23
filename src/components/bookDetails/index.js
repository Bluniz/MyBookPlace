import React from 'react';
import {Grid, Card, CardContent} from '@material-ui/core';
import Text from '../Text/index';
import useStyles from './style';
import Button from '../Button/index.jsx';
import AverageRating from '../AverageRating/index.jsx';
import { Link } from 'react-router-dom';

const BookDetails = ({image, subtitle, title, publisher, publishedDate, authors, pageCount, description, rating, googleLink}) => {
  const classes = useStyles();
  return(
    <Grid container spacing={2} className={classes.wrapper}>
    <Grid item sm ={4} md={4} className={classes.container}>
    <img src={image} alt="book-img" className={classes.img}/>
    </Grid>

      <Grid item  sm={8} md={6}>
      <Text variant="h4" className={classes.title}>{title}</Text>
        <Text variant="subtitle1" className={classes.title} >{subtitle}</Text>
        {authors && (
          <div className={classes.authorsName}>
            {authors.map((author, index) => {
            let authorName = author;
            if (index !== authors.length - 1) authorName = `${author} /`
              return (<Text variant="body2" className={classes.authors} color="textSecondary" key={author}>{`${authorName} `} </Text>)
          })}
          </div>
        )}
      
      <Text className={classes.margin}variant="body2" color="textSecondary" > {`Editora: ${publisher? publisher: 'Não informada'}${`, publicado em ${publishedDate? publishedDate: '????'}`}`}</Text>
      <Text className={classes.margin}variant="body2" color="textSecondary" >{`Quantidade de páginas: ${pageCount}`}</Text>
        <div className={classes.flex}>
          {rating && (<div className={classes.ratingContainer}>
            <Text variant="subtitle2" className={classes.ratingText}>{rating}</Text>
            <AverageRating className={classes.rating} value={rating} readOnly precision={0.5} />
          </div>)}
          <Button component={Link} to={location => ({...location, pathname: googleLink})} target="_blank" color="primary" className={classes.button} variant="outlined">Ver no google livros</Button>
      </div>
      
     
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