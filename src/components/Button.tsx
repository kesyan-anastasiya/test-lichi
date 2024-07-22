import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, type = 'button' }) => (
  <button type={type} className="bg-blue-500 text-white py-2 px-4 rounded">
    {label}
  </button>
);

export default Button;