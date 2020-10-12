/***********************************************************************
@file     Homepage.js
@author   Collin Furth
@date     10/07/2020
@ver      0.1
@brief
  Main Application Page - Homepage
@details
  Rev 0.1 - CF - Initial Implementation
***********************************************************************/

import React from 'react';
import ColoredLine from './ColoredLine';
import './Header.css';

const Header = () => (
    <div className="Banner">
        <div className="Header">
            Name Generator
            <ColoredLine />
            <div className="Greeting">
            Take a spin on my cute little name generator. Please select either Male or Female and Short or Long before generating a name.
            </div>
        </div>
    </div>

);

export default Header;