import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        background: '#f5f5f5',
    },
    bookList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    alert: {
        marginTop: '20vh',
        minWidth: '40vw',
        maxWith: '80vw',
        background: '#122230',
        color: '#f5f5f5',
        margin: 10,
    },
}))

export default useStyles
