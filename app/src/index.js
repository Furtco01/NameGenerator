import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const spawn = require("child_process").spawn;
console.log('PATH:::::');

console.log(process.env.PATH);
const pythonProcess = spawn('python', ['/app/a.py']);
pythonProcess.stdout.on('data', (data) => {
    console.log('DATA::::');
    console.log(data.toString());
});

pythonProcess.stderr.on('data', (data) => {
    console.log("wow");
    console.log(data.toString());
});

// Start our React Application
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
