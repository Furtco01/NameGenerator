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

function generateName() {
    console.log('running function');
    const myRequest = new Request('http://localhost:4200/get', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'text/plain'
        },
        body: JSON.stringify({gender: 'female', name_length: 'short'
    })
    });
    console.log(myRequest);
    fetch(myRequest)
    .then(function(data) {
        return data.JSON().then(function(data) {
        console.log(data);
        document.getElementById('result').innerHTML = `This is your output: ${data}`;
    })
    .catch(function(error) {
        console.log(error);
    });  
    })
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
        firstSelection: 'Please select a gender',
        secondSelection: 'Please select a length'
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
            <Header appName='Name Generator' appGreeting='Take a spin on my cute little name generator. Please select either MALE or FEMALE and SHORT or LONG before generating a name.'/>
                <div className="ButtonGroup">
                <div className="FirstToggle">
                    <GenderToggle onClick={() => this.handleGenderToggle()}/>
                </div>
                <div className="FirstToggleText"> {this.homepageText.helperText.firstSelection}</div>
                <div className="SecondToggle">
                    <NameToggle onClick={() => this.handleNameToggle()}/>
                </div>
                <div className="SecondToggleText"> {this.homepageText.helperText.secondSelection} </div>
            </div>
            <div className="Button">
                <Button variant="contained" color="primary" onClick={generateName}> {this.homepageText.buttonText} </Button>
            </div>
            <div id="result" className="Result">{this.homepageText.resultText}</div>
            </div>
        </div>
        );
    }
};

export default HomePage;
