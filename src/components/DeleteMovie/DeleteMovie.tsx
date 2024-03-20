import './DeleteMovie.css';

export function DeleteMovieModal() {
    return (
        <div className={'delete-movie-wrapper'}>
            <p>Are you sure you want to delete this movie?</p>
            <button className={'confirm-button'}>CONFIRM</button>
        </div>
    )
}