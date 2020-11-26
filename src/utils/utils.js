export function formatDate(date) {
    let data = new Date(date)
    let options = { day: 'numeric', month: 'long', year: 'numeric' }

    return data.toLocaleDateString('pt-br', options)
}
