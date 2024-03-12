import { Search } from '../components/Search/Search.tsx'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

describe('Search', () => {
    function setup() {
        return {
            user: userEvent.setup(),
            onSearch: jest.fn(),
            initialValue: 'initial value',
            newValue: 'new value',
        }
    }

    it('renders with initial value', () => {
        const { initialValue, onSearch } = setup()
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        expect(screen.getByDisplayValue(initialValue)).toBeInTheDocument()
    })

    it('calls the onSearch prop with the input value when the form is submitted', async () => {
        const { user, initialValue, newValue, onSearch } = setup()
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        const input = screen.getByDisplayValue(initialValue)
        const submitButton = screen.getByRole('button', { name: /search/i })

        await user.clear(input)
        await user.type(input, newValue)
        await user.click(submitButton)

        expect(onSearch).toHaveBeenCalledWith(newValue)
    })

    it('calls the onSearch prop with the input value when the Enter key is pressed', async () => {
        const { user, initialValue, newValue, onSearch } = setup()
        render(<Search initialQuery={initialValue} onSearch={onSearch} />)
        const input = screen.getByDisplayValue(initialValue)
        await user.clear(input)
        await user.type(input, newValue)
        await user.keyboard('{enter}')

        expect(onSearch).toHaveBeenCalledWith(newValue)
    })
})
