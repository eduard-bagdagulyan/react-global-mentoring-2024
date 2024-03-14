import { render, screen } from '@testing-library/react'
import { MovieDetails } from '../components/MovieDetails/MovieDetails.tsx'

describe('MovieDetails', () => {
    it('renders the movie details', () => {
        render(
            <MovieDetails
                coverUrl="https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-03-06%2019:02:07"
                title="Test"
                year={2022}
                genres={['Action', 'Adventure']}
                rating={5}
                duration={120}
                description="Test description"
            />,
        )

        expect(screen.getByAltText('Test')).toBeInTheDocument()
        expect(screen.getByText('Test')).toBeInTheDocument()
        expect(screen.getByText('5')).toBeInTheDocument()
        expect(screen.getByText('Action, Adventure')).toBeInTheDocument()
        expect(screen.getByText('2022')).toBeInTheDocument()
        expect(screen.getByText('2h 0min')).toBeInTheDocument()
        expect(screen.getByText('Test description')).toBeInTheDocument()
    })
})
