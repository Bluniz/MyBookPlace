import React from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/core/styles'
import style from './style'

const FloatButton = ({
    children,
    position,
    classes = classes.floatButtonNext,
    ...rest
}) => (
    <Fab
        {...rest}
        className={
            position === 'next'
                ? classes.floatButtonNext
                : classes.floatButtonPrev
        }
    >
        {children}
    </Fab>
)

export default withStyles(style)(FloatButton)
