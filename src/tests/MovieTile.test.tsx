import { MovieTile } from '../components/MovieTile.tsx'
import { render, screen } from '@testing-library/react'

describe('MovieTile', () => {
    function setup() {
        return {
            coverUrl:
                'https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-03-06%2019:02:07',
            title: 'Test',
            year: 2022,
            genres: ['Action', 'Adventure'],
            cb: jest.fn(),
        }
    }

    it('renders with props', () => {
        const { coverUrl, title, year, genres } = setup()
        render(
            <MovieTile
                coverUrl={coverUrl}
                title={title}
                year={year}
                genres={genres}
                cb={() => {}}
            />,
        )
        expect(screen.getByAltText(title)).toBeInTheDocument()
        expect(screen.getByText(title)).toBeInTheDocument()
        expect(screen.getByText(year)).toBeInTheDocument()
        expect(screen.getByText(genres.join(', '))).toBeInTheDocument()
    })

    it('calls the callback', () => {
        const { coverUrl, title, year, genres, cb } = setup()
        render(
            <MovieTile
                coverUrl={coverUrl}
                title={title}
                year={year}
                genres={genres}
                cb={cb}
            />,
        )
        screen.getByRole('img').click()
        expect(cb).toHaveBeenCalled()
    })
})
