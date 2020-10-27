/***********************************************************************
@file     App.js
@author   Collin Furth
@date     10/07/2020
@ver      0.1
@brief
  Application Entry Point

@details
  Rev 0.1 - CF - Initial Implementation
  Rev 0.2 - JH - Revise Routing
***********************************************************************/

import React from 'react';
import Homepage from './components/HomepageHooks.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gender: 'Male',
      name_length: 'Long'
  };
  };

handleGenderToggle = () => {
  if( this.state.gender === 'Male' ) {
      this.setState({gender: 'Female'});
  }
  else if( this.state.gender === 'Female' ) {
      this.setState({ gender: 'Male' });
  }
  else
      alert( 'Please select a gender!' );
}

handleNameToggle = () => {
  if( this.state.name_length === 'Long' ) {
      this.setState({name_length: 'Short'});
  }
  else if( this.state.name_length === 'Short' ) {
      this.setState({name_length: 'Long'});
  }
  else
      alert( 'Please select a length!' );
}

  render() {
    return (
          <main className="App">
            <Homepage
            gender = {this.state.gender}
            name_length = {this.state.name_length}
            genderClick={this.handleGenderToggle}
            nameClick={this.handleNameToggle}
            />
          </main>
    );
  }
}

export default App;
