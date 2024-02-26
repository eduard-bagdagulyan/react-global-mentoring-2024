export function GenreSelect({genres, selectedGenre, onSelect}) {
    return (
        <div>
            <h1>Genre Select</h1>
            {genres.map(genre => <button key={genre} onClick={() => onSelect(genre)}
                                         style={{backgroundColor: genre === selectedGenre ? 'lightblue' : 'white',}}>{genre}</button>)}
        </div>
    );
}