import React, { CSSProperties } from 'react';
import chewbacca from '../assets/chewbacca.jpg'
import { borderPurple, absoluteObject } from './css';

function Home () {
    return(
        // <button style={{...rootStyle, ...imgStyle, ...absoluteObject}}>
        //     press here
        // </button>
        <img style={{...rootStyle, ...imgStyle, ...borderPurple, ...absoluteObject}} src={chewbacca} alt=""/>
    )
}

const rootStyle:CSSProperties = {
    marginTop: '6rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}

const imgStyle:CSSProperties = {
    left: '50%',
    top: '55%',
}


export default Home;

