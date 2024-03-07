import { Meta, StoryObj } from '@storybook/react'
import { Search } from '../components/Search.tsx'

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
        initialQuery: 'Search Query',
        onSearch: (query: string) => {
            console.log('Searching for:', query)
        },
    },
}
