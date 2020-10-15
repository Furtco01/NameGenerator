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

const Header = (props) => (
    <div className="Banner">
        <div className="Header">
            {props.appName}
            <ColoredLine />
            <div className="Greeting">
            {props.appGreeting}
            </div>
        </div>
    </div>

);

export default Header;