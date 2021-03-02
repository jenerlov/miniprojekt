import React, { CSSProperties } from 'react';
import Home from './Home';
import Search from './Search';
import background from '../assets/background.png';
import { Route, Switch } from 'react-router-dom';
import Items from './Items';
import ErrorBoundary from './ErrorBoundary';


function Content() {
    // (null as any).abc;
    return (
        // <div className="backgroundImg" style={{...bgStyle, backgroundImage: `url(${background})`}}></div>
        <div style={rootStyle}>
            <img style={{...bgStyle}} src={background} alt=""/>
            <Switch>
                <ErrorBoundary>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path ="/info">
                        <Items/>
                    </Route>
                    <Route path="/search">
                        <Search />
                    </Route>
                </ErrorBoundary>
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