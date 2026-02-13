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
return(
        <div className={`ui-memory-card ${state}`} onClick={onClick}>
        <div className='memory-card-header' ><div className={`memory-card-status ${state}`} ></div>  <h1>{openDate.toLocaleDateString()}</h1></div>
        <h2>{title}</h2>
        {state === 'unlocked' ? <p>{textContent}</p> : <p>...</p>}
        <p>{author && `Autor: ${author}`}</p>
        </div>
)
}