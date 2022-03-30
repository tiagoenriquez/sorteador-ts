import React from 'react';
import './index.css';

interface ButtonProp {
    children: string;
    largo: boolean
    onClick(): void;
}

const Button: React.FC<ButtonProp> = ({ children, largo, onClick }) => {

    let className = "";

    if (largo) {
        className = "button-largo";
    } else {
        className = "button-curto";
    }

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;