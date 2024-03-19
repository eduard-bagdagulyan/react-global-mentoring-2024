import { render, fireEvent } from '@testing-library/react'
import { Dialog } from '../components/Dialog/Dialog.tsx'

describe('Dialog', () => {
    const onCloseMock = jest.fn()

    const props = {
        title: 'Test Dialog',
        children: <div>Test Children</div>,
        onClose: onCloseMock,
    }

    it('renders without crashing', () => {
        const { container } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        expect(container).toBeInTheDocument()
    })

    it('renders the correct title', () => {
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        expect(getByText('Test Dialog')).toBeInTheDocument()
    })

    it('renders the correct children', () => {
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        expect(getByText('Test Children')).toBeInTheDocument()
    })

    it('calls onClose when the close button is clicked', () => {
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        fireEvent.click(getByText('×'))
        expect(onCloseMock).toHaveBeenCalledTimes(1)
    })
})
