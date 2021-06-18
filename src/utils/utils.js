import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

export function formatDate(date) {
    let data = new Date(date)
    let options = { day: 'numeric', month: 'long', year: 'numeric' }

    return data.toLocaleDateString('pt-br', options)
}
