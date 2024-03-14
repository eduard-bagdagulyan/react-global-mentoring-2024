import { Meta, StoryObj } from '@storybook/react'
import SortControl from '../components/SortControl/SortControl.tsx'

const meta: Meta<typeof SortControl> = {
    title: 'Sort Control',
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
    },
}

export const TitleSelected: Story = {
    args: {
        currentSelection: 'Title',
    },
}
