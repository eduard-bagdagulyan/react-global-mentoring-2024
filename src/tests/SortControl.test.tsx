import { render, fireEvent } from '@testing-library/react';
import SortControl from '../components/SortControl/SortControl';

// jest.mock('../assets/dropdown-arrow.svg?react', () => 'DropdownArrow');

describe('SortControl', () => {
    it('renders without crashing', () => {
        const { getByText } = render(<SortControl currentSelection="Release Date" onSortChange={() => {}} />);
        expect(getByText('SORT BY')).toBeInTheDocument();
    });

    it('renders the correct default selection', () => {
        const { getByDisplayValue } = render(<SortControl currentSelection="Release Date" onSortChange={() => {}} />);
        expect(getByDisplayValue('RELEASE DATE')).toBeInTheDocument();
    });

    it('calls onSortChange when a new option is selected', () => {
        const onSortChange = jest.fn();
        const { getByLabelText } = render(<SortControl currentSelection="Release Date" onSortChange={onSortChange} />);
        fireEvent.change(getByLabelText('SORT BY'), { target: { value: 'Title' } });
        expect(onSortChange).toHaveBeenCalledWith('Title');
    });
});