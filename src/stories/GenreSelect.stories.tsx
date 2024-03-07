import { Meta, StoryObj } from '@storybook/react'
import { GenreSelect } from '../components/GenreSelect.tsx'

const meta: Meta<typeof GenreSelect> = {
    title: 'Genre Select',
    component: GenreSelect,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        genres: { control: 'array', description: 'Genres' },
        selectedGenre: { control: 'text', description: 'Selected Genre' },
        onSelect: { action: 'selected' },
    },
}

export default meta

type Story = StoryObj<typeof GenreSelect>

export const Default: Story = {
    args: {
        genres: ['Action', 'Adventure', 'Comedy', 'Drama'],
        selectedGenre: 'Action',
        onSelect: (genre: string) => {
            console.log('Selected:', genre)
        },
    },
}
