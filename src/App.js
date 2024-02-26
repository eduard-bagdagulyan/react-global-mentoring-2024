import './App.css';
import {Counter} from "./components/Counter";
import {Search} from "./components/Search";
import {GenreSelect} from "./components/GenreSelect";

function App() {
    return (
        <>
            <Counter initialValue={0}/>
            <hr/>
            <Search initialQuery={'Search'} onSearch={(event) => {
                event.preventDefault();
                console.log('Search:', event.target[0].value);
            }}/>
            <hr/>
            <GenreSelect genres={['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller']}
                         selectedGenre={'Action'} onSelect={console.log}/>
        </>
    );
}

export default App;