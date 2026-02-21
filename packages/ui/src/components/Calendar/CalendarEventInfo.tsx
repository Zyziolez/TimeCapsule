import React, { useEffect } from 'react'
import './Calendar.css'


interface Event {
    eventId: string,
    eventDate: string
}

interface CalendarEventInfoProps {
    events: Event[],
    position: DOMRect
}


export const CalendarEventInfo = ({events, position}: CalendarEventInfoProps) => {
    let joined = events.map(event => event.eventId).join(', '); // later this wont be ids but titles
    joined = joined.length > 20 ? joined.slice(0, 17) + '...' : joined;
    return (
      <div className='event-info-container' style={{
            position: 'fixed',
            top: position.top - 120, 
            left: position.left + position.width / 2,
            transform: 'translateX(-50%)',
            zIndex: 9999
            }}  >
                <p>{events.length} event{events.length > 1 ? 's' : ''}</p>
         <div className='event-bottom-info' >
             {/* {events.map((event, i) => {
                if(i == 3) return <p key={event.eventId}>...</p>;
                if (i > 3) return null;
                return(
                    (    
            <div 
            className="calendar-event-info" key={event.eventId}>
            <p>Title</p>
        </div>
          )
                )
             })} */}
             {joined}
         </div>
      </div>
    )
}