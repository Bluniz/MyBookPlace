import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(()=>({
  root: {   
     height: '100vh',
     background: 'linear-gradient(to left, #122230 0%,#192d3e 100%)',
    display: 'flex',
     flexDirection: 'column',
     
    color: '#f5f5f5',
     
   },
   img: {
     width: '250px',
     height: '250px',
   },
   buttonSearch: {
     color: '#f5f5f5',
     marginTop: 10,
     borderColor: '#f5f5f5',

     '&:hover': {
       background: '#f5f5f5',
       color: '#122230',
       borderColor: '#122230'
     }
  },
  dontOverflow: {
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
   },
   buttonFavorite: {
     color: '#f5f5f5',
     marginTop: 10,
     marginLeft: 10,
     borderColor: '#f5f5f5',

     
     '&:hover': {
       background: '#f5f5f5',
       color: '#122230',
       borderColor: '#122230'
     }
   },

  
   

 
}))


export default useStyles;