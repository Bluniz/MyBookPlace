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
    color: '#122230',
    background: '#f5f5f5',

   },
   searchButton: {
    color: '#f5f5f5',
  },
  
   
 }))



export default useStyles;