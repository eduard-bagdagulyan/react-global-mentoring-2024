import { Meta, StoryObj } from '@storybook/react'
import Dialog from '../components/Dialog/Dialog.tsx'

const meta: Meta<typeof Dialog> = {
    title: 'Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
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
