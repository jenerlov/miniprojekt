import React, { CSSProperties } from 'react';
import Navbar from './Navbar';
import logo from '../assets/logo.png'
import { isPropertySignature } from 'typescript';
import menu from '../assets/menu.png'

interface Props {
    onMenuClick: () => void;
}



function Header(props: Props) {

    return(
    <div style={HeaderStyle}>
        <img onClick={props.onMenuClick}style={iconStyle} src={menu} alt=""/>
        <img style={imgStyle} src={logo} alt=""/>
        <div style={emptyDiv} ></div>
    </div>
    )
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
const headerStyle: CSSProperties = {
    position: 'fixed',
    background: 'black',
    zIndex: 100,
    left: 0,
    top: 0,
    right: 0,
    height: '5rem',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
};
const iconStyle: CSSProperties = {
    width: '2rem',
    cursor: 'pointer'
}

export default Header;