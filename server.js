var path = require('path');
var express = require('express');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
});

app.post('/emailSend', (req, res) => {
	console.log('hi');
});




app.listen(PORT, function(err) {
  if(err)
    console.error(err);
  else
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
