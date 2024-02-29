import { GenreSelect } from '../components/GenreSelect'
import { render, screen } from '@testing-library/react'

describe('GenreSelect', () => {
    const genres = ['Action', 'Comedy', 'Drama']
    const selectedGenre = genres[1]
    const onGenreChange = jest.fn()

    it('renders all genres passed in props', () => {
        const genres = ['Action', 'Comedy', 'Drama']
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
