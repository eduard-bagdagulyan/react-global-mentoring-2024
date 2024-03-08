import SortControl from '../components/SortControl.tsx'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Counter', () => {
    it('renders with initial selection', () => {
        render(
            <SortControl currentSelection="Title" onSortChange={jest.fn()} />,
        )
        expect(screen.getByDisplayValue('Title')).toBeInTheDocument()
    })

    it('changes selection when a different option is chosen', () => {
        render(
            <SortControl currentSelection="Title" onSortChange={jest.fn()} />,
        )
        const element = screen.getByLabelText('Sort by')
        fireEvent.change(element, { target: { value: 'Release Date' } })
        expect(element).toHaveValue('Release Date')
    })

    it('calls the onSortChange callback with the new selection when changed', () => {
        const mockCallback = jest.fn()
        const { getByLabelText } = render(
            <SortControl
                currentSelection="Title"
                onSortChange={mockCallback}
            />,
        )
        fireEvent.change(getByLabelText('Sort by'), {
            target: { value: 'Release Date' },
        })
        expect(mockCallback).toHaveBeenCalledWith('Release Date')
    })
})
