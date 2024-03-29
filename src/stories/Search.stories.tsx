import { Meta, StoryObj } from '@storybook/react'
import { Search } from '../components/Search/Search.tsx'

const meta: Meta<typeof Search> = {
    title: 'Search',
    component: Search,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        initialQuery: { control: 'text', description: 'Initial Query' },
        onSearch: { action: 'searched' },
    },
}

export default meta

type Story = StoryObj<typeof Search>

export const Default: Story = {
    args: {
        initialQuery: 'What do you want to watch?',
    },
}
