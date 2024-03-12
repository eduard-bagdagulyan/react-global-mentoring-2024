import { useState } from 'react'
import { Counter } from './components/Counter.ts'
import { Search } from './components/Search/Search.tsx'
import { GenreSelect } from './components/GenreSelect/GenreSelect.tsx'
import './global.css'

function App() {
    const [selectedGenre, setSelectedGenre] = useState<string>('Action')

    return (
        <>
            <Counter initialValue={0} />
            <hr />
            <Search initialQuery={'Search'} onSearch={console.log} />
            <hr />
            <GenreSelect
                genres={[
                    'Action',
                    'Adventure',
                    'Comedy',
                    'Drama',
                    'Fantasy',
                    'Horror',
                    'Mystery',
                    'Thriller',
                ]}
                selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}
            />
        </>
    )
}

export default App
