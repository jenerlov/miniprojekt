import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo4.png'
import menu from '../assets/menu.png'

interface Props {
    onMenuClick: () => void;
}

function Header(props: Props) {

    return(
        <div style={rootStyle}>
            <img onClick={props.onMenuClick}style={iconStyle} src={menu} alt=""/>
            <Link to ="/">
                <img style={imgStyle} src={logo} alt=""/>
            </Link>
            <div style={emptyDiv} ></div>
        </div>
    )
}

const rootStyle: CSSProperties = {
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
    height: '9rem',
    alignItems: 'center',
    justifyContent: 'center',
}

const emptyDiv:CSSProperties = {
    width: '2rem'
}

const iconStyle: CSSProperties = {
    width: '2rem',
    cursor: 'pointer'
}

export default Header;