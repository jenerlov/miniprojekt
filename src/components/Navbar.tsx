import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    isOpen: boolean;
    onSidebarClose: () => void;
}


function Navbar(props: Props) {
    return(
        <aside
            style={rootStyle(props)}
            onClick={props.onSidebarClose}
        >
        <Link to="/">
            <h2>Home</h2>
        </Link>
        <Link to="info">
            <h2>info</h2>
        </Link>
        <Link to="search">
            <h2>Search</h2>
        </Link>
    </aside>
);
    
}

const rootStyle = (props: Props): CSSProperties => ({
    position: 'fixed',
    left: props.isOpen ? 0 : '-100%',
    top: 0,
    bottom: 0,
    width: '100%',
    background: props.isOpen ? 'black' : 'transparent',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 1s'
})
export default Navbar;

