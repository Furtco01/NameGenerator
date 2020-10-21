const express = require('express');
const app = express();
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

app.get('/get', function(req, res) {

  //Below are a couple iterations of different variables/conventions I tried to pass for the toggle values

    //var gender = req.body.gender;
    //var length = req.body.length;
    var gender = 'female';
    var name_length = 'short';
    //args = ['../NameGenerator.py("female","short")'];
  //const pythonProcess = execFile('python', ['../NameGenerator.py']);

  //This should allow a python shell to run the NameGenerator file and pass in gender and name_length arguments
  //syntax should be "args as a list of string objects containing the name of the program and its parameters to execute a child program in a new process."

  const pythonProcess = subprocess.call(['python','../NameGenerator.py', gender, name_length])
  pythonProcess.stdout.on('data', function(data) {
  console.log(data.toString());
});
})
