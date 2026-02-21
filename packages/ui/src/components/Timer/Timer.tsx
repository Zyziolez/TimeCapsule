import React from 'react'
import './Timer.css'

interface TimerProps {
    countTo: Date,
    onComplete?: () => void
}

export const Timer = ({countTo, onComplete}: TimerProps) => {
    return(
        <div>
            <h1></h1>
        </div>
    )
}