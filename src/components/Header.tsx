import React, { CSSProperties } from 'react';
import Navbar from './Navbar';



function Header() {
    return(
    <div style={HeaderStyle}>
        <Navbar/>
        <h1>Hangry</h1>
    </div>
    )
}

const HeaderStyle: CSSProperties = {
    height: '4rem',
    width: '100%',

    backgroundColor: 'orange',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

}
export default Header;