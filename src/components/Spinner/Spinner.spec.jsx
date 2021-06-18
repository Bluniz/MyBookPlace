import React from 'react'

import { render, screen } from '@testing-library/react'
import Spinner from '.'

describe('Spinner Component', () => {
    it('renders correctly', () => {
        render(<Spinner />)

        expect(screen.getByTestId('spinner')).toBeInTheDocument()
    })
})
