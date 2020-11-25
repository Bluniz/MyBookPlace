import {
    createMuiTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@material-ui/core/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

const Text = ({ variant, children, ...rest }) => (
    <>
        <ThemeProvider theme={theme}>
            <Typography variant={variant} {...rest}>
                {children}
            </Typography>
        </ThemeProvider>
    </>
)

export default Text
