import React from 'react';
import './TextInput.css';
import { Button } from '../Button/Button';

interface TextInputProps {
    label?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    sendButton: boolean;
    sendButtonText?: string;
}

export const TextInput = ({ label='',  onChange, placeholder, sendButton, sendButtonText }: TextInputProps) => {
    return (
        <div className='ui-text-input'>
           {label == '' ? null : <label>{label}</label>}
            <div className='ui-text-input-w-btn' >
                <input 
                type="text" 
                placeholder={placeholder} 
                onChange={(e) => onChange && onChange(e.target.value)} 
            />
            {sendButton ? <Button label={sendButtonText || 'Wyślij'} variant='secondary' size='sm' /> : null}
            </div>
        </div>
    )
}