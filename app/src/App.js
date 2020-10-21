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
        length: 'Long'
    };
  };

  render() {
    return (
      <html>
        <body>
          <main className="App">
            <Homepage gender = {this.state.gender} length = {this.state.length}/>
          </main>
        </body>
      </html>
    );
  }
}

export default App;
