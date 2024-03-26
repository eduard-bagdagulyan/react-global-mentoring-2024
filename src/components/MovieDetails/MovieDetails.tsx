import './MovieDetails.css'

export type MovieDetailsProps = {
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
    function convertMinutesToHoursAndMinutes(totalMinutes: number) {
        const hours = Math.floor(totalMinutes / 60)
        const minutes = totalMinutes % 60

        return `${hours}h ${minutes}min`
    }

    return (
        <div className={'movie-details'}>
            <div className={'movie-details-image-wrapper'}>
                <img src={coverUrl} alt={title} />
            </div>
            <div>
                <div className={'movie-details-title-rating-wrapper'}>
                    <h2>{title}</h2>
                    <p>{rating}</p>
                </div>
                <p>{genres.join(', ')}</p>
                <div className={'movie-details-year-duration-wrapper'}>
                    <p>{year}</p>
                    <p>{convertMinutesToHoursAndMinutes(duration)}</p>
                </div>
                <div className={'movie-details-description-wrapper'}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
