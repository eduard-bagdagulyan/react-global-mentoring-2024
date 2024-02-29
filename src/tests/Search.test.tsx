import { Search } from '../components/Search.tsx'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

describe('Search', () => {
    const user = userEvent.setup()
    const initialValue = 'initial value'
    const newValue = 'new value'
    const onSearch = jest.fn()

    it('renders with initial value', () => {
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument()
    })

    it('calls the onSearch prop with the input value when the form is submitted', async () => {
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        const input = screen.getByDisplayValue(initialValue)
        const submitButton = screen.getByRole('button', { name: /search/i })

        await user.clear(input)
        await user.type(input, newValue)
        await user.click(submitButton)

        expect(onSearch).toHaveBeenCalledWith(newValue)
    })

    it('calls the onSearch prop with the input value when the Enter key is pressed', async () => {
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        const input = screen.getByDisplayValue(initialValue)
        await user.clear(input)
        await user.type(input, newValue)
        await user.keyboard('{enter}')

        expect(onSearch).toHaveBeenCalledWith(newValue)
    })
})
