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
import ToggleButton from './ToggleButton.js';
import ToggleButton2 from './ToggleButton2.js';
import { Button } from '@material-ui/core';

function handleGenderToggle() {
  const gender = '';
  if(this.state.genderAlignment === 'left') {
    gender = 'male';
  }
  else
    gender = 'female';
  };

const myRequest = new Request('http://localhost:4200/get', {
    method: 'GET',
    mode: 'cors'
  });

function generateName(e) {
  e.preventDefault();
  fetch(myRequest)
  .then(function(data) {
    console.log('Made it')
    console.log(data);
    document.getElementById('result').innerHTML = `This is your output: ${data}`;
  })
  .catch(function(error) {
    console.log(error);
  });
}

const homepageText = {
  helperText: {
    firstSelection: 'First Selection is ',
    secondSelection: 'Second Selection is'
  },
  resultText: 'NAME GENERATED HERE',
  buttonText: 'Generate Name'
}

class Homepage extends React.Component {



state = {
  genderAlignment: 'left',
  lengthAlignment: 'left',
  gender: 'female'
}

  render() {
    return (
    <div className="Homepage">
      <div className="Background">
        <Header appName='Name Generator' appGreeting='Take a spin on my cute little name generator. Please select either Male or Female and Short or Long before generating a name.'/>
          <div className="ButtonGroup">
            <div className="FirstToggle">
                <ToggleButton  onClick = {handleGenderToggle}/>
            </div>
            <div className="FirstToggleText"> {homepageText.helperText.firstSelection} {this.gender}</div>
            <div className="SecondToggle">
                <ToggleButton2 />
            </div>
            <div className="SecondToggleText"> {homepageText.helperText.secondSelection} </div>
        </div>
        <div className="Button">
          <Button variant="contained" color="primary" onClick={generateName}> {homepageText.buttonText} </Button>
        </div>
        <div id="result" className="Result">{homepageText.resultText}</div>
      </div>
    </div>
    )};
}

export default Homepage;