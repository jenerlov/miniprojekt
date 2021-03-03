import { Component, CSSProperties } from "react";
import ReactDOM from "react-dom";

interface Props {
    persistent?: boolean;
    closeDiv: () => void;  
}

class infoModal extends Component <Props> {
    element: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.id = 'info-Div';
    };
imgClicked =  () => {
    if(!this.props.persistent){
     (this.props.closeDiv());
    }
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
            style={infoStyle}
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

    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
}

export default infoModal;