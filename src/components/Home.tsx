import React, { Component, CSSProperties } from 'react';
import trap from '../assets/trap.jpg'
import { borderPurple, absoluteObject } from './css';
import WelcomeImg from './WelcomeImg';
import '../style.css'
import ErrorBoundary from './ErrorBoundary';

interface Props {}
interface State {
    isImgVisable: boolean;
}
class Home extends Component<Props, State> {

    state: State = {
        isImgVisable: false
    }

    showImg = () => {
        this.setState({ isImgVisable: true })
    }

    hideImg = () => {
        this.setState({ isImgVisable: false })
    }

    render() {

        return(
            <div style={{...rootStyle, ...positionCenter, ...absoluteObject}}>
                <h2 className="hover" style={textStyle} onClick={this.showImg}>I dare you to <br/> press here...</h2>
                {this.state.isImgVisable ? (
                    <WelcomeImg removeImg={this.hideImg}>
                        <img style={{...borderPurple, ...cursor}} src={trap} alt=""/> 
                    </WelcomeImg>
                ): null}
            </div>
        );
    }
}

const rootStyle:CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
}

const positionCenter:CSSProperties = {
    left: '50%',
    top: '55%',
}

const textStyle:CSSProperties = {
    color: 'white',
    cursor: 'pointer'
}

const cursor:CSSProperties = {
    cursor: 'pointer'
}

export default Home;

