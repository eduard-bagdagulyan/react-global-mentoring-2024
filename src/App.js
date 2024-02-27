import './App.css';
import {Counter} from "./components/Counter";
import {Search} from "./components/Search";
import {GenreSelect} from "./components/GenreSelect";
import {useState} from "react";

function App() {
    const [selectedGenre, setSelectedGenre] = useState('Action');

    return (
        <>
            <Counter initialValue={0}/>
            <hr/>
            <Search initialQuery={'Search'} onSearch={console.log}/>
            <hr/>
            <GenreSelect genres={['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller']}
                         selectedGenre={selectedGenre} onSelect={setSelectedGenre}/>
        </>
    );
}

export default App;