export function Search({initialQuery, onSearch}) {
    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={onSearch}>
                <input type="text" defaultValue={initialQuery}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}