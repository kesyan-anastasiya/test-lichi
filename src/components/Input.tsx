import React from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  </div>
);

export default Input;