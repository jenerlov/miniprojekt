import React, { Component, CSSProperties} from 'react';
import Galaxy from '../assets/info-pic/Galaxy.png';
import Planets from '../assets/info-pic/Planets.jpg';
import Ships from '../assets/info-pic/Ships.jpg';
import PlanetsMap from '../assets/info-pic/planetsmap.jpg'
import PlanetModal from './PlanetModal';
import { absoluteObject} from './css';
import GalaxyModal from './GalaxyModal';






interface Props {}
interface State {
    isInfoDivOpen: boolean
}

class InfoSite extends Component <Props,State> {

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
            <img src={Planets} alt="" style={imgStyle} onClick={this.openInfoDiv }/>
            <img src={Galaxy} alt="" style={imgStyle} onClick={this.openInfoDiv}/>    
              
           
           
            {this.state.isInfoDivOpen ? ( 
                <PlanetModal closeDiv ={this.closeInfoDiv}>    
                <div style={modalContainer}>
                <img style={{...planetStyle, ...absoluteObject}} alt="" src={PlanetsMap}></img>
              </div> 
             
                </PlanetModal>
          ): null
          }
               {this.state.isInfoDivOpen ? ( 
                <GalaxyModal closeDiv ={this.closeInfoDiv}> 
                 <div style={modalContainer}>
                   <span style={textStyle}></span>
              </div>
                </GalaxyModal>
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
    justifyContent: 'center', 

}
//  const centeredAbsolute: CSSProperties = {
//     position: 'absolute',
//     objectFit: 'cover',
//     marginTop: '5rem',
//     transform: 'translate(-50%, -50%)',
//     overflowY: 'hidden',
//  }

const imgStyle: CSSProperties = {
    width: '25%',
    height: '80%',
    padding: '.5rem',  
    cursor: 'pointer',
    border: 'solid 2px #472C73',
 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
}

const modalContainer: CSSProperties = {
    padding: '1rem',
    position: 'relative',
    background: 'rgb(0,0,0,0.9)',
    opacity: '0.9',
    height: '100%',
    width: '100%',
    zIndex: 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
      
}

const planetStyle:CSSProperties = {
    left: '50%',
    top: '50%',
       
}

const textStyle: CSSProperties = {
    color: 'black',
}
export default InfoSite;

