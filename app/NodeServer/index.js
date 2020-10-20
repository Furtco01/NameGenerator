const express = require('express');
const app = express();
const execFile = require('child_process').execFile;
const port = 4200;

app.listen(port, () => {
  console.log(`Node server listening at http://localhost:${port}`)
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/get', function(req, res) {
  const pythonProcess = execFile('python', ['../NameGenerator.py']);
  pythonProcess.stdout.on('data', function(data) {
  console.log(data.toString());
});
})
