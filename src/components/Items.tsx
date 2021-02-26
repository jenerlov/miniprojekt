import React, {CSSProperties} from 'react';



function Items() {
    const img = `../assets/.jpg`;
    
    
    return (
        <div style={gridItem}>
        <img src={img} style={fullscreen} alt="/" />
        <h2 style={centeredAbsolute}></h2>
        </div>

    );
}

const gridItem: CSSProperties = {
    position: 'relative',
    margin: '0.5rem',
    height: '100%'
}

const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%'

}



const fullscreen: CSSProperties = {
    width: '100%',
    height: '100%'

}

export default Items;