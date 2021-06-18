import React from 'react'
import { render, screen } from '@testing-library/react'
import FloatButton from '.'

const mockedClasses = {
    floatButtonNext: '',
    floatButtonPrev: '',
}

describe('FloatButton Component', () => {
    it('renders correctly', () => {
        render(<FloatButton classes={mockedClasses}>FloatButton</FloatButton>)

        expect(screen.getByText('FloatButton')).toBeInTheDocument()
    })

    it('renders with position prev', () => {
        render(
            <FloatButton position="prev" classes={mockedClasses}>
                FloatButton
            </FloatButton>
        )

        expect(screen.getByText('FloatButton')).toBeInTheDocument()
    })

    it('renders with position next', () => {
        render(
            <FloatButton position="next" classes={mockedClasses}>
                FloatButton
            </FloatButton>
        )

        expect(screen.getByText('FloatButton')).toBeInTheDocument()
    })
})
