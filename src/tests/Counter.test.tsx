import { Counter } from '../components/Counter.ts'
import { render, screen, fireEvent } from '@testing-library/react'

describe('Counter', () => {
    it('renders with initial value', () => {
        const initialValue = 0
        render(<Counter initialValue={initialValue} />)
        expect(screen.getByText(initialValue)).toBeInTheDocument()
    })

    it('decrements the value when the decrement button is clicked', () => {
        const initialValue = 0
        render(<Counter initialValue={initialValue} />)
        fireEvent.click(screen.getByText('-'))
        expect(screen.getByText(initialValue - 1)).toBeInTheDocument()
    })

    it('increments the value when the increment button is clicked', () => {
        const initialValue = 0
        render(<Counter initialValue={initialValue} />)
        fireEvent.click(screen.getByText('+'))
        expect(screen.getByText(initialValue + 1)).toBeInTheDocument()
    })
})
