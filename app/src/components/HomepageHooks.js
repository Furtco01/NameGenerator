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
//import { render } from '@testing-library/react';

class HomePage extends React.Component {

    //Declares the initial state of these variables using hooks

    //const [gender, setGender] = React.useState('male');
    //const [length, setLength] = React.useState('long');

    constructor(props) {
        super(props);
        this.state = {
            gender: 'male',
            length: 'long'
        };
    };

    myRequest = new Request('http://localhost:4200/get', {
    method: 'GET',
    mode: 'cors'
    });

    generateName() {
        fetch(this.myRequest)
        .then(function(data) {
            console.log('Made it')
            console.log(data);
            document.getElementById('result').innerHTML = `This is your output: ${data}`;
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    homepageText = {
    helperText: {
        firstSelection: 'First Selection is ',
        secondSelection: 'Second Selection is '
    },
    resultText: 'NAME GENERATED HERE',
    buttonText: 'Generate Name'
    }

    handleGenderToggle() {
        if(this.state.gender === 'male') {
            this.setState = ({gender: 'female'});
        }
        else if(this.state.gender === 'female') {
            this.setState = ({gender: 'male'});
        }
        else
            alert('Please select a gender!');
    }

    handleNameToggle() {
        if(this.state.length === 'long') {
            this.setState = ({length: 'short'});
        }
        else if(this.state.length === 'short') {
            this.setState = ({length: 'long'});
        }
        else
            alert('Please select a length!');
    }


    //functions to set state on toggles using hooks

    /*function setSex(alignment) {
        //const _gender = {...gender}
        if(alignment === 'male') {
            setGender({gender: 'female'});
        }
        else if(alignment === 'female') {
            setGender({gender: 'male'});
        }
    }

    function setNameLength() {
        if(length === 'long') {
            setLength('short');
        }
        else if(length === 'female') {
            setLength('male');
        }
        else
            alert('Please select a gender!');
    }*/
   
    render() {
        return (
            <div className="Homepage">
            <div className="Background">
            <Header appName='Name Generator' appGreeting='Take a spin on my cute little name generator. Please select either Male or Female and Short or Long before generating a name.'/>
                <div className="ButtonGroup">
                <div className="FirstToggle">
                    <GenderToggle onClick={() => this.handleGenderToggle()}/>
                </div>
                <div className="FirstToggleText"> {this.homepageText.helperText.firstSelection + this.state.gender}</div>
                <div className="SecondToggle">
                    <NameToggle onClick={() => this.handleNameToggle()}/>
                </div>
                <div className="SecondToggleText"> {this.homepageText.helperText.secondSelection + this.state.length} </div>
            </div>
            <div className="Button">
                <Button variant="contained" color="primary" onClick={this.generateName}> {this.homepageText.buttonText} </Button>
            </div>
            <div id="result" className="Result">{this.homepageText.resultText}</div>
            </div>
        </div>
        );
    }
};

export default HomePage;
