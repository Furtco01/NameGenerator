const express = require('express');
const app = express();
let {PythonShell} = require('python-shell')
const bodyParser = require('body-parser');
const port = 4200;

//const execFile = require('child_process').execFile;
//const spawn = require('child_process').spawn;



app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`)
})

//Header for the http request to prevent CORS error

  //res.setHeader('Access-Control-Allow-Origin', '*');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  /*res.writeHead(
    200,
    {'Access-Control-Allow-Origin': '*',
     'Content-type': 'text/plain'});*/
  next();
});

//Define endpoint for GET request

app.post('/get', function(req, res) {
  res.json(req.body);

  var gender = 'req.body.gender';
  var name_length = 'req.body.name_length';

  var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: '../NameGenerator.py',
    args: [gender, name_length]
  };

  //var pythonProcess = spawn('python', options);
  PythonShell.run('../NameGenerator.py', options, function (err, results) {
    if (err) 
      throw err;
    // Results is an array consisting of messages collected during execution
    console.log('results: %j', results);
    
  });
  //const pythonProcess = subprocess.call('python',['../NameGenerator.py']);
  //pythonProcess.stdout.on('data', function(data) {
  //console.log(data.toString());
});
//})
