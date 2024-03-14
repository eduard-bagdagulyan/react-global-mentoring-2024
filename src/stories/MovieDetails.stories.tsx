import { Meta, StoryObj } from '@storybook/react'
import { MovieDetails } from '../components/MovieDetails/MovieDetails.tsx'

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
        title: 'PULP FICTION',
        year: 1994,
        genres: ['Action', 'Adventure'],
        rating: 5,
        duration: 154,
        description:
            'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
    },
}
