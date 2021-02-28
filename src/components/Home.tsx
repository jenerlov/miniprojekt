import React, { CSSProperties } from 'react';
import chewbacca from '../assets/chewbacca.jpg'
import { borderPurple, absoluteObject } from './css';

function Home () {
    return(
        <div style={{...rootStyle}}>
            <img style={{...imgStyle, ...borderPurple, ...absoluteObject}} src={chewbacca} alt=""/>
        </div>
    )
}

const rootStyle:CSSProperties = {
    marginTop: '6rem',
    height: '100%',
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

