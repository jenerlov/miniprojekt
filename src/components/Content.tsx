import React, { CSSProperties } from 'react';
import Home from './Home';
import Search from './Search';
import background from '../assets/background.png';
import { Route, Switch } from 'react-router-dom';
import Items from './Items';
import Filmer from './Filmerna'

function Content() {
   
    return (
        // <div className="backgroundImg" style={{...bgStyle, backgroundImage: `url(${background})`}}></div>
        <div style={rootStyle}>
            <img style={{...bgStyle}} src={background} alt=""/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path ="/info">
                    <Items/>
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/Filmer">
                    < Filmer/>
                </Route>
            </Switch>
        </div>
    )
}

const rootStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginTop: '5rem',
}

const bgStyle:CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

export default Content;