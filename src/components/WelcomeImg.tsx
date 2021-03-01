import React, { Component, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import { absoluteObject } from './css';


interface Props {
    persistant?: boolean;
    removeImg: () => void;
}
class WelcomeImg extends Component<Props> {
    element: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = 'welcome-img'
    }

    handleOnClick = () => {
        if (this.props.persistant) return;
        this.props.removeImg();
    }

    componentDidMount() {
        document.body.appendChild(this.element);
    }
    
    componentWillUnmount() {
        document.body.removeChild(this.element);
    }

    render() {
        return ReactDOM.createPortal(
            <div 
                onClick={this.handleOnClick}
                style={{...absoluteObject, ...imgStyle}}
            >
                {this.props.children} 
            </div>, 
            this.element
        )

    }
}

const imgStyle:CSSProperties = {
    left: '50%',
    top: '55%',
}

export default WelcomeImg;