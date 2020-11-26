import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        background: '#f5f5f5',
    },
    bookList: {
        background: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        color: '#f5f5f5',
    },

    floatButtonNext: {
        background: '#122230',
        color: '#f5f5f5',
        position: 'absolute',
        right: '5vw',
        bottom: '10px',
    },
    floatButtonPrev: {
        background: '#122230',
        color: '#f5f5f5',
        position: 'absolute',
        left: '5vw',
        bottom: '10px',
    },
}))

export default useStyles
