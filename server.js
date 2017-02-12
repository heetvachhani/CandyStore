var express = require('express');
var bodyparser = require('body-parser');
var session = require('express-session');


var db = require('./models/db.js');  // db.js must be required before routes.js
var app = express(); // exporting apps must be done before routes.js
var routes = require('./routes/routes.js');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(session({secret: "secret",  resave : true,  saveUninitialized : false}));
app.use(express.static('./'));
app.use(express.static('dist'));

// REST Routes
app.get('/candy', routes.getAllHandler);  // return all records
app.post('/candy', routes.postOneHandler); // add new record

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});


var port = 9000;
app.listen(port, function(){
	console.log(('HTTP server is listening on port: ' + port));
});

module.exports = app;