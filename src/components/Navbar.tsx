import React, { CSSProperties } from 'react';
import menu from '../assets/menu.png'

function Navbar() {
    return(
        <img style={iconStyle} src={menu} alt=""/>
    )
}

const iconStyle: CSSProperties = {
    width: '2rem',
    cursor: 'pointer'
}

export default Navbar;

