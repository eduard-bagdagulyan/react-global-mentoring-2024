import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './ErrorPage/ErrorPage.tsx'
import { Search } from './components/Search/Search.tsx'
import MovieDetailsWrapper from './components/MovieDetails/MovieDetailsWrapper.tsx'
import { getMovie } from './api/movie.ts'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Search initialQuery={''} />,
            },
            {
                path: '/:movieId',
                element: <MovieDetailsWrapper />,
                loader: async ({ params }) => {
                    if (params.movieId) {
                        return getMovie(params.movieId)
                    }
                    return Promise.resolve(null)
                },
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
