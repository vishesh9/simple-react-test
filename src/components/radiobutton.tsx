import React, { FC, useState } from 'react';

type InputProps = {
    name?:string;
    value?:string;
    placeholder?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: FC<InputProps> = (props): JSX.Element => {

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        props.onChange?.(e);
    }

    return (
        <span>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                id={props.value}
                onChange={handleInputChange}
            />
            <label htmlFor={props.value}>{props.value}</label>
        </span>
    );
};

export default RadioButton;
