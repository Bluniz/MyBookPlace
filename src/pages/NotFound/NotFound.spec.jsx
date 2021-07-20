import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '.'

describe('Not Found page', () => {
    it('renders correctly', () => {
        render(<NotFound />)

        expect(screen.getByText('Página não encontrada')).toBeInTheDocument()
    })
})
