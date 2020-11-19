import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  root:{
    width: '70%',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'flex-start',
    margin: 10,
  },
  container: {
    display: 'flex',
  },

  button: {
    margin: 10,
  },

  image: {
    width: '120px',
    height: '190px',
    padding: 10,
  }
}))



export default useStyles;