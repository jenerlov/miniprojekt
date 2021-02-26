import React, { CSSProperties } from 'react';
import { Character } from './Search';


interface Props {
    starWarsList: Character[]
}

function CharacterGrid(props:Props) {
    return(
        <div style={rootStyle} >
            {props.starWarsList.map(character => (
                <div style={characterBoxStyle} >
                    <h1>{ character.name }</h1>
                    <p>Birth year: { character.birth_year }</p>
                    <p>Height: { character.height }cm</p>
                    <p>Mass: { character.mass }</p>
                    <p>Eye color: { character.eye_color }</p>
                </div>
            ))}
        </div>
    )
}

const rootStyle: CSSProperties = {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '10rem',
    
}
const characterBoxStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '30rem',
    border: '.1rem solid yellow',
    boxShadow: '0 0 2rem yellow',
    borderRadius: '2rem',
    margin: '1rem',
    color: 'white',
    background: 'black',
    opacity: '70%'
}

export default CharacterGrid;