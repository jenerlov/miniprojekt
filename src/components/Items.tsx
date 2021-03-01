import React, {CSSProperties} from 'react';
import characters from '../assets/characters.jpg';
import planets from '../assets/planets.jpg';


function Items() {
    return (
        <div style={{...imgContainer, ...centeredAbsolute}}>
            <div>
                <img src={characters} alt="" style={imgStyle}/>
            </div>
            <div>
            <img src={characters} alt="" style={imgStyle}/>
            </div>
        </div>
    )   
}

const imgContainer: CSSProperties = {
    position: 'relative',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    display: 'flex',
    justifyContent: 'center',
    

}
 const centeredAbsolute: CSSProperties = {
     position: 'absolute',
     marginTop: '5rem',
     objectFit: 'cover',
 }

const imgStyle: CSSProperties = {
    width: '100%',
    height: '100%',
      
}

export default Items;

