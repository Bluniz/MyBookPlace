import React from 'react';
import Fab from '@material-ui/core/Fab';



const FloatButton = ({ children, ...rest }) => (<Fab {...rest}>{children}</Fab>)



export default FloatButton;