import {makeStyles} from '@material-ui/core/styles';



 const useStyles = makeStyles(()=>({
  root:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  field: {
    width: '60%',
    alignText: 'center',
    
  },
  input: {
    borderColor: '#122230',
    color: '#122230',
   },
   
}))


export default useStyles;