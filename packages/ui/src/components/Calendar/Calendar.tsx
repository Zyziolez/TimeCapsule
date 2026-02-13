import React, {useEffect, useState} from 'react'
import {Button} from '../Button/Button'
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameDay,
  isSameMonth,
  addMonths,
  isEqual
} from 'date-fns'
import './Calendar.css'

interface CalendarProps {
    selectedStartingDate: Date,
    onDateChange?: (date: Date) => void,
    formatedDatesArray?: string[]
}

export const Calendar = ({  selectedStartingDate, onDateChange, formatedDatesArray = [] }: CalendarProps) => {
    const [displayedDate, setDisplayedDate] = useState(selectedStartingDate)
    const start = startOfWeek(startOfMonth(displayedDate), { weekStartsOn: 1 })
    const end = endOfWeek(endOfMonth(displayedDate), { weekStartsOn: 1 })
   const allDays = eachDayOfInterval({ start, end })

    const zmienMiesiac= (add: number) => {
        // let newMonth =  addMonths(displayedDate, add)
        setDisplayedDate(prev => addMonths(prev, add))

        // console.log(start)
        // console.log(end)
        // setStart()
    }

    const selectDay = (day:Date) => {
        console.log(isEqual(format(day, 'yyyy-MM-dd'), format(new Date(), 'yyyy-MM-dd')))
        setDisplayedDate(day)
        // onDateChange?.(day)
    }

    return (
        <div className="calendar">
            <div className="calendar-header">
                <Button label='<' variant='transparent' onClick={() => zmienMiesiac(-1)} size='sm' />
                {/* <button >cofnij</button> */}
                <h3>{format(displayedDate, 'MMMM yyyy')}</h3>
                {/* <button onClick={() => zmienMiesiac(1)} >dalej</button> */}
                <Button label='>' variant='transparent' onClick={() => zmienMiesiac(1)} size='sm' />

            </div>
            
            <div className="calendar-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                    <span key={d} className="weekday">{d}</span>
                ))}

                {allDays.map(day => {
                    let formatDate = format(day, 'yyyy-MM-dd')
                    let specialCount = formatedDatesArray.reduce((a, v) => (isEqual(formatDate, v) ? a + 1 : a), 0)
                    console.log(specialCount)
                    return(
                        (
                    <button
                        key={day.toString()}
                        onClick={() => selectDay(day)}
                        className={`day-cell 
                            ${!isSameMonth(day, displayedDate) ? 'outside' : ''} 
                            ${isSameDay(day, displayedDate) ? 'selected' : ''}`
                        }
                    >
                        {format(day, 'd')}
                        <div className='clendar-events-mark' >
                            {}
                        </div>
                    </button>
                )
                    )
                })}
            </div>
        </div>
    )
}