import React, { ChangeEvent, CSSProperties } from 'react';

interface Props {
    value: string;
    onChange: (value: string) => void;
}

function Input(props: Props) {
    
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        props.onChange(event.target.value)
    }

    return(
        <input style={rootStyle} value={props.value} onChange={handleInput} />
    )
}

const rootStyle: CSSProperties = {
    position: 'relative',
    flex: 1,
    borderRadius: 100,
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    outline: 'none'
};

export default Input;