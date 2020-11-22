import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=> ({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  margin: {
    margin: "10px",
    color: '#122230',
    fontWeight: 'bold',
  },
  title: {
    margin: '10px',
    marginTop: '20px',
    fontWeight: 'bold',
  },
  
  card: {
    minWidth: '90vw',
    color: '#122230',
    background: 'transparent',
    borderColor: '#122230',
    borderWidth: 2,
  },

  img: {
    width: '128px',
    height: '198px',
    margin: 10,
  },

  button: {
     color: '#122230',
    marginBottom: '10px',
    marginTop: '10px',
    borderColor: '#122230',

     '&:hover': {
       background: '#122230',
       color: '#f5f5f5',
       borderColor: '#122230'
     }
   },

}))


  export default useStyles;
