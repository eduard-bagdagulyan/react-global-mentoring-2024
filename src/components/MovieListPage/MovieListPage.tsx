import React, { useEffect, useState } from 'react'
import { GenreSelect } from '../GenreSelect/GenreSelect.tsx'
import SortControl from '../SortControl/SortControl.tsx'
import { MovieTile } from '../MovieTile/MovieTile.tsx'
import { Search } from '../Search/Search.tsx'
import { MovieGenres } from '../../common/constants/constants.ts'
import './MovieListPage.css'
import { MovieDetails } from '../MovieDetails/MovieDetails.tsx'
import { getMovies } from '../../api/Movie.ts'
import { Movie } from '../../common/interfaces/Movie'
import { capitalizeFirstLetter } from '../../utils/utils.ts'

const MovieListPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [sortCriterion, setSortCriterion] = useState('')
    const [activeGenre, setActiveGenre] = useState('ALL')
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>()
    const [movieList, setMovieList] = useState<Movie[]>([])
    const genres = ['ALL', ...MovieGenres].map(genre => genre.toUpperCase())

    useEffect(() => {
        getMovies({
            search: searchQuery.trim(),
            sortBy: sortCriterion,
            searchBy: 'title',
            sortOrder: 'asc',
            filter:
                activeGenre === 'ALL'
                    ? []
                    : capitalizeFirstLetter(activeGenre.toLowerCase()),
        }).then(setMovieList)
    }, [activeGenre, searchQuery, sortCriterion])

    return (
        <div className={'movie-list-page'}>
            <header className={'movie-list-page-header'}>
                {selectedMovie ? (
                    <>
                        <button
                            style={{
                                color: 'red',
                                fontSize: '1.5rem',
                            }}
                            onClick={() => {
                                setSelectedMovie(null)
                                console.log(selectedMovie)
                            }}
                        >
                            X
                        </button>
                        {/* Temporary solution to close MovieDetails, TODO remove */}
                        <MovieDetails
                            title={selectedMovie.title}
                            year={+selectedMovie.release_date.slice(0, 4)}
                            coverUrl={selectedMovie.poster_path}
                            genres={selectedMovie.genres}
                            description={selectedMovie.overview}
                            duration={selectedMovie.runtime}
                            rating={selectedMovie.vote_average}
                        />
                    </>
                ) : (
                    <>
                        <div className={'logo-wrapper'}>
                            <p className={'logo-text'}>
                                <strong>netflix</strong>roulette
                            </p>
                            <button className={'add-movie'}>+ ADD MOVIE</button>
                        </div>
                        <div className={'search-bar-wrapper'}>
                            <h1>FIND YOUR MOVIE</h1>
                            <Search
                                initialQuery={searchQuery}
                                onSearch={setSearchQuery}
                            />
                        </div>
                    </>
                )}
            </header>
            <div className={'movie-list-page-navbar'}>
                <GenreSelect
                    genres={genres}
                    selectedGenre={activeGenre}
                    onSelect={setActiveGenre}
                />
                <SortControl
                    currentSelection={sortCriterion}
                    onSortChange={setSortCriterion}
                />
            </div>
            <main>
                <div className={'movie-list-page-content'}>
                    <div className={'movie-counter'}>
                        <strong>{movieList.length}</strong> movies found
                    </div>
                    <div className={'movie-list'}>
                        {movieList.map(movie => (
                            <MovieTile
                                key={movie.id}
                                coverUrl={movie.poster_path}
                                title={movie.title}
                                year={+movie.release_date.slice(0, 4)}
                                genres={movie.genres}
                                cb={() => setSelectedMovie(movie)}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <footer>
                <p>
                    <strong>netflix</strong>roulette
                </p>
            </footer>
        </div>
    )
}

export default MovieListPage
