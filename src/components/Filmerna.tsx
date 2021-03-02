import React, { CSSProperties } from 'react';
import film1 from '../assets/movies/film1.jpg';
import film2 from '../assets/movies/film2.jpg';
import film3 from '../assets/movies/film3.jpg';
import film31 from '../assets/movies/film31.jpg';
import film32 from '../assets/movies/film32.jpg';
import film4 from '../assets/movies/film4.jpg';
import film5 from '../assets/movies/film5.jpg';
import film6 from '../assets/movies/film6.jpg';
import film7 from '../assets/movies/film7.jpg';
import film8 from '../assets/movies/film8.png';
import film9 from '../assets/movies/film9.jpeg';

const openModal = () =>{
    alert('test');
}

function filmer (){
    return(
        <div style={rootstyle}> 
            <div style={{ ...scren}}>
                
            <img onClick={openModal} style={filmescren} src={film1} alt="" /> 
            <img style={filmescren} src={film2} alt="" /> 
            <img style={filmescren} src={film3} alt="" /> 
            <img style={filmescren} src={film31} alt="" /> 
            <img style={filmescren} src={film32} alt="" /> 
            <img style={filmescren} src={film4} alt="" /> 
            <img style={filmescren} src={film5} alt="" /> 
            <img style={filmescren} src={film6} alt="" /> 
            <img style={filmescren} src={film7} alt="" /> 
            <img style={filmescren} src={film8} alt="" /> 
            <img style={filmescren} src={film9} alt="" /> 
            <div style={filmescren}></div>
            </div>
        </div>
    )
}
const filmescren: CSSProperties = {
    width: '13rem',
    height: '20rem',
    objectFit: 'cover',
    border: '2px solid white',
  
 }
const scren: CSSProperties={
    width:'70%',
    justifyContent:'space-between',
    display:'flex',
    marginTop: '5rem',
    flexWrap:'wrap',
    alignItems:'center',
    
}
const rootstyle: CSSProperties={
    width:'100%',
    display: 'flex',
    justifyContent:'center',
    position: 'absolute',
    alignItems:'center',
}
export default filmer;