/***********************************************************************
@file     HomepageHooks.js
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
import GenderToggle from './GenderToggle.js';
import NameToggle from './NameToggle.js';
import { Button } from '@material-ui/core';

class Homepage extends React.Component {

    generateName = () => {
        console.log('running function');
        const myRequest = new Request('http://localhost:4200/post', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                gender: this.props.gender,
                name_length: this.props.name_length
            })
        });
        fetch(myRequest)
        .then(res => {
            if(res.ok) {
              return res;
            } else {
                throw Error(`Request rejected with status ${res.status}`);
            }
        })
        .then(res => res.text())
        .then(function(res) {
            console.log(res);
            document.getElementById('result').innerHTML = `Your generated name is: ${res.slice(11,15)} ${res.slice(32,36)}`;
        })
        .catch(function(error) {
            console.log(error);
        });  
    };

    homepageText = {
    helperText: {
        firstSelection: 'Please select a gender: ',
        secondSelection: 'Please select a length: '
    },
    resultText: '',
    buttonText: 'Generate Name'
    }
   
    render() {
        return (
            <div className="Homepage">
                <div className="Background">
                <Header appName='Name Generator' appGreeting='Take a spin on my cute little name generator. Please select either MALE or FEMALE and SHORT or LONG before generating a name.'/>
                    <div className="ButtonGroup">
                        <div className="FirstToggleGroup">
                            {this.homepageText.helperText.firstSelection}
                            <GenderToggle onClick={() => this.props.genderClick()}/>
                        </div>
                        <div className="SecondToggleGroup">
                            {this.homepageText.helperText.secondSelection}
                            <NameToggle onClick={() => this.props.nameClick()}/>
                        </div>
                    <Button variant="contained" color="primary" onClick={this.generateName}> {this.homepageText.buttonText} </Button>
                    <div className="Result" id="result">{this.homepageText.resultText}</div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Homepage;
