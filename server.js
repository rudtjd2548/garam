var path = require('path');
var express = require('express');

var nodeMailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')

var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080

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
	var Ename = req.body.Ename;
	var Ecompany = req.body.Ecompany;
	var Ephone = req.body.Ephone;
	var Eemail = req.body.Eemail;
	var Enotes = req.body.Enotes.split('\n').join('<br />');
	//res.send(Ename +', ' + Ecompany +', ' + Ephone +', ' + Eemail +', ' + Enotes);

	let transporter = nodeMailer.createTransport(smtpTransport({
		service: 'gmail',
		auth: {
			user: '',
			pass: ''
		}
	}))
	let mailToList = [
		'gogo3733@naver.com',
		'khg1659@hanmail.net',
		'xy1131@naver.com'
	]
	let mailOptions = {
		from: '가람푸드 <a92667441@gmail.com>',
		to: mailToList,
		subject: Ename + ' 님께서 견적문의 요청입니다.',
		html: '<p>'
				+	'<strong>업체명 : </strong>' + Ecompany + '<br />'
				+	'<strong>전화번호 : </strong><a href="tel:' + Ephone + '"> '+ Ephone +'</a><br />'
				+	'<strong>이메일 : </strong>' + Eemail + '<br />'
				+	'<strong>문의내용 : </strong><br />' + Enotes + '<br />'
			+ '</p>'
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error)
		}
		console.log('Message %s sent: %s', info.messageId, info.response)
	})
	 return res.send('ok')
	/*
	출처
	1. http://jsonobject.tistory.com/298
	2. https://community.nodemailer.com/using-gmail/
	*/
});

app.use(express.static(__dirname + '/dist'))


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, function(err) {
  if(err)
    console.error(err);
  else
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
