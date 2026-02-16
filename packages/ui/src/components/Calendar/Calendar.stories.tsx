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
        formatedDatesArray : [
            {eventId: '2', eventDate: format(new Date(2026, 1, 24), 'yyyy-MM-dd')},
            {eventId: '3', eventDate: format(new Date(2026, 1, 16), 'yyyy-MM-dd')},
            {eventId: '4', eventDate: format(new Date(2026, 1, 16), 'yyyy-MM-dd')},
            {eventId: '5', eventDate: format(new Date(2026, 1, 16), 'yyyy-MM-dd')},
            {eventId: '6', eventDate: format(new Date(2026, 1, 16), 'yyyy-MM-dd')}


        ]
    }
}