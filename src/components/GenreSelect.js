import {useState} from "react";

export function GenreSelect({genres, selectedGenre, onGenreSelectCb}) {
    const [selectedGenreState, setSelectedGenreState] = useState(selectedGenre);

    function onGenreSelect(e) {
        setSelectedGenreState(e.target.value);
        onGenreSelectCb(e);
    }

    return (
        <div>
            <h1>Genre Select</h1>
            <select onChange={onGenreSelect} value={selectedGenreState}>
                {genres.map(genre => <option key={genre} value={genre}>{genre}</option>)}
            </select>
        </div>
    );
}