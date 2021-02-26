import React, { CSSProperties } from 'react';
import Items from './Items';

function Content() {
    const sectionIds = ['charachters', 'planets'];
    return (
        <div style={rootStyle}>
            {sectionIds.map((value) => <Items/>)}
        </div>
    )
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    background: 'white'
}

export default Content;