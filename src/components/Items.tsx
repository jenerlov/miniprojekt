import React, {CSSProperties} from 'react';
import characters from '../assets/characters.jpg';



function Items() {
    
    return (
        <div style={{...imgContainer, ...centeredAbsolute}}>
            
            <img src={characters} alt="" style={imgStyle}/>
            <img src={characters} alt="" style={imgStyle}/>
            <img src={characters} alt="" style={imgStyle}/>
            <img src={characters} alt="" style={imgStyle}/>    
        </div>
    )   
}

const imgContainer: CSSProperties = {
    position: 'relative',
    margin: 0,
    height: '15rem',
    left: '50%',
    top: '50%',
    
    display: 'flex',
    justifyContent: 'center', 
}
const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    objectFit: 'cover',
    marginTop: '5rem',
    transform: 'translate(-50%, -50%)',
}

const imgStyle: CSSProperties = {
    width: '80%',
    height: '80%',
    padding: '.5rem',  
}



export default Items;

