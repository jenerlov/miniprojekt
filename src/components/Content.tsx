import React, { CSSProperties, Props, useDebugValue } from 'react';
import Home from './home/Home';
import Search from './search/Search';
import background from '../assets/background.png';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import MovieList from './movie/MovieList';
import PlanetSite from './Planets/PlanetSite';




function Content() {

    return (
        <div style={rootStyle}>
            <img style={{...bgStyle}} src={background} alt=""/>
            <Switch>

                <ErrorBoundary>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path ="/planets">
                         <PlanetSite/>
                    </Route>
                    <Route path="/movies">
                        <MovieList movies={[]}/>
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

const style:CSSProperties = {
    height: '100%',
    width: '100%',
    zIndex: 100
}

export default Content;