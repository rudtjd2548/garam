var path = require('path');
var express = require('express');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//cors header for cross origin requests
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
	next();
});

app.post('/sendEmail', (req, res) => {
	return res.send('ok');
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


app.use(express.static(path.join(__dirname, 'dist')));
app.listen(PORT, function(err) {
  if(err)
    console.error(err);
  else
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
