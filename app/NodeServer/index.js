const express = require('express');
const app = express();
const spawn = require('child_process').spawn;
const bodyParser = require('body-parser');
const port = 4200;

app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Define endpoint for GET request
app.post('/get', function(req, res) {
  res.json(req.body);
  var gender = req.body.gender;
  var name_length = req.body.name_length;
  const pythonProcess = spawn('python',['../NameGenerator.py', gender, name_length]);
  pythonProcess.stdout.on('data', function(data) {
  console.log(data.toString());
  });
});
