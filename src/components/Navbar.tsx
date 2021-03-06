import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

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
            <div>
                <Link to="/" style={linkStyle}>
                    <h2  className="hover">Home</h2>
                </Link>
                <Link to="planets" style={linkStyle}>
                    <h2 className="hover">Planets</h2>
                </Link>
                <Link to="movies" style={linkStyle}>
                    <h2 className="hover">Movies</h2>
                </Link>
                <Link to="search" style={linkStyle}>
                    <h2 className="hover">Search</h2>
                </Link>
            </div>
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
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all 1s',
})

const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: '#472C73',
    textShadow: '0 0 1rem #472C73',
    fontFamily: 'Press Start 2P',
    padding: '.5rem',
}

export default Navbar;

