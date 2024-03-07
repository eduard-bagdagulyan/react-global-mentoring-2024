type MovieDetailsProps = {
    coverUrl: string
    title: string
    year: number
    genres: string[]
    rating: number
    duration: number
    description: string
}

export function MovieDetails({
    coverUrl,
    title,
    year,
    genres,
    rating,
    duration,
    description,
}: MovieDetailsProps) {
    return (
        <div>
            <img src={coverUrl} alt={title} />
            <h2>{title}</h2>
            <p>{rating}</p>
            <p>{genres.join(', ')}</p>
            <p>{year}</p>
            <p>{duration}</p>
            <p>{description}</p>
        </div>
    )
}
