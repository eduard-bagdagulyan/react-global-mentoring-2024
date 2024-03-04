import { FormEvent } from 'react'

type SearchProps = { initialQuery: string; onSearch: (query: string) => void }

interface FormElements extends HTMLFormControlsCollection {
    searchInput: HTMLInputElement
}

interface SearchFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export function Search({ initialQuery, onSearch }: SearchProps) {
    function handleSearch(event: FormEvent<SearchFormElement>) {
        event.preventDefault()
        onSearch(event.currentTarget.elements.searchInput.value)
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
