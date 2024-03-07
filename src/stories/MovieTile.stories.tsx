import { Meta, StoryObj } from '@storybook/react'
import { MovieTile } from '../components/MovieTile.tsx'

const meta: Meta<typeof MovieTile> = {
    title: 'Movie Tile',
    component: MovieTile,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        coverUrl: { control: 'text', description: 'Cover URL' },
        title: { control: 'text', description: 'Title' },
        year: { control: 'number', description: 'Year' },
        genres: { control: 'array', description: 'Genres' },
    },
}

export default meta

type Story = StoryObj<typeof MovieTile>

export const Default: Story = {
    args: {
        coverUrl:
            'https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-03-06%2019:02:07',
        title: 'Test',
        year: 2022,
        genres: ['Action', 'Adventure'],
    },
}
