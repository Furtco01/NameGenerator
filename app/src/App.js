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
import HomePage from './components/HomepageHooks.js';
import './App.css';

const App = () => (
  <main className="App">
    <HomePage />
  </main>
);

export default App;
