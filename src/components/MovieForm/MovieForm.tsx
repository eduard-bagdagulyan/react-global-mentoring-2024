import './MovieForm.css'
import React from 'react'
import { MovieGenres } from '../../common/constants/constants.ts'

type MovieFormProps = {
    initialInfo?: {
        title: string
        releaseDate: string
        movieUrl: string
        rating: number
        runtime: number
        overview: string
    }
    onSubmit: (formData: { [p: string]: FormDataEntryValue }) => void
}

export function MovieForm({ initialInfo, onSubmit }: MovieFormProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.currentTarget))
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} aria-label="form">
            <div className="movie-form">
                <div>
                    <label htmlFor={'title'}>TITLE</label>
                    <input
                        id={'title'}
                        name={'title'}
                        type={'text'}
                        defaultValue={initialInfo?.title}
                        placeholder={'Movie Title'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'release-date'}>RELEASE DATE</label>
                    <input
                        id={'release-date'}
                        name={'releaseDate'}
                        type={'date'}
                        defaultValue={initialInfo?.releaseDate}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'movie-url'}>MOVIE URL</label>
                    <input
                        id={'movie-url'}
                        name={'movieUrl'}
                        type={'text'}
                        defaultValue={initialInfo?.movieUrl}
                        placeholder={'https://'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'rating'}>RATING</label>
                    <input
                        id={'rating'}
                        name={'rating'}
                        type={'number'}
                        defaultValue={initialInfo?.rating}
                        placeholder={'0-10'}
                        min={0}
                        max={10}
                        step={1}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'genre'}>GENRE</label>
                    <select id={'genre'} name={'genre'}>
                        {MovieGenres.map(genre => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor={'runtime'}>RUNTIME</label>
                    <input
                        id={'runtime'}
                        name={'runtime'}
                        type={'number'}
                        defaultValue={initialInfo?.runtime}
                        placeholder={'minutes'}
                    ></input>
                </div>
                <div className="movie-form-overview">
                    <label htmlFor={'overview'}>OVERVIEW</label>
                    <textarea
                        id={'overview'}
                        name={'overview'}
                        defaultValue={initialInfo?.overview}
                        placeholder={'Movie Description'}
                    ></textarea>
                </div>
            </div>
            <div className="movie-form-buttons">
                <button type={'reset'}>RESET</button>
                <button type={'submit'}>SUBMIT</button>
            </div>
        </form>
    )
}
