import './App.css';
import {Counter} from "./Counter";
import {Search} from "./Search";

function App() {
    return (
        <>
            <Counter value={0}/>
            <hr/>
            <Search placeholderValue={'Search'}/>
        </>
    );
}

export default App;