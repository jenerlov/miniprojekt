import { Component, CSSProperties } from "react";
import ReactDOM from "react-dom";
import { absoluteObject } from "./css";

interface Props {
    persistent?: boolean;
    closeDiv: () => void;  
}

class PlanetModal extends Component <Props> {
    element: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'planet.div';
    };
imgClicked =  () => {
    if(this.props.persistent) return;
     this.props.closeDiv();
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
            onClick={this.imgClicked}
            style={{...infoStyle, ...absoluteObject}}
        >
            {this.props.children}
            </div>,
            this.element,
        );
    }
}

const infoStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',

    display: 'flex',
    justifyContent: 'center',
    
}

export default PlanetModal;