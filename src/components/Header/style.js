import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(()=>({
  root: {
    background: 'linear-gradient(to left, #122230 0%,#192d3e 100%)',
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
    color: '#f5f5f5',
    fontWeight: 700,
    marginLeft: 10,
  },
  image: {
    width: '50px',
    height: '50px',
  }
  
}))


export default useStyles;