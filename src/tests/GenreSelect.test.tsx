import { GenreSelect } from '../components/GenreSelect/GenreSelect.tsx'
import { render, screen } from '@testing-library/react'

describe('GenreSelect', () => {
    function setup() {
        return {
            genres: ['Action', 'Comedy', 'Drama'],
            selectedGenre: 'Comedy',
            onGenreChange: jest.fn(),
        }
    }

    it('renders all genres passed in props', () => {
        const { genres, selectedGenre, onGenreChange } = setup()
        render(
            <GenreSelect
                genres={genres}
                selectedGenre={selectedGenre}
                onSelect={onGenreChange}
            />,
        )
        genres.forEach(genre => {
            expect(screen.getByText(genre)).toBeInTheDocument()
        })
    })

    it('highlights selected genre', () => {
        const { genres, selectedGenre, onGenreChange } = setup()
        render(
            <GenreSelect
                genres={genres}
                selectedGenre={selectedGenre}
                onSelect={onGenreChange}
            />,
        )
        const selected = screen.getByText(selectedGenre)
        expect(selected).toHaveStyle('background-color: lightblue')
    })

    // Test that after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments
    it('calls onSelect with the selected genre', () => {
        const { genres, selectedGenre, onGenreChange } = setup()
        render(
            <GenreSelect
                genres={genres}
                selectedGenre={selectedGenre}
                onSelect={onGenreChange}
            />,
        )
        const genreButton = screen.getByText(selectedGenre)
        genreButton.click()
        expect(onGenreChange).toHaveBeenCalledWith(selectedGenre)
    })
})
