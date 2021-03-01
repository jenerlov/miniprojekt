import React, { ChangeEvent, CSSProperties } from 'react';
import { absoluteObject } from './css';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

function Input(props: Props) {
    
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    return(
        <input style={{...absoluteObject, ...rootStyle}} value={props.value} onChange={handleInput} />
    )
}

const rootStyle: CSSProperties = {
    width: '30%',
    height: '5%',
    color: '#472C73',
    borderRadius: 50,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    left: '50%',
    top: '27%',
    fontSize: '1.7rem',
};

export default Input;