import React from 'react'
import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

export function formatDate(date) {
    let data = new Date(date)
    let options = { day: 'numeric', month: 'long', year: 'numeric' }

    return data.toLocaleDateString('pt-br', options)
}

export function rendersWithRouter(ui) {
    const history = createMemoryHistory()
    return render(<Router history={history}>{ui}</Router>)
}
