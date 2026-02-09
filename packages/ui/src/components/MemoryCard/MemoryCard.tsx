import React from 'react';
import './MemoryCard.css'

interface MemoryCardProps {
    title: string;
    state?: 'locked' | 'unlocked' | 'soon';
    textContent: string;
    openDate: Date;
    onClick?: () => void;
}

const MemoryCard = ({ title, state='locked', textContent, openDate, onClick }: MemoryCardProps) => {
return(
    <div>
        <div className={`ui-memory-card ${state}`} onClick={onClick}>
        <h1>{openDate.toLocaleDateString()}</h1>
        </div>
    </div>
)
}