import React from 'react';
import './TextInput.css';
import { Button } from '../Button/Button';

interface TextInputProps {
    label?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    sendButton: boolean;
    sendButtonText?: string;
    onSend?: () => void;
    isRequired?: boolean;
    type?: 'text' | 'password' | 'email';
}

export const TextInput = ({ label='',  onChange, placeholder, sendButton, sendButtonText, onSend, isRequired, type }: TextInputProps) => {
    return (
        <div className='ui-text-input'>
           <div>
            {label == '' ? null : <label>{label}</label>}
            {isRequired ? <span style={{color: 'red'}}>*</span> : null}
           </div>
            <div className='ui-text-input-w-btn' >
                <input 
                type={type || "text"} 
                placeholder={placeholder} 
                onChange={(e) => onChange && onChange(e.target.value)} 
                required={isRequired}
            />
            {sendButton ? <Button label={sendButtonText || 'Send'} variant='secondary' size='sm' onClick={onSend} /> : null}
            </div>
        </div>
    )
}