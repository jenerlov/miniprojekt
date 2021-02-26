import React, { CSSProperties } from 'react';

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
        <h2>Home</h2>
        <h2>Pricing</h2>
        <h2>About Us</h2>
        <h2>Contact</h2>
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

