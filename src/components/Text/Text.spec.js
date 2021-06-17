import React from 'react'
import { render, screen } from '@testing-library/react'
import Text from '.'

describe('Text Component', () => {
    it('renders correctly', () => {
        render(<Text variant="h4">Texto</Text>)

        expect(screen.getByText('Texto')).toBeInTheDocument()
    })
})
