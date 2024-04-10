import axios from 'axios'
import { Movie } from '../common/interfaces/Movie'

type GetMoviesProps = {
    sortBy: string
    sortOrder: 'desc' | 'asc'
    search: string
    searchBy: 'title' | 'genres'
    filter: string | string[]
    offset: number
    limit: number
}

let cancelTokenSource: AbortController

export async function getMovies(
    params?: Partial<GetMoviesProps>,
): Promise<Movie[]> {
    if (cancelTokenSource) {
        cancelTokenSource.abort()
    }

    cancelTokenSource = new AbortController()

    try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            params,
            signal: cancelTokenSource.signal,
        })
        const data = res.data
        return data.data
    } catch (err) {
        if (axios.isCancel(err)) {
            console.log('Request canceled', err.message)
        } else {
            console.error(err)
        }
        return []
    }
}

export async function getMovie(id: string): Promise<Movie> {
    if (cancelTokenSource) {
        cancelTokenSource.abort()
    }

    cancelTokenSource = new AbortController()

    try {
        const res = await axios.get(
            `${import.meta.env.VITE_API_URL}/movies/${id}`,
        )
        return res.data
    } catch (err) {
        if (axios.isCancel(err)) {
            console.log('Request canceled', err.message)
        } else {
            console.error(err)
        }
        return {} as Movie
    }
}
