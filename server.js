var http      = require('http');
var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
// get db config
var db = require('./config/db');
var dbPath = db.url;

var port = 9000; // set our port

if ( !(db = mongoose.connect(dbPath)) )
  console.log('Unable to connect to MongoDB at '+dbPath);
else 
  console.log('connecting to MongoDB at '+dbPath);

// connection failed event handler
mongoose.connection.on('error', function(err){
  console.log('database connect error '+err);
}); // mongoose.connection.on()


var greetingSchema = mongoose.Schema({
  sentence: String
}); 
var Greeting= mongoose.model('Greeting', greetingSchema);

mongoose.connection.once('open', function() {
	var greeting;
  	Greeting.find( function(err, greetings){
   if( !greetings ){     
      greeting = new Greeting({ sentence: "Test" }); 
      greeting.save();
    } 
  }); 
	console.log("It worked!!");
});

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use(function(err, req, res, next){
  if (req.xhr) {
    res.send(500, 'Something went wrong!');
  }
  else {
    next(err);
  }
});

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app