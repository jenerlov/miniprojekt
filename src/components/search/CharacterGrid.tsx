import React, { CSSProperties } from 'react';
// import { absoluteObject } from './css';
import { Character } from './Search';


interface Props {
    starWarsList: Character[]
}

function CharacterGrid(props:Props) {    
    return(
        <div style={{...rootStyle}} >
            {props.starWarsList.map(character => (
                <div style={{ ...characterBoxStyle}} >
                    <h3 style={nameStyle}>{ character.name }</h3>
                    <div style={textStyle}>
                        <p>Birth year: { character.birth_year }</p>
                        <p>Height: { character.height }cm</p>
                        <p>Mass: { character.mass }</p>
                        <p>Eye color: { character.eye_color }</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '30%',
    padding: '1rem',
}
const characterBoxStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '20rem',
    border: '1px solid #472C73',
    borderRadius: '2rem',
    margin: '1rem',
    color: 'white',
    background: 'black',
    opacity: '70%',
    fontSize: '.7rem',
    boxShadow: '0 0 2rem #472C73',
    padding: '.3rem'
}

const textStyle:CSSProperties = {
    textAlign: 'left',
    fontSize: '.7rem',
    lineHeight: '1rem'
}

const nameStyle:CSSProperties = {
    fontSize: '1rem',
    paddingBottom: '.2rem'
}

export default CharacterGrid;