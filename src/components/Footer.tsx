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
    width: '100%',
    paddingTop: '1.5rem',
    paddingRight: '1rem',
    position: 'fixed',
    bottom: 0,
    left: 0,
}

const linkStyle:CSSProperties = {
    textDecoration: 'none',
    cursor: 'pointer',
    color: '#472C73',
}

export default Footer;