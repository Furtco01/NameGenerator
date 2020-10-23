const express = require('express');
const app = express();
//let {PythonShell} = require('python-shell')
const spawn = require('child_process').spawn;
const bodyParser = require('body-parser');
const port = 4200;

//const execFile = require('child_process').execFile;


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
  console.log(req);
  console.log(req.body);

  var gender = req.body.gender;
  var name_length = req.body.name_length;

  const pythonProcess = spawn('python',['../NameGenerator.py', gender, name_length]);
  console.log(gender, name_length);
  pythonProcess.stdout.on('data', function(data) {
  //console.log('results: %j', data)
  //console.log(data.toString());

  /*var options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: '../NameGenerator.py',
    args: [gender, name_length]
  };*/

  /*PythonShell.run('../NameGenerator.py', options, function (err, results) {
  if (err) 
    throw err;
  // Results is an array consisting of messages collected during execution
  console.log('results: %j', results);*/
  });
  //const pythonProcess = subprocess.call('python',['../NameGenerator.py']);
  //pythonProcess.stdout.on('data', function(data) {
  //console.log(data.toString());
});

var pcap = require("pcap"),
    pcap_session = pcap.createSession("", "tcp"),
    matcher = /chrome/i;

console.log("Listening on " + pcap_session.device_name);

pcap_session.on('packet', function (raw_packet) {
    var packet = pcap.decode.packet(raw_packet),
        data = packet.link.ip.tcp.data;

    if (data && matcher.test(data.toString())) {
        console.log(pcap.print.packet(packet));
        console.log(data.toString());
    }
});
