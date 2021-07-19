import React from 'react'
import Home from '.'
import { screen } from '@testing-library/react'
import { rendersWithRouter } from '../../utils/utils'

describe('Home Page', () => {
    it('renders correctly', () => {
        rendersWithRouter(<Home />)

        expect(screen.getByText('MyBookPlace')).toBeInTheDocument()
    })
})
