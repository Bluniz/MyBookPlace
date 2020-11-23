import React from 'react';
import {Button as Btn} from '@material-ui/core';


const Button = ({ children, ...rest }) => (<Btn {...rest}>{children}</Btn>)

export default Button;