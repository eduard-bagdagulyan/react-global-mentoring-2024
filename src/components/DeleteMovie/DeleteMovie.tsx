import './DeleteMovie.css'

type DeleteMovieModalProps = {
    onConfirm: () => void
}

export function DeleteMovieModal({ onConfirm }: DeleteMovieModalProps) {
    return (
        <div className={'delete-movie-wrapper'}>
            <p>Are you sure you want to delete this movie?</p>
            <button className="confirm-button" onClick={onConfirm}>
                CONFIRM
            </button>
        </div>
    )
}
