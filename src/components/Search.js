export function Search({initialQuery, onSearch}) {
    function handleSearch(event) {
        event.preventDefault();
        onSearch(event.target['searchInput'].value);
    }

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch}>
                <input name={'searchInput'} type="text" defaultValue={initialQuery}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}