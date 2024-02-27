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
        <div>
            <h1>Genre Select</h1>
            {genres.map(genre => (
                <button
                    key={genre}
                    onClick={() => onSelect(genre)}
                    style={{
                        backgroundColor:
                            genre === selectedGenre ? 'lightblue' : 'white',
                    }}
                >
                    {genre}
                </button>
            ))}
        </div>
    )
}
