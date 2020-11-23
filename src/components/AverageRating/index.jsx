import React from 'react';
import Rating from '@material-ui/lab/Rating';




const AverageRating = ({ value,...props }) => (<Rating defaultValue={value} {...props} />)



export default AverageRating;