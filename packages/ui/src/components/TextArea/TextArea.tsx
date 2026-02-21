import React from 'react';
import './TextArea.css';


interface TextAreaProps {
    label?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export const TextArea = ({ label='',  onChange, placeholder }: TextAreaProps) => {
    return (
        <div className='ui-text-input'>
           {label == '' ? null : <label>{label}</label>}
            <div className='ui-text-input-w-btn' >
                <textarea 
                placeholder={placeholder} 
                onChange={(e) => onChange && onChange(e.target.value)} 
                rows={5}
                cols={50}
            >
                </textarea>
            </div>
        </div>
    )
}