import { useEffect, useState } from 'react'
import { GenreSelect } from '../GenreSelect/GenreSelect.tsx'
import SortControl from '../SortControl/SortControl.tsx'
import { MovieTile } from '../MovieTile/MovieTile.tsx'
import { Search } from '../Search/Search.tsx'
import {
    MovieGenres,
    MovieGenresType,
    SortOptionsType,
} from '../../common/constants/constants.ts'
import './MovieListPage.css'
import { MovieDetails } from '../MovieDetails/MovieDetails.tsx'
import { getMovies } from '../../api/movie.ts'
import { Movie } from '../../common/interfaces/Movie'
import { useSearchParams } from 'react-router-dom'

export default function MovieListPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('searchQuery') || ''
    const sortCriterion = searchParams.get('sortCriterion') || 'release_date'
    const activeGenre = searchParams.get('activeGenre') || 'ALL'
    const [movieList, setMovieList] = useState<Movie[]>([])
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
    const genres = ['ALL', ...MovieGenres]

    const setSearchQuery = (query: string) => {
        setSearchParams({ ...searchParams, searchQuery: query })
    }

    const setSortCriterion = (criterion: SortOptionsType) => {
        setSearchParams({ ...searchParams, sortCriterion: criterion })
    }

    const setActiveGenre = (genre: MovieGenresType) => {
        setSearchParams({ ...searchParams, activeGenre: genre })
    }

    useEffect(() => {
        getMovies({
            search: searchQuery.trim(),
            sortBy: sortCriterion,
            searchBy: 'title',
            sortOrder: 'desc',
            filter: activeGenre === 'ALL' ? [] : activeGenre,
            limit: 12,
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
