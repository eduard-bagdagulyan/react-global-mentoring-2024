import axios, { CancelTokenSource } from 'axios'
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

let cancelTokenSource: CancelTokenSource | null = null;

export function getMovies(params?: Partial<GetMoviesProps>): Promise<Movie[]> {
    if (cancelTokenSource) {
        cancelTokenSource.cancel();
    }

    cancelTokenSource = axios.CancelToken.source();

    return axios
        .get('http://localhost:4000/movies', {
            params,
            cancelToken: cancelTokenSource.token
        })
        .then(res => res.data)
        .then(data => data.data)
}
