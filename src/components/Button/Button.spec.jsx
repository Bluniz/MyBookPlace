import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Button Component', () => {
    it('renders correctly', () => {
        render(<Button>Meu Botão</Button>)

        expect(screen.getByText('Meu Botão')).toBeInTheDocument()
    })
})
