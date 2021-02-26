import React, { CSSProperties } from 'react';
import Header from './Header';
import Content from './Content';
import { fullScreen } from './css';



function Layout() {
    return (
       <div style={{...fullScreen, ...rootStyle}}>
        <Header/>
        <Content/>
        </div>
    )
}

const rootStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
}

export default Layout;