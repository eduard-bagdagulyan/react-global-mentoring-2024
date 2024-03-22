import { Meta, StoryObj } from '@storybook/react'
import { MovieForm } from '../components/MovieForm/MovieForm.tsx'

const meta: Meta<typeof MovieForm> = {
    title: 'Movie Form',
    component: MovieForm,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        initialInfo: { control: 'object', description: 'Initial Info' },
        onSubmit: { action: 'submitted' },
    },
}

export default meta

type Story = StoryObj<typeof MovieForm>

export const AddMovie: Story = {}

export const EditMovie: Story = {
    args: {
        initialInfo: {
            title: 'Movie Name',
            releaseDate: '2022-01-01',
            movieUrl: 'https://www.youtube.com/watch?v=123',
            rating: 5,
            runtime: 120,
            overview: 'This is a movie overview',
        },
    },
}
