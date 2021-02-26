import React, { CSSProperties } from 'react';
import background from '../assets/background.png'
// import chewbacca from '../assets/chewbacca.jpg'
import Search from './Search';


function Content() {
    return (
        <div style={rootStyle}>
            <img style={bgStyle} src={background} alt=""/>
            {/* <img style={imgStyle} src={chewbacca} alt=""/> */}
            <Search />
        </div>
    )
}

const rootStyle:CSSProperties = {
    paddingTop: '6rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

// const imgStyle:CSSProperties = {
//     display: 'flex',
//     position: 'relative',
//     alignItems: 'center',
//     borderRadius: 50,
//     border: '1px solid yellow',
//     boxShadow: '0 0 3rem yellow',
//     height: '20rem'
// }

const bgStyle:CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -5
}

export default Content;