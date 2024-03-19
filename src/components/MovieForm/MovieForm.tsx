import './MovieForm.css'
import React from 'react'

type MovieFormProps = {
    initialInfo?: {
        title: string
        releaseDate: string
        movieUrl: string
        rating: number
        genres: string[]
        runtime: number
        overview: string
    }
    onSubmit: () => void
}

export function MovieForm({ initialInfo, onSubmit }: MovieFormProps) {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={'movie-form'}>
                <div>
                    <label htmlFor={'title'}>TITLE</label>
                    <input
                        id={'title'}
                        type={'text'}
                        value={initialInfo?.title}
                        placeholder={'Movie Title'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'release-date'}>RELEASE DATE</label>
                    <input
                        id={'release-date'}
                        type={'date'}
                        value={initialInfo?.releaseDate}
                        defaultValue={'Select Date'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'movie-url'}>MOVIE URL</label>
                    <input
                        id={'movie-url'}
                        type={'text'}
                        value={initialInfo?.movieUrl}
                        placeholder={'https://'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'rating'}>RATING</label>
                    <input
                        id={'rating'}
                        type={'number'}
                        value={initialInfo?.rating}
                        placeholder={'0-10'}
                    ></input>
                </div>
                <div>
                    <label htmlFor={'genre'}>GENRE</label>
                    <select>
                        {initialInfo?.genres?.map(genre => (
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
                        type={'number'}
                        value={initialInfo?.runtime}
                        placeholder={'minutes'}
                    ></input>
                </div>
                <div className={'movie-form-overview'}>
                    <label htmlFor={'overview'}>OVERVIEW</label>
                    <textarea
                        id={'overview'}
                        value={initialInfo?.overview}
                        placeholder={'Movie Description'}
                    ></textarea>
                </div>
            </div>
            <div className={'movie-form-buttons'}>
                <button type={'reset'}>RESET</button>
                <button type={'submit'}>SUBMIT</button>
            </div>
        </form>
    )
}
