const express = require('express');
const app = express();
const spawn = require('child_process').spawn;
//const execFile = require('child_process').execFile;
const port = 4200;


app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`)
})

//Header for the http request to prevent CORS error
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

//Define endpoint for GET request

app.post('/get', function(req, res) {

  //Below are a couple iterations of different variables/conventions I tried to pass for the toggle values

  //var gender = req.body.gender;
  //var name_length = req.body.name_length;
  var gender = 'female';
  var name_length = 'short';

  var pythonProcess = spawn('python',['../NameGenerator.py', gender, name_length]);
  
  //const pythonProcess = subprocess.call('python',['../NameGenerator.py']);
  pythonProcess.stdout.on('data', function(data) {
  console.log(data.toString());
});
})
