import React, { Component, CSSProperties, ErrorInfo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import yoda from '../assets/yodaError.png';
import '../style.css'

interface Props extends RouteComponentProps{}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {

    state: State = {
        hasError: false
    }

    static getDerivedStateFromError(): State {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo)
    }

    goBackButton = () => {
        this.props.history.goBack();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={rootStyle}>
                    <p style={textStyle}>"The greatest teacher, failure is" <br/> -Yoda </p>
                    <img style={imgStyle} src={yoda} alt=""/>
                    <h3 className="error-hover" style={buttonStyle} onClick={this.goBackButton}>Press here to go back</h3>
                </div>
            );
        }
        return this.props.children
    }
}

const rootStyle:CSSProperties = {
    background: 'rgb(60, 60, 59)',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem'
}

const imgStyle:CSSProperties = {
    height: '50%'
}

const textStyle: CSSProperties = {
    paddingTop: '15rem',
    display: 'flex',
    textAlign: 'right',
    lineHeight: '1.5rem'
}

const buttonStyle:CSSProperties = {
    cursor: 'pointer'
}

export default withRouter(ErrorBoundary);