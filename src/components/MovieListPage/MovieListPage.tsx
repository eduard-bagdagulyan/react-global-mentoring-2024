import { useEffect, useState } from 'react'
import { GenreSelect } from '../GenreSelect/GenreSelect.tsx'
import SortControl from '../SortControl/SortControl.tsx'
import { MovieTile } from '../MovieTile/MovieTile.tsx'
import {
    MovieGenres,
    MovieGenresType,
    SortOptionsType,
} from '../../common/constants/constants.ts'
import './MovieListPage.css'
import { getMovies } from '../../api/movie.ts'
import { Movie } from '../../common/interfaces/Movie'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

export default function MovieListPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('searchQuery') || ''
    const sortCriterion = (
        searchParams.get('sortCriterion') || 'release_date'
    ).toLowerCase()
    const activeGenre = searchParams.get('activeGenre') || 'ALL'
    const [movieList, setMovieList] = useState<Movie[]>([])
    const genres = ['ALL', ...MovieGenres]
    const navigate = useNavigate()

    const setSortCriterion = (criterion: SortOptionsType) => {
        const lowerCaseCriterion = criterion.toLowerCase()
        searchParams.set('sortCriterion', lowerCaseCriterion)
        setSearchParams(searchParams)
    }

    const setActiveGenre = (genre: MovieGenresType) => {
        searchParams.set('activeGenre', genre)
        setSearchParams(searchParams)
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
                <div className={'logo-wrapper'}>
                    <p className={'logo-text'}>
                        <strong>netflix</strong>roulette
                    </p>
                    <button className={'add-movie'}>+ ADD MOVIE</button>
                </div>
                <Outlet />
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
                                id={movie.id}
                                coverUrl={movie.poster_path}
                                title={movie.title}
                                year={+movie.release_date.slice(0, 4)}
                                genres={movie.genres}
                                cb={() =>
                                    navigate(
                                        `/${movie.id}?${searchParams.toString()}`,
                                    )
                                }
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
