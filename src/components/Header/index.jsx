import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './style.js'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/estante.svg'
import { Text } from '../Text/index.jsx'

const Header = () => {
    const classes = useStyles()
    const { pathname } = useLocation()

    return (
        <>
            {pathname !== '/' && (
                <Box className={classes.root}>
                    <div className={classes.container}>
                        <div className={classes.titleContainer}>
                            <img
                                src={logo}
                                alt="logo"
                                className={classes.image}
                            />{' '}
                            <Text
                                component={Link}
                                to="/"
                                variant="h4"
                                className={classes.title}
                            >
                                MyBookPlace
                            </Text>
                        </div>
                    </div>
                </Box>
            )}
        </>
    )
}

export default Header
