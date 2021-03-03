import React, { Component, CSSProperties } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    persistant?: boolean;
    removeInfo: () => void;
}

class MovieModal extends Component<Props> {
    element: HTMLDivElement;

    constructor(props: Props) {
        super(props);
        this.element = document.createElement('div');
        this.element.className = 'movie-info'
    }

    handleOnclick = () => {
        if (this.props.persistant) return;
        this.props.removeInfo();
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
                onClick={this.handleOnclick}
                style={rootStyle}
            >
                {this.props.children}
            </div>,
            this.element
        )
    }
}

const rootStyle:CSSProperties = {
    width: '100%',
    height: '100%',
    color: 'red',
    background: 'white'
}

export default MovieModal;