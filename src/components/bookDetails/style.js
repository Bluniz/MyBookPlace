import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(()=> ({
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  margin: {
    margin: "10px",
  },
  title: {
    margin: '10px',
    marginTop: '20px'
  },
  
  button: {
    marginBottom: '10px',
    marginTop: '10px',
  },
  card: {
    minWidth: '90vw'
  },

  img: {
    width: '128px',
    height: '198px',
    margin: 10,
  }

}))


  export default useStyles;
