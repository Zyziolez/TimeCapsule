import type {Meta, StoryObj} from '@storybook/react'
import {Sandbox1} from './Sandbox1'

const meta : Meta<typeof Sandbox1> = {
    title: 'Components/Sandbox1',
    component: Sandbox1,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof Sandbox1>


export const basic :Story = {
    args: {
        
    }
}