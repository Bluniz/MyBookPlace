import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  root:{
    background: '#f34',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  title: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 700
  }
  
}))


export default useStyles;