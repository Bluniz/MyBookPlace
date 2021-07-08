import React from 'react'
import { TextField, Box, IconButton, Grid, Tooltip } from '@material-ui/core'
import useStyles from './style'
import SearchIcon from '@material-ui/icons/Search'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

const SearchBar = ({ setTerm, handleSearch, orderTerm, handleChangeOrder }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Grid container spacing={1} className={classes.barContainer}>
                <Grid item md={12} sm={12} className={classes.barContainer}>
                    <TextField
                        className={classes.field}
                        variant="outlined"
                        onChange={(event) => setTerm(event)}
                        placeholder="Pesquise aqui um livro"
                        InputProps={{ className: classes.input }}
                    />
                    <IconButton
                        onClick={handleSearch}
                        className={classes.searchButton}
                        data-testid="icon-button"
                    >
                        <SearchIcon />
                    </IconButton>
                </Grid>
                <Grid item md={12} sm={12} className={classes.barContainer}>
                    <Tooltip title="Ordenar por">
                        <ToggleButtonGroup
                            value={orderTerm}
                            exclusive
                            onChange={handleChangeOrder}
                        >
                            <ToggleButton
                                value="&orderBy=newest"
                                className={classes.searchButton}
                            >
                                Mais novo
                            </ToggleButton>
                            <ToggleButton
                                value="&orderBy=relevance"
                                className={classes.searchButton}
                            >
                                Relevância
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Tooltip>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchBar
