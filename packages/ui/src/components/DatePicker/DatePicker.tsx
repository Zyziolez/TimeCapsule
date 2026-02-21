import React, {useEffect, useState} from 'react'
import {Button} from './../Button/Button'
import { 
  format, 
  startOfMonth, 
  endOfMonth, 
  startOfWeek, 
  endOfWeek, 
  eachDayOfInterval, 
  isSameDay,
  isSameMonth,
  addMonths
} from 'date-fns'
import './DatePicker.css'

interface DatePickerProps {
    selectedStartingDate: Date,
    onDateChange?: (date: Date) => void 
}

export const DatePicker = ({  selectedStartingDate, onDateChange }: DatePickerProps) => {
    const [displayedDate, setDisplayedDate] = useState(selectedStartingDate)
    const start = startOfWeek(startOfMonth(displayedDate), { weekStartsOn: 1 })
    const end = endOfWeek(endOfMonth(displayedDate), { weekStartsOn: 1 })
   const allDays = eachDayOfInterval({ start, end })

    const changeMonth= (add: number) => {
        // let newMonth =  addMonths(displayedDate, add)
        setDisplayedDate(prev => addMonths(prev, add))

        // console.log(start)
        // console.log(end)
        // setStart()
    }

    const selectDay = (day:Date) => {
        setDisplayedDate(day)

    }

    return (
       <div className='datepicker-background' >
 <div className="datepicker">
            <div className="datepicker-header">
                <Button label='<' variant='transparent' onClick={() => changeMonth(-1)} size='xs' />
                {/* <button >cofnij</button> */}
                <h3>{format(displayedDate, 'MMMM yyyy')}</h3>
                {/* <button onClick={() => zmienMiesiac(1)} >dalej</button> */}
                <Button label='>' variant='transparent' onClick={() => changeMonth(1)} size='xs' />

            </div>
            
            <div className="datepicker-grid">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
                    <span key={d} className="weekday">{d}</span>
                ))}

                {allDays.map(day => (
                    <button
                        key={day.toString()}
                        onClick={() => selectDay(day)}
                        disabled={day < new Date()}
                        className={`day-cell 
                            ${!isSameMonth(day, displayedDate) ? 'outside' : ''} 
                            ${day < new Date() ? 'past' : ''}
                            ${isSameDay(day, displayedDate) ? 'selected' : ''}`
                        }
                    >
                        {format(day, 'd')}
                    </button>
                ))}
            </div>
            <Button label='OK' variant='secondary' size='sm' onClick={() => onDateChange?.(displayedDate)} width='wide' />
        </div>
       </div>
    )
}