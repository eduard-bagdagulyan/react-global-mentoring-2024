import './GenreSelect.css'

type GenreSelectProps = {
    genres: string[]
    selectedGenre: string
    onSelect: (genre: string) => void
}

export function GenreSelect({
    genres,
    selectedGenre,
    onSelect,
}: GenreSelectProps) {
    return (
        <div className={'genre-select'}>
            {genres.map(genre => (
                <button
                    className={`genre-select-button ${selectedGenre.toLowerCase() === genre.toLowerCase() ? 'selected-button' : ''}`}
                    key={genre}
                    onClick={() => onSelect(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    )
}
