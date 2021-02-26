import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import logo from '../assets/logo.png'



function Header() {

    return(
        <div style={HeaderStyle}>
            <Navbar/>
            <img style={imgStyle} src={logo} alt=""/>
            <div style={emptyDiv} ></div>
        </div>
    );
}

const HeaderStyle: CSSProperties = {
    height: '6rem',
    width: '100%',
    position: 'fixed',
    zIndex: 3,
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: '1rem',
    borderBottom: '1px solid #472C73',
    boxShadow: '0 0 3rem #472C73',
}

const imgStyle:CSSProperties = {
    height: '5rem',
    alignItems: 'center',
    justifyContent: 'center',
}

const emptyDiv:CSSProperties = {
    width: '2rem'
}


export default Header;