import {makeStyles} from '@material-ui/core/styles';



 const useStyles = makeStyles(()=>({
  root:{
     width: '100vw',
     height: '100vh',
     background: 'linear-gradient(to left, #122230 0%,#192d3e 100%)',
     overflowX: 'hidden',
    },
    bookList: {
       background: 'linear-gradient(to left, #122230 0%,#192d3e 100%)',
       width: '100vw',
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
    },
    spinner: {
       marginTop: '20vh',
       color: '#f5f5f5'
    },
    alert: {
       marginTop: '20vh',
       minWidth: '40vw',
       maxWith: '80vw',
    }
   
}))


export default useStyles;