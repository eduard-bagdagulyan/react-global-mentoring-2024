import {useState} from "react";

export function Search({placeholderValue}) {
    const [input, setInput] = useState("");

    function onSearch() {
        console.log('search query: ', input);
        setInput('');
    }

    function onHandleChange(event) {
        setInput(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch()
        }
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" onChange={onHandleChange} placeholder={placeholderValue} onKeyDown={handleKeyDown} value={input}/>
            <button onClick={onSearch}>Search</button>
        </div>
    );
}