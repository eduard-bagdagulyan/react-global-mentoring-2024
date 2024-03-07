type MovieTileProps = {
    coverUrl: string
    title: string
    year: number
    genres: string[]
    cb: () => void
}

export function MovieTile({
    coverUrl,
    title,
    year,
    genres,
    cb,
}: MovieTileProps) {
    return (
        <div onClick={cb}>
            <img src={coverUrl} alt={title} />
            <h3>{title}</h3>
            <p>{year}</p>
            <p>{genres.join(', ')}</p>
        </div>
    )
}
