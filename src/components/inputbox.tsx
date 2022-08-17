import React, { FC, useState } from 'react';

type InputProps = {
    value?:string;
    placeholder?: string;
} & ({
    type?: "text";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} | {
    type: "textarea";
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
})

const InputBox: FC<InputProps> = (props): JSX.Element => {

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement>)=>{
        props.onChange?.(e);
    }

    return (
        <>
            <input
            value={props.value}
            onChange={handleInputChange}
            type={props.type}
            placeholder={props.placeholder}
            className="input form-control"
            />
        </>
    );
};

export default InputBox;
