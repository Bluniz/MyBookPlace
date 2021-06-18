import React from 'react'
import { screen, render } from '@testing-library/react'
import Header from '.'
import useStyles from './style.js'
import { useLocation } from 'react-router-dom'

const mockUseLocationReturn = {
    pathname: '/',
}
jest.mock('react-router-dom', () => {
    return {
        useLocation: jest.fn().mockImplementation(() => {
            return mockUseLocationReturn
        }),
    }
})

describe('Header component', () => {
    it('renders correctly', () => {
        mockUseLocationReturn.pathname = '/home'

        render(<Header />)

        expect(screen.getByText('MyBookPlace')).toBeInTheDocument()
    })

    it('renders in diferent page from home', () => {
        mockUseLocationReturn.pathname = '/'

        render(<Header />)

        expect(screen.queryByText('MyBookPlace')).not.toBeInTheDocument()
    })
})
