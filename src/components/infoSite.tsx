import React, { Component, CSSProperties} from 'react';
import Galaxy from '../assets/info-pic/Galaxy.png';
import Planets from '../assets/info-pic/Planets.jpg';
import Ships from '../assets/info-pic/Ships.jpg';
import PlanetsMap from '../assets/info-pic/planetsmap.jpg'
import PlanetModal from './PlanetModal';
import { absoluteObject } from './css';
import GalaxyModal from './GalaxyModal';
import ShipsModal from './ShipsModal';





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
            <img src={Ships} alt="" style={imgStyle} onClick={this.openInfoDiv}/>    
           
           
            {this.state.isInfoDivOpen ? ( 
                <PlanetModal closeDiv ={this.closeInfoDiv}>    
                <div>
               <img src={PlanetsMap} alt="" style={modalContainer}></img>    
                 </div> 
             
                </PlanetModal>
          ): null
          }
               {this.state.isInfoDivOpen ? ( 
                <GalaxyModal closeDiv ={this.closeInfoDiv}> 
              <div style={modalContainer}></div>
                </GalaxyModal>
          ): null
         }
            {this.state.isInfoDivOpen ? ( 
                <ShipsModal closeDiv ={this.closeInfoDiv}> 
              <div style={modalContainer}>
                  <div style={container}>
                   
                  </div>
              </div>
                </ShipsModal>
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
    overflowY: 'hidden',
}
 const centeredAbsolute: CSSProperties = {
    position: 'absolute',
    objectFit: 'cover',
    marginTop: '5rem',
    transform: 'translate(-50%, -50%)',
    overflowY: 'hidden',
 }

const imgStyle: CSSProperties = {
    width: '30%',
    height: '80%',
    padding: '.5rem',  
    cursor: 'pointer',
    border: 'solid .2rem #472C73'
}

const modalContainer: CSSProperties = {
    height: '100%',
    width: '100%',
    background: 'black',
  
}

const container: CSSProperties = {
    width: '50rem',
    height: '100%',
    marginTop: '4rem',
    left: '50%',
    top: '50%',
    
}




export default InfoSite;

