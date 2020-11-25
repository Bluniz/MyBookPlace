const styles = {
    root: {
        width: '70%',
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'flex-start',
        margin: 10,
        color: '#122230',
        background: 'transparent',
        borderColor: '#122230',
    },
    container: {
        display: 'flex',
    },

    buttonAndRatingContainer: {
        display: 'flex',
        flexDirection: 'column',
        margin: 20,
    },

    button: {
        color: '#122230',
        borderColor: '#122230',
        marginTop: 10,
        width: '100%',

        '&:hover': {
            background: '#122230',
            color: '#f5f5f5',
            borderColor: '#f5f5f5',
        },
    },

    image: {
        width: '120px',
        height: '190px',
        padding: 10,
    },

    subheader: {
        color: '#122230',
    },
}

export default styles
