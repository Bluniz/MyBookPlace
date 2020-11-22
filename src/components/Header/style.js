import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  root:{
    background: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
    
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 700,
    marginLeft: 10,
  },
  image: {
    width: '50px',
    height: '50px',
  }
  
}))


export default useStyles;