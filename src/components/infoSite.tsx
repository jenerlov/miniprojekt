import React, { Component, CSSProperties} from 'react';
import characters from '../assets/info-pic/characters.jpg'
import Naboo from '../assets/info-pic/naboo.jpg'
import Movies from '../assets/info-pic/movies.jpg'
import Sw from '../assets/info-pic/sw.jpg'
import InfoModal from './infoModal';

interface Props {}
interface State {
    isInfoDivOpen: boolean
}

class InfoSite extends Component <Props, State> {

    state: State = {
        isInfoDivOpen: false
    }
  
    openInfoDiv = () => {
        this.setState({ isInfoDivOpen: true})
        console.log('hej')
        
            
    }

 closeInfoDiv = () => {
        this.setState({ isInfoDivOpen: false})
    }
    render() {
    return (
        <div style={{...imgContainer, ...centeredAbsolute}}>
            <img src={characters} alt="" style={imgStyle} onClick={this.openInfoDiv }/>
            <img src={Naboo} alt="" style={imgStyle} />
            <img src={Movies} alt="" style={imgStyle}/>    
            <img src={Sw} alt="" style={imgStyle}/> 
           
            {this.state.isInfoDivOpen ? ( 
                <InfoModal persistent closeDiv ={this.closeInfoDiv}> 
                {this.openInfoDiv}
            </InfoModal>

        ): null
      }
</div>
);
}}


const imgContainer: CSSProperties = {
    position: 'relative',
    margin: 0,
    height: '15rem',
    width: '100%',
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
    width: '20%',
    height: '80%',
    padding: '.5rem',  
    cursor: 'pointer',
    border: 'solid .2rem #472C73'
}



export default InfoSite;

