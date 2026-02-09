import React from 'react';
import './Alert.css';
import { Button } from '../Button/Button';

interface AlertProps {
    title: string;
    message: string;
    alertType?: 'success' | 'reload' | 'decision';
    onClose?: () => void;
}

export const Alert = ({ alertType, title, message }: AlertProps) => {
    return(
        <div className={`ui-alert ${alertType}`} >
            <h3>{title}</h3>
            <p>{message}</p>
            {alertType === 'success' ? (
                <Button label="OK" variant="secondary" />
            )
        : alertType === 'reload' ? (
             <Button label="Odśwież stronę" variant="secondary" size='sm' onClick={() => window.location.reload()} />
        ):(
            <div>
                <Button label="OK" variant="secondary" size='sm' onClick={() => alert('Zamknięto alert!')} />
                <Button label="Anuluj" variant="secondary" size='sm' onClick={() => alert('Zamknięto alert!')} />
            </div>

        )}
            
        </div>
    )
};