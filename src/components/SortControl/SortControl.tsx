import React from 'react'
import './SortControl.css'
import DropdownArrow from '../../assets/dropdown-arrow.svg?react'
import { SortOptions } from '../../common/constants/constants.ts'

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
                {Object.entries(SortOptions).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value.toUpperCase()}
                    </option>
                ))}
            </select>
            <DropdownArrow />
        </div>
    )
}

export default SortControl
