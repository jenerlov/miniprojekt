import React, { CSSProperties } from 'react';
import '../style.css'

function Footer() {
    return(
        <div style={rootStyle}>
            <a className="hoverLink" style={linkStyle} href="https://icons8.com/"><p>icons8.com</p></a>
        </div>
    )
}

const rootStyle:CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    background: 'black',
    height: '3rem',
    paddingTop: '1.5rem',
    paddingRight: '1rem'
}

const linkStyle:CSSProperties = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#472C73',
}

export default Footer;