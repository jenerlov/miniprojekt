import React, { Component, CSSProperties } from 'react';
import movie1 from '../assets/logo.png';
import movie2 from '../assets/logo2.png';
import movie3 from '../assets/logo4.png';
import movie4 from '../assets/logo5.png';
import movie5 from '../assets/menu.png';
import movie6 from '../assets/background.png';
import movie7 from '../assets/characters.jpg';
import movie8 from '../assets/chewbacca.jpg';
import movie9 from '../assets/planets.jpg';
import movie10 from '../assets/trap.jpg';
import movie11 from '../assets/yodaError.png';
import movie12 from '../assets/starWarsLogo.png';
import MovieModal from './MovieModal';

interface Props{
    movies: Movie[]
}
interface State {
    selectedMovie?: string;
}
class MovieList extends Component<Props, State> {

    state: State = {
        selectedMovie: undefined
    }

    showInfo = (title: string) => {
        this.setState({ selectedMovie: title })
    }

    hideInfo = () => {
        this.setState({ selectedMovie: undefined })
    }

    render() {
        
        return(
            <div style={rootStyle}>
                <div style={centerDiv}>
                    {movies.map((movie) => (
                        <div style={imgDiv}>
                            <img onClick={() => this.showInfo(movie.info)} style={imgStyle} src={movie.img} alt=""/>
                            {this.state.selectedMovie === movie.info ? (
                                <MovieModal removeInfo={this.hideInfo}>
                                    <h1>{movie.info}</h1>
                                </MovieModal>
                            ): null}
                        </div>
                    ))}
                </div> 
            </div>
        )
    }
}

const rootStyle:CSSProperties = {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '5rem',
    overflowY: 'auto'
}

const centerDiv:CSSProperties = {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
}

const imgDiv:CSSProperties={
    height: '15rem',
    width: '10rem',
}

const imgStyle:CSSProperties = {
    height: '15rem',
    width: '9rem',
    objectFit: 'cover',
    border: '2px solid pink',
    borderRadius: 10,
    boxShadow: '0 0 1rem purple'
}

const textStyle:CSSProperties = {
    color: 'white'
}

export default MovieList;

interface Movie {
    img: string;
    info: string;
}

const movies: Movie[] = [
    {
        img: movie1,
        info: 'film 1'
    },
    {
        img: movie2,
        info: 'film 2'
    },
    {
        img: movie3,
        info: 'film 3'
    },
    {
        img: movie4,
        info: 'film 4'
    },
    {
        img: movie5,
        info: 'film 5'
    },
    {
        img: movie6,
        info: 'film 6'
    },
    {
        img: movie7,
        info: 'film 7'
    },
    {
        img: movie8,
        info: 'film 8'
    },
    {
        img: movie9,
        info: 'film 9'
    },
    {
        img: movie10,
        info: 'film 10'
    },
    {
        img: movie11,
        info: 'film 11'
    },
    {
        img: movie12,
        info: 'tom ruta'
    }
];