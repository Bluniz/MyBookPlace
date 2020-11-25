import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        background: 'linear-gradient(to left, #122230 0%,#192d3e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100vw',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: 10,
        margin: 10,
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
    },

    titleHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))

export default useStyles
