import React from 'react';
import './Button.css';

interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'transparent';
  size?: 'sm' | 'md' | 'lg' | 'xs';
  onClick?: () => void;
  disabled?: boolean;
  icon?: string;
  width?: 'wide' | 'not-wide'
}

export const Button = ({ 
  label, 
  variant = 'primary', 
  size = 'md', 
  width='not-wide',
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={`ui-button ${variant} ${size} ${width}`} 
      {...props}
    >
      {label ? label : null}
      {props.icon ? <img src={props.icon} /> : null}
    </button>
  );
};