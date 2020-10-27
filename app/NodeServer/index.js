//Define express which powers the http functionality
const express = require('express');
const app = express();
//Define the spawn method used to call a subprocess to run the python script
const spawnSync = require('child_process').spawnSync;
//Define the body parser methos because JSON is now able to be parsed by default
const bodyParser = require('body-parser');
const { stdout } = require('process');
//Assign a value to port variable for below listener
const port = 4200;

//set listener on port 4200 for incoming http request
app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`)
})

//Call the bodyParser method
app.use(bodyParser.json());
//Declare funtion to set headers for http request
app.use(function (req, res, next) {
  //Use res.setHeader (singular header) in place of res.writeHead
  //(multiple headers) to allow multiple app.use statements
  //additional headers cannot be added after res.writeHead is called

  //Set header to allow request to bypass CORS protection
  res.setHeader('Access-Control-Allow-Origin', '*');
  //Set headers to show http post request body
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Define endpoint for POST request using the /post path
app.post('/post', function(req, res) {
  //Declare variables to store toggle input from react interface
  //to be passed as parameters to Python script
  var gender = req.body.gender;
  var name_length = req.body.name_length;
  //Instantiate instance of spawn to call subprocess
  const pythonProcess = spawnSync('python', ['-u', '../NameGenerator.py', gender, name_length],
  {
  encoding: 'utf-8'
  });

  name_res = pythonProcess.stdout;

  res.write(name_res);
  res.end();
});