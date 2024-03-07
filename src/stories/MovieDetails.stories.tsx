import { Meta, StoryObj } from '@storybook/react'
import { MovieDetails } from '../components/MovieDetails.tsx'

const meta: Meta<typeof MovieDetails> = {
    title: 'Movie Details',
    component: MovieDetails,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        coverUrl: { control: 'text', description: 'Cover URL' },
        title: { control: 'text', description: 'Title' },
        year: { control: 'number', description: 'Year' },
        genres: { control: 'array', description: 'Genres' },
        rating: { control: 'number', description: 'Rating' },
        duration: { control: 'number', description: 'Duration' },
        description: { control: 'text', description: 'Description' },
    },
}

export default meta

type Story = StoryObj<typeof MovieDetails>

export const Default: Story = {
    args: {
        coverUrl:
            'https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-03-06%2019:02:07',
        title: 'Test',
        year: 2022,
        genres: ['Action', 'Adventure'],
        rating: 5,
        duration: 120,
        description: 'Test description',
    },
}
