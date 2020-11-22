import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  root:{
    width: '70%',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'flex-start',
    margin: 10,
    color: '#f5f5f5',
    background: 'transparent',
    borderColor: '#f5f5f5',
  },
  container: {
    display: 'flex',
  },

  button: {
     color: '#f5f5f5',
    margin: 10,
    borderColor: '#f5f5f5',

     '&:hover': {
       background: '#f5f5f5',
       color: '#122230',
       borderColor: '#122230'
     }
   },

  image: {
    width: '120px',
    height: '190px',
    padding: 10,
  },

  subheader: {
    color: '#f5f5f5'
  }
}))



export default useStyles;