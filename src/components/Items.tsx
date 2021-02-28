import React, {CSSProperties} from 'react';
import characters from '../assets/characters.jpg';
import planets from '../assets/planets.jpg';



function Items() {

    return (
        <div style={{...imgDiv}}>
        <img style={fullscreen} src={characters}  alt="" />
        <img style={fullscreen} src={planets} alt="" /> 
        <img style={fullscreen} src={characters} alt="" /> 
        <img style={fullscreen} src={planets} alt="" /> 
         <h2 style={{...imgText, ...textPosition}}></h2>
       
    </div>

    );
}

const imgDiv: CSSProperties = {
    position: 'relative',
     margin: '0.5rem',
     height: '20rem',
     width: '40rem',      
       
    }
    
 const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    //position: 'absolute',

 }


 const textPosition: CSSProperties = {
     position: 'absolute',
     margin: 0,
     left: '50%',
     top: '50%',
     transform: 'translate(-50%, -50%)'
 }

 const imgText: CSSProperties = {
    color: 'white',
    
 }

export default Items;

