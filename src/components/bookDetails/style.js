import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=> ({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  margin: {
    margin: "10px",
    color: '#f5f5f5'
  },
  title: {
    margin: '10px',
    marginTop: '20px'
  },
  
  card: {
    minWidth: '90vw',
    color: '#f5f5f5',
    background: 'transparent',
    borderColor: '#f5f5f5'
  },

  img: {
    width: '128px',
    height: '198px',
    margin: 10,
  },

  button: {
     color: '#f5f5f5',
    marginBottom: '10px',
    marginTop: '10px',
    borderColor: '#f5f5f5',

     '&:hover': {
       background: '#f5f5f5',
       color: '#122230',
       borderColor: '#122230'
     }
   },

}))


  export default useStyles;
