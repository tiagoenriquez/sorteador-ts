import React, { ChangeEvent } from 'react';
import './index.css';

interface InputProp {
    autoFocus: boolean;
    id?: string;
    onChange?(event: ChangeEvent<HTMLInputElement>): void;
    placeholder?: string;
    readOnly: boolean;
    value: string;
}

const Input: React.FC<InputProp> = ({ autoFocus, onChange, id, placeholder, readOnly, value }) => {
    return (
        <input
            autoFocus={autoFocus}
            id={id}
            onChange={onChange} 
            placeholder={placeholder} 
            readOnly={readOnly}
            value={value}
        />
    );
}

export default Input;