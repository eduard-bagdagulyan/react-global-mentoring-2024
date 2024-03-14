import type { Preview } from '@storybook/react'
import '../src/global.css'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            default: 'Dark',
            values: [
                {
                    name: 'Light',
                    value: '#ffffff',
                },
                {
                    name: 'Dark',
                    value: '#232323',
                },
            ],
        }
    },
}

export default preview
