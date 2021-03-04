import React, { Component, CSSProperties} from 'react';
import Planets from '../../assets/info-pic/Planets.jpg';
import PlanetsMap from '../../assets/info-pic/planetsmap.jpg'
import { absoluteObject } from '../css';
import PlanetModal from './PlanetModal';



interface Props {}
interface State {
    isInfoDivOpen: boolean
}

class PlanetSite extends Component <Props,State> {

    state: State = {
        isInfoDivOpen: false

    }

  
    openInfoDiv = () => {
        this.setState({ isInfoDivOpen: true})      
            
    }

    closeInfoDiv = () => {
        this.setState({ isInfoDivOpen: false})
    }

    render() {
    return (
        <div style={{...imgContainer,...absoluteObject}}>
            <img src={Planets} alt="" style={imgStyle} onClick={this.openInfoDiv}/>
                <p style={{...absoluteObject, ...textStyle}}> Click here for planets</p>
            {this.state.isInfoDivOpen ? ( 
                <PlanetModal closeDiv ={this.closeInfoDiv}>    
                <div style={modalContainer}>
                <img style={planetStyle} alt="" src={PlanetsMap}></img>
              </div> 
                </PlanetModal>
          ): null
        
            }
</div>
);
}}


const imgContainer: CSSProperties = {
    position: 'relative',
    margin: 0,
    height: '20rem',
    width: '100%',
    left: '50%',
    top: '50%',
   
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}


const imgStyle: CSSProperties = {
    width: '25%',
    height: '80%',  
    cursor: 'pointer',
    borderRadius: '3rem',
    boxShadow: '0 0 3rem white',
    objectFit: 'cover',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    
}

const modalContainer: CSSProperties = {
    position: 'relative',
    height: '100%',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
      
}

const planetStyle:CSSProperties = {
    height: '25rem',
    left: '50%',
    top: '50%',
       
}

const textStyle: CSSProperties = {
    left: '50%',
    top: '50%',
    color: 'white',
    fontSize: '.8rem',
}
export default PlanetSite;

