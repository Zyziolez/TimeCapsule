import type {Meta, StoryObj} from '@storybook/react'
import {Timer} from './Timer'

const meta : Meta<typeof Timer> = {
    title: 'Components/Timer',
    component: Timer,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof Timer>


export const basic :Story = {
    args: {
        countTo: new Date(new Date().getTime() + 1000 * 60 * 60)
    }
}