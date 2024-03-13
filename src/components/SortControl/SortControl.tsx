import React from 'react'
import './SortControl.css'
import SortOptions from './constants/SortOptions'
import DropdownArrow from '../../assets/dropdown-arrow.svg?react'

interface SortControlProps {
    currentSelection: string
    onSortChange: (newSelection: string) => void
}

const SortControl: React.FC<SortControlProps> = ({
    currentSelection,
    onSortChange,
}) => {
    return (
        <div className={'sort-control'}>
            <label className={'sort-label'} htmlFor={'sort-select'}>
                SORT BY
            </label>
            <select
                id="sort-select"
                className={'sort-select'}
                defaultValue={currentSelection}
                onChange={e => onSortChange(e.target.value)}
            >
                {SortOptions.map(option => (
                    <option key={option} value={option}>
                        {option.toUpperCase()}
                    </option>
                ))}
            </select>
            <DropdownArrow />
        </div>
    )
}

export default SortControl
