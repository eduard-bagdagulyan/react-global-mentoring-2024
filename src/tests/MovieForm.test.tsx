import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MovieForm } from '../components/MovieForm/MovieForm.tsx'

describe('MovieForm', () => {
    let onSubmitMock: jest.Mock
    let initialInfo: {
        title: string
        releaseDate: string
        movieUrl: string
        rating: number
        runtime: number
        overview: string
    }

    beforeEach(() => {
        onSubmitMock = jest.fn()
        initialInfo = {
            title: 'Movie Name',
            releaseDate: '2022-01-01',
            movieUrl: 'https://www.youtube.com/watch?v=123',
            rating: 5,
            runtime: 120,
            overview: 'This is a movie overview',
        }
        render(<MovieForm initialInfo={initialInfo} onSubmit={onSubmitMock} />)
    })

    it('renders without crashing', () => {
        expect(screen.getByLabelText(/title/i)).toBeInTheDocument()
    })

    it('renders with initial values', () => {
        expect(screen.getByDisplayValue(initialInfo.title)).toBeInTheDocument()
        expect(
            screen.getByDisplayValue(initialInfo.releaseDate),
        ).toBeInTheDocument()
        expect(
            screen.getByDisplayValue(initialInfo.movieUrl),
        ).toBeInTheDocument()
        expect(
            screen.getByDisplayValue(String(initialInfo.rating)),
        ).toBeInTheDocument()
        expect(
            screen.getByDisplayValue(String(initialInfo.runtime)),
        ).toBeInTheDocument()
        expect(
            screen.getByDisplayValue(initialInfo.overview),
        ).toBeInTheDocument()
    })

    it('calls onSubmit with form data when form is submitted', async () => {
        const newTitle = 'New Movie Name'
        await userEvent.clear(screen.getByLabelText(/title/i))
        await userEvent.type(screen.getByLabelText(/title/i), newTitle)
        fireEvent.submit(screen.getByRole('form'))

        expect(onSubmitMock).toHaveBeenCalledWith(
            expect.objectContaining({ title: newTitle }),
        )
    })
})
