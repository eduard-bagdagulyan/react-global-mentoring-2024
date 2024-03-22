import { render, fireEvent } from '@testing-library/react'
import { Dialog } from '../components/Dialog/Dialog.tsx'
import { ReactNode } from 'react'

jest.mock('focus-trap-react', () => {
    return {
        __esModule: true,
        default: ({ children }: { children: ReactNode }) => children,
    }
})

describe('Dialog', () => {
    function setup() {
        return {
            title: 'Test Dialog',
            children: <div>Test Children</div>,
            onClose: jest.fn(),
        }
    }

    it('renders without crashing', () => {
        const props = setup()
        const { container } = render(
            <Dialog {...props}>
                <div></div>
            </Dialog>,
        )
        expect(container).toBeInTheDocument()
    })

    it('renders the correct title', () => {
        const props = setup()
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        expect(getByText('Test Dialog')).toBeInTheDocument()
    })

    it('renders the correct children', () => {
        const props = setup()
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        expect(getByText('Test Children')).toBeInTheDocument()
    })

    it('calls onClose when the close button is clicked', () => {
        const props = setup()
        const { getByText } = render(
            <Dialog {...props}>{props.children}</Dialog>,
        )
        fireEvent.click(getByText('×'))
        expect(props.onClose).toHaveBeenCalledTimes(1)
    })
})
