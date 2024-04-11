import { Movie } from '../../common/interfaces/Movie'
import { MovieDetails } from './MovieDetails.tsx'
import { useLoaderData } from 'react-router-dom'

export default function MovieDetailsWrapper() {
    const movie = useLoaderData() as Movie

    return movie ? (
        <MovieDetails
            title={movie.title}
            year={+movie.release_date.slice(0, 4)}
            coverUrl={movie.poster_path}
            genres={movie.genres}
            description={movie.overview}
            duration={movie.runtime}
            rating={movie.vote_average}
        />
    ) : null
}
