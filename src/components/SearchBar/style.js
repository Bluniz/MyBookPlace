import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
    },
    barContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        color: '#122230',
        borderColor: '#122230',
    },
}))

export default useStyles
