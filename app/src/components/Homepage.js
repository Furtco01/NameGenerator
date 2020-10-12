/***********************************************************************
@file     Homepage.js
@author   Collin Furth
@date     10/07/2020
@ver      0.1
@brief\
  Main Application Page - Homepage
@details
  Rev 0.1 - CF - Initial Implementation
***********************************************************************/

import React from 'react';
import Header from './Header.js';
import './Homepage.css';
import ToggleButton from './ToggleButton.js'
import ToggleButton2 from './ToggleButton2.js'
import { Button } from '@material-ui/core';
//import { TextField } from '@material-ui/core';

const Homepage = () => (
  <div className="Homepage">
    <div className="Background">
      <Header />
        <div className="ButtonGroup">
          <div className="FirstToggle">
              <ToggleButton />
          </div>
          <div className="FirstToggleText"> First Selection </div>
          <div className="SecondToggle">
              <ToggleButton2 />
          </div>
          <div className="SecondToggleText"> Second Selection </div>
      </div>
      <div className="Button">
        <Button variant="contained" color="primary"> Generate Name </Button>
      </div>
    </div>
  </div>
);

export default Homepage;