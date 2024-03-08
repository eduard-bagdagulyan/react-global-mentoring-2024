import { Meta, StoryObj } from '@storybook/react'
import SortControl from '../components/SortControl.tsx'

const meta: Meta<typeof SortControl> = {
    title: 'SortControl',
    component: SortControl,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        currentSelection: { control: 'text', description: 'Current Selection' },
        onSortChange: { action: 'sortChanged' },
    },
}

export default meta

type Story = StoryObj<typeof SortControl>

export const ReleaseDateSelected: Story = {
    args: {
        currentSelection: 'Release Date',
        onSortChange: () => {},
    },
}

export const TitleSelected: Story = {
    args: {
        currentSelection: 'Title',
        onSortChange: () => {},
    },
}
