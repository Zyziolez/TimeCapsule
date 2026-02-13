import type {Meta, StoryObj} from '@storybook/react'
import {Calendar} from './Calendar'
import {format} from 'date-fns'

const meta : Meta<typeof Calendar> = {
    title: 'Components/Calendar',
    component: Calendar,
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof Calendar>


export const basic :Story = {
    args: {
        selectedStartingDate: new Date(),
        formatedDatesArray : [format(new Date(2026, 1, 3), 'yyyy-MM-dd'), format(new Date(2026, 1, 24), 'yyyy-MM-dd'), format(new Date(2026, 1, 16), 'yyyy-MM-dd')]
    }
}