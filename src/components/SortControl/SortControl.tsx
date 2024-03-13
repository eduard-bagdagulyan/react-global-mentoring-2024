import React from 'react'
import './SortControl.css'

interface SortControlProps {
    currentSelection: string
    onSortChange: (newSelection: string) => void
}

const SortControl: React.FC<SortControlProps> = ({
    currentSelection,
    onSortChange,
}) => {
    const options = ['Release Date', 'Title']

    return (
        <div className={'sort-control'}>
            <label className={'sort-label'}>SORT BY</label>
            <select
                className={'sort-select'}
                defaultValue={currentSelection}
                onChange={e => onSortChange(e.target.value)}
            >
                {options.map(option => (
                    <option key={option} value={option}>
                        {option.toUpperCase()}
                    </option>
                ))}
            </select>
            <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.17339 0C0.319169 0 -0.141788 1.00184 0.413939 1.65057L4.23746 6.11398C4.63642 6.57971 5.35674 6.57992 5.75597 6.11442L9.58401 1.65101C10.1403 1.0024 9.67943 0 8.82494 0H1.17339Z"
                    fill="#F65261"
                />
            </svg>
        </div>
    )
}

export default SortControl
