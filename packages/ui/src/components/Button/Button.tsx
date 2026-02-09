import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' ;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ 
  label, 
  variant = 'primary', 
  size = 'md', 
  ...props 
}: ButtonProps) => {
  return (
    <button 
      className={`ui-button ${variant} ${size}`} 
      {...props}
    >
      {label}
    </button>
  );
};