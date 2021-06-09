import React, { memo } from 'react'
import styles from './style.js'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '../Button/index.jsx'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AverageRating from '../AverageRating/index.jsx'

const BookCardComponent = ({
    title,
    image,
    bookId,
    subtitle,
    classes,
    rating,
}) => {
    return (
        <Card variant="outlined" className={classes.root}>
            <CardActionArea className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item sm={3} md={3}>
                        <CardMedia>
                            <img
                                src={image}
                                className={classes.image}
                                alt="card-img"
                            />
                        </CardMedia>
                    </Grid>
                    <Grid item sm={9} md={9}>
                        <CardHeader
                            title={title}
                            subheader={subtitle}
                            subheaderTypographyProps={{
                                className: classes.subheader,
                            }}
                        />
                        <div className={classes.buttonAndRatingContainer}>
                            <AverageRating
                                value={rating}
                                precision={0.5}
                                readOnly
                            />
                            <Button
                                variant="outlined"
                                component={Link}
                                to={`/book/${bookId}`}
                                className={classes.button}
                                color="primary"
                            >
                                Ver mais
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )
}

//! Apenas re-renderiza se as propriedades do componente mudarem.
const BookCard = memo(
    withStyles(styles)(BookCardComponent),
    (prevProps, nextProps) => {
        return Object.is(prevProps, nextProps)
    }
)

export default BookCard
