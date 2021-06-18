import React from 'react'
import { render, screen } from '@testing-library/react'
import AverageRating from '.'

describe('Average Rating Component', () => {
    it('renders correctly', () => {
        render(<AverageRating readOnly />)

        expect(screen.getByTestId('rating')).toBeInTheDocument()
    })
})
