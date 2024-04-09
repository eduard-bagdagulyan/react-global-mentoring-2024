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

export function getMovies(params?: Partial<GetMoviesProps>): Promise<Movie[]> {
    if (cancelTokenSource) {
        cancelTokenSource.abort()
    }

    cancelTokenSource = new AbortController()

    return axios
        .get(`${process.env.API_URL}/movies`, {
            params,
            signal: cancelTokenSource.signal,
        })
        .then(res => res.data)
        .then(data => data.data)
        .catch(err => {
            if (axios.isCancel(err)) {
                console.log('Request canceled', err.message)
            } else {
                console.error(err)
            }
            return []
        })
}

export function getMovie(id: string): Promise<Movie> {
    if (cancelTokenSource) {
        cancelTokenSource.abort()
    }

    cancelTokenSource = new AbortController()

    return axios
        .get(`${process.env.API_URL}/movies/${id}`)
        .then(res => res.data)
        .catch(err => {
            if (axios.isCancel(err)) {
                console.log('Request canceled', err.message)
            } else {
                console.error(err)
            }
            return []
        })
}
