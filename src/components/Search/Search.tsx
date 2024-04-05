import { FormEvent } from 'react'
import './Search.css'
import { useSearchParams } from 'react-router-dom'

type SearchProps = { initialQuery: string }

interface FormElements extends HTMLFormControlsCollection {
    searchInput: HTMLInputElement
}

interface SearchFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export function Search({ initialQuery }: SearchProps) {
    const [searchParams, setSearchParams] = useSearchParams()

    function handleSearch(event: FormEvent<SearchFormElement>) {
        event.preventDefault()
        setSearchParams({
            ...searchParams,
            searchQuery: event.currentTarget.elements.searchInput.value,
        })
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
