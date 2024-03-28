import { FormEvent } from 'react'
import './Search.css'

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
        <div className={'search-bar'}>
            <form className={'search-bar-form'} onSubmit={handleSearch}>
                <input
                    className={'search-input'}
                    name={'searchInput'}
                    type="text"
                    defaultValue={initialQuery}
                />
                <button className={'search-button'} type="submit">
                    SEARCH
                </button>
            </form>
        </div>
    )
}
