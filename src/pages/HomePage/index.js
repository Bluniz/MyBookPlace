import React from 'react'
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import useStyles from './style'
import logo from '../../assets/estante.svg'
import Text from '../../components/Text/index'

const HomePage = () => {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Grid item sm={3} md={3}>
                <img className={classes.img} src={logo} alt="logo" />
            </Grid>
            <Grid item sm={5} md={5}>
                <Grid container>
                    <Grid item sm={12} md={12}>
                        <Text variant="h2">MyBookPlace</Text>
                        <Text variant="subtitle2">
                            Pesquise e favorite seus livros :D
                        </Text>
                        <Grid item sm={3} md={3}>
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
                </Grid>
            </Grid>
        </Grid>
    )
}

export default HomePage
