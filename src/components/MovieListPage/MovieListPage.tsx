import React, { useState } from 'react'
import { GenreSelect } from '../GenreSelect/GenreSelect.tsx'
import SortControl from '../SortControl/SortControl.tsx'
import { MovieTile } from '../MovieTile/MovieTile.tsx'
import { Search } from '../Search/Search.tsx'
import { MovieGenres } from '../../common/constants/constants.ts'
import './MovieListPage.css'
import {
    MovieDetails,
    MovieDetailsProps,
} from '../MovieDetails/MovieDetails.tsx'

const MovieListPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('What Do You Want To Watch?')
    const [sortCriterion, setSortCriterion] = useState('')
    const [activeGenre, setActiveGenre] = useState('ALL')
    const [selectedMovie, setSelectedMovie] =
        useState<MovieDetailsProps | null>()
    const [movieList] = useState<MovieDetailsProps[]>([
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 1',
            year: 2022,
            genres: ['Action', 'Adventure'],
            rating: 8.5,
            duration: 120,
            description: 'This is a dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 2',
            year: 2021,
            genres: ['Drama', 'Thriller'],
            rating: 7.5,
            duration: 140,
            description: 'This is another dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 12',
            year: 2022,
            genres: ['Comedy', 'Romance'],
            rating: 8.0,
            duration: 110,
            description: 'This is the twelfth dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 12',
            year: 2022,
            genres: ['Comedy', 'Romance'],
            rating: 8.0,
            duration: 110,
            description: 'This is the twelfth dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 12',
            year: 2022,
            genres: ['Comedy', 'Romance'],
            rating: 8.0,
            duration: 110,
            description: 'This is the twelfth dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 12',
            year: 2022,
            genres: ['Comedy', 'Romance'],
            rating: 8.0,
            duration: 110,
            description: 'This is the twelfth dummy movie.',
        },
        {
            coverUrl: 'https://dummyimage.com/200x300',
            title: 'Dummy Movie 12',
            year: 2022,
            genres: ['Comedy', 'Romance'],
            rating: 8.0,
            duration: 110,
            description: 'This is the twelfth dummy movie.',
        },
    ]) // TODO remove

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
                            year={selectedMovie.year}
                            coverUrl={selectedMovie.coverUrl}
                            genres={selectedMovie.genres}
                            description={selectedMovie.description}
                            duration={selectedMovie.duration}
                            rating={selectedMovie.rating}
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
                    genres={['ALL', ...MovieGenres]}
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
                        {movieList.map((movie: MovieDetailsProps) => (
                            <MovieTile
                                key={movie.id}
                                coverUrl={movie.coverUrl}
                                title={movie.title}
                                year={movie.year}
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
