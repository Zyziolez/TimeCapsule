import React from 'react';
import './MemoryCard.css'

interface MemoryCardProps {
    title: string;
    state?: 'locked' | 'unlocked' | 'soon';
    textContent: string;
    openDate: Date;
    onClick?: () => void;
    author?: string;
    isPublic: boolean;
}

export const MemoryCard = ({ title, state='locked', textContent, openDate, onClick, author='Unknown', isPublic }: MemoryCardProps) => {
    state = openDate > new Date() ? 'locked' : 'unlocked';
return(
        <div className={`ui-memory-card ${state}`} onClick={onClick}>
        <div className='memory-card-header' >
            <div className={`memory-card-status ${state}`} ></div>
            <p>{openDate.toLocaleDateString()}</p>
        </div>
        <h3 className='memory-card-title' >{title}</h3>
        <div className='memory-card-info' >
            {state === 'unlocked' ? <p>{textContent}</p> : <p>...</p>}
        <p>{author && `Autor: ${author}`}</p>
        </div>
        </div>
)
}