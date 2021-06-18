import React from 'react'
import { render, screen } from '@testing-library/react'
import FloatButton from '.'

describe('FloatButton Component', () => {
    it('renders correctly', () => {
        const classes = {
            floatButtonNext: '',
            floatButtonPrev: '',
        }

        render(
            <FloatButton position="next" classes={classes}>
                FloatButton
            </FloatButton>
        )

        expect(screen.getByText('FloatButton')).toBeInTheDocument()
    })
})
