import React, { Component, CSSProperties } from 'react';
import CharacterGrid from './CharacterGrid';
import ErrorBoundary from './ErrorBoundary';
import Input from './input';


interface Props{}

interface State{
    inputValue: string;
    starWarsList: Character[];
}

class Search extends Component<Props, State> {
    private readonly STAR_URL = 'https://swapi.dev/api/people/';

    state: State = {
        inputValue: '',
        starWarsList: []
    }

    handleNewInputValue = (value: string) => {
        this.setState({ inputValue: value })
    }

    componentDidUpdate(_: Props, prevState: State) {
        const { inputValue } = this.state;
        if(inputValue && prevState.inputValue !== inputValue) {
            this.fetchCharacterFromApi();
        }
    }

    async fetchCharacterFromApi() {
        try {
            const { inputValue } = this.state;
            const url = this.STAR_URL + '?search=' + inputValue;
            const response = await fetch(url);
            const result: StarResponse = await response.json();
            this.setState({ starWarsList: result.results });
        } catch (error: unknown) {
            console.log(error);
        }
    }
    
    render() {
        return(
            <div style={rootStyle}>
                <h3 style={{...h1style}} >Search for a character</h3>
                <Input 
                    value={this.state.inputValue}
                    onChange={this.handleNewInputValue}
                />
                <ErrorBoundary>
                    <CharacterGrid starWarsList={this.state.starWarsList}/>
                </ErrorBoundary>
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

const h1style: CSSProperties = {
    position: 'absolute',
    color: 'white',
    top: '20%',
    textShadow: '0 0 1rem yellow',
}


  

export default Search;

interface StarResponse {
    results: Character[]
}

export interface Character {
    name: string;
    height: string;
    mass: string;
    birth_year: string;
    eye_color: string;
}