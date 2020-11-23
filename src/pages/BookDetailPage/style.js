import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(()=>({
  root: {   
     height: '100vh',
     background: '#f5f5f5',
     display: 'flex',
     flexDirection: 'column',
     color: '#122230',
     width: '100vw',
     
   },
   
  dontOverflow: {
    display: 'flex',
    flexDirection: 'column',
  },

  backButton: {
    color: '#122230',
  },
  
  spinner: {
        color: '#122230',

  },

  container: {
  },
  spinnerContainer: {
    width: '100vw',
    heigth: '100vh',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '25vh'
  }

 
}))


export default useStyles;