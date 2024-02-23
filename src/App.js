import './App.css';
import {Counter} from "./components/Counter";
import {Search} from "./components/Search";
import {GenreSelect} from "./components/GenreSelect";

function App() {
    return (
        <>
            <Counter value={0}/>
            <hr/>
            <Search placeholderValue={'Search'}/>
            <hr/>
            <GenreSelect genres={['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Thriller']}
                         selectedGenre={'Action'} onGenreSelectCb={(e) => console.log(e.target.value)}/>
        </>
    );
}

export default App;