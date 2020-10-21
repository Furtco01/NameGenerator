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

function getToggleProps() {
    console.log('running function');
    const myRequest = new Request('http://localhost:4200/get', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application/json'
        }
    });

    //console.log(props.gender);
    fetch(myRequest)
        .then(function(data) {
        console.log(data);
        document.getElementById('result').innerHTML = `This is your output: ${data}`;
        })
        .catch(function(error) {
            console.log(error);
        });
        
}


class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gender: 'Male',
            length: 'Long'
        };
    };

    /*generateName() {
        fetch(myRequest)
        .then(function(data) {
            //console.log('Made it')
            console.log(data);
            document.getElementById('result').innerHTML = `This is your output: ${data}`;
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    */

    homepageText = {
    helperText: {
        firstSelection: 'First Selection is ',
        secondSelection: 'Second Selection is '
    },
    resultText: 'NAME GENERATED HERE',
    buttonText: 'Generate Name'
    }


    handleGenderToggle() {
        if( this.state.gender === 'Male' ) {
            this.setState({gender: 'Female'});
        }
        else if( this.state.gender === 'Female' ) {
            this.setState({ gender: 'Male' });
        }
        else
            alert( 'Please select a gender!' );
    }

    handleNameToggle() {
        if( this.state.length === 'Long' ) {
            this.setState({length: 'Short'});
        }
        else if( this.state.length === 'Short' ) {
            this.setState({ length: 'Long' });
        }
        else
            alert( 'Please select a length!' );
    }
   
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
                <Button variant="contained" color="primary" onClick={getToggleProps}> {this.homepageText.buttonText} </Button>
            </div>
            <div id="result" className="Result">{this.homepageText.resultText}</div>
            </div>
        </div>
        );
    }
};

export default HomePage;
