import { Meta, StoryObj } from '@storybook/react'
import { GenreSelect } from '../components/GenreSelect/GenreSelect.tsx'

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
        genres: ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'],
        selectedGenre: 'ALL',
    },
}
