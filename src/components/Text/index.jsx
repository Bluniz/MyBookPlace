import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'

let theme = createTheme()
theme = responsiveFontSizes(theme)

export const Text = ({ variant, children, ...rest }) => (
    <>
        <ThemeProvider theme={theme}>
            <Typography variant={variant} {...rest}>
                {children}
            </Typography>
        </ThemeProvider>
    </>
)
