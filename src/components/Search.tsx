import { FormEvent } from 'react'

type SearchProps = { initialQuery: string; onSearch: (query: string) => void }

export function Search({ initialQuery, onSearch }: SearchProps) {
    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        onSearch(data.get('searchInput') as string)
    }

    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={handleSearch}>
                <input
                    name={'searchInput'}
                    type="text"
                    defaultValue={initialQuery}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
