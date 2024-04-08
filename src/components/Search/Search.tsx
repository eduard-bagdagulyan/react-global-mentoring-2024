import { FormEvent } from 'react'
import './Search.css'
import { useSearchParams } from 'react-router-dom'

interface FormElements extends HTMLFormControlsCollection {
    searchInput: HTMLInputElement
}

interface SearchFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export function Search() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('searchQuery') || ''

    function handleSearch(event: FormEvent<SearchFormElement>) {
        event.preventDefault()
        searchParams.set(
            'searchQuery',
            event.currentTarget.elements.searchInput.value,
        )
        setSearchParams(searchParams)
    }

    return (
        <div className={'search-bar'}>
            <form className={'search-bar-form'} onSubmit={handleSearch}>
                <input
                    className={'search-input'}
                    name={'searchInput'}
                    type="text"
                    defaultValue={searchQuery}
                />
                <button className={'search-button'} type="submit">
                    SEARCH
                </button>
            </form>
        </div>
    )
}
