import { Meta, StoryObj } from '@storybook/react'
import { Dialog } from '../components/Dialog/Dialog.tsx'
import { MovieForm } from '../components/MovieForm/MovieForm.tsx'
import { DeleteMovieModal } from '../components/DeleteMovie/DeleteMovie.tsx'

const meta: Meta<typeof Dialog> = {
    title: 'Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
        backgrounds: { default: 'Light' },
    },
    argTypes: {
        title: { control: 'text', description: 'Dialog Title' },
        children: { control: 'text', description: 'Dialog Content' },
        onClose: { action: 'closed' },
    },
}

export default meta

type Story = StoryObj<typeof Dialog>

export const Default: Story = {
    args: {
        title: 'Dialog Title',
    },
}

export const AddMovie: Story = {
    args: {
        title: 'Add Movie',
        children: <MovieForm onSubmit={() => {}} />,
    },
}

export const EditMovie: Story = {
    args: {
        title: 'Edit Movie',
        children: (
            <MovieForm
                initialInfo={{
                    title: 'Movie Name',
                    releaseDate: '2022-01-01',
                    movieUrl: 'https://www.youtube.com/watch?v=123',
                    rating: 5,
                    genres: ['Action', 'Adventure'],
                    runtime: 120,
                    overview: 'This is a movie overview',
                }}
                onSubmit={() => {}}
            />
        ),
    },
}

export const DeleteMovie: Story = {
    args: {
        title: 'Delete Movie',
        children: <DeleteMovieModal />,
    },
}
