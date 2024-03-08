import React, { useState, useEffect } from 'react';

interface SortControlProps {
    currentSelection: string;
    onSortChange: (newSelection: string) => void;
}

const SortControl: React.FC<SortControlProps> = ({ currentSelection, onSortChange }) => {
    const [selectedOption, setSelectedOption] = useState(currentSelection);

    useEffect(() => {
        onSortChange(selectedOption);
    }, [selectedOption, onSortChange]);

    return (
        <div>
            <label>Sort by</label>
            <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="Release Date">Release Date</option>
                <option value="Title">Title</option>
            </select>
        </div>
    );
};

export default SortControl;