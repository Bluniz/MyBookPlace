import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import logo from '../../assets/estante.svg'
import Text from '../../components/Text/index'

const Home = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item sm={6} md={3}>
                <img className={classes.img} src={logo} alt="logo" />
            </Grid>
            <Grid item sm={5} md={4}>
                <Text variant="h2">MyBookPlace</Text>
                <Text variant="subtitle2">Pesquise seus livros :D</Text>
                <Button
                    className={classes.buttonSearch}
                    component={Link}
                    to="/search"
                    variant="outlined"
                >
                    <SearchIcon />
                    Pesquisar
                </Button>
            </Grid>
        </Grid>
    )
}

export default Home
