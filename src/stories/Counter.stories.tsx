import { Counter } from '../components/Counter.ts'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Counter> = {
    title: 'Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        initialValue: { control: 'number', description: 'Initial Value' },
    },
}

export default meta

type Story = StoryObj<typeof Counter>

export const Default: Story = {
    args: {
        initialValue: 0,
    },
}
