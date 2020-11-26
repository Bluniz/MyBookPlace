import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(() => ({
    root: {
        background: '#f5f5f5',
        color: '#122230',
    },

    dontOverflow: {
        display: 'flex',
        flexDirection: 'column',
    },

    backButton: {
        color: '#122230',
    },

    spinner: {
        color: '#122230',
    },

    container: {},
    spinnerContainer: {
        width: '100vw',
        heigth: '100vh',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '25vh',
    },
}))

export default useStyles
