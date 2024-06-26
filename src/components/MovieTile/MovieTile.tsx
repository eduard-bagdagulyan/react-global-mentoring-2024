import './MovieTile.css'

type MovieTileProps = {
    id: number
    coverUrl: string
    title: string
    year: number
    genres: string[]
    cb: () => void
}

export function MovieTile({
    id,
    coverUrl,
    title,
    year,
    genres,
    cb,
}: MovieTileProps) {
    return (
        <button onClick={cb} data-id={id}>
            <div className={'movie-tile'}>
                <img src={coverUrl} alt={title} />
                <div className={'title-year-wrapper'}>
                    <h3 className={'movie-tile-title'}>{title}</h3>
                    <p className={'movie-tile-year'}>{year}</p>
                </div>
                <p>{genres.join(', ')}</p>
            </div>
        </button>
    )
}
