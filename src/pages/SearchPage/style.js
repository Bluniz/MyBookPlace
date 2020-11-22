import {makeStyles} from '@material-ui/core/styles';



 const useStyles = makeStyles(()=>({
  root:{
     width: '100vw',
     height: '100vh',
     background: '#f5f5f5',
     overflowX: 'hidden',
    },
    bookList: {
       background: '#f5f5f5',
       width: '100vw',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
    },
    spinner: {
       marginTop: '20vh',
       color: '#122230',
    },
    alert: {
       marginTop: '20vh',
       minWidth: '40vw',
       maxWith: '80vw',
       background: '#122230',
       color: '#f5f5f5'
    }
   
}))


export default useStyles;