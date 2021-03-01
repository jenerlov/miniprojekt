import React, { CSSProperties } from 'react';
import film1 from '../assets/film1.jpg';
import film2 from '../assets/film2.jpg';
import film3 from '../assets/film3.jpg';
import film31 from '../assets/film31.jpg';
import film32 from '../assets/film32.jpg';
import film4 from '../assets/film4.jpg';
import film5 from '../assets/film5.jpg';
import film6 from '../assets/film6.jpg';
import film7 from '../assets/film7.jpg';
import film8 from '../assets/film8.jpg';
import film9 from '../assets/film9.jpeg';

function filmer (){
    return(
        <div>
          
        <img style={filmscreen} src={film1} alt="" /> 
        <img style={filmscreen} src={film2} alt="" /> 
        <img style={filmscreen} src={film3} alt="" /> 
        <img style={filmscreen} src={film31} alt="" /> 
        <img style={filmscreen} src={film32} alt="" /> 
        <img style={filmscreen} src={film4} alt="" /> 
        <img style={filmscreen} src={film5} alt="" /> 
        <img style={filmscreen} src={film6} alt="" /> 
        <img style={filmscreen} src={film7} alt="" /> 
        <img style={filmscreen} src={film8} alt="" /> 
        <img style={filmscreen} src={film9} alt="" /> 
        </div>
    )
}
const filmscreen: CSSProperties = {
    width: '15%',
    height: '15',
    objectFit: 'cover',
    position: 'relative',
    zIndex: 200,
    

 }

export default filmer;