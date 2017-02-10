const mongoose = require( 'mongoose' );

const dbURI = 'mongodb://localhost:27017/CandyStore';
console.log("Establishing connection to the DB");

// ****** CONNECTIONS
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log(('Mongoose connected to ' + dbURI));
});

mongoose.connection.on('error', function (err) {
  console.log(('Mongoose connection error: ' + err));
});

mongoose.connection.on('disconnected', function () {
  console.log(('Mongoose disconnected'));
});

// ***** Schema defs *****   
var userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  company: String,
  webaddress: String,
  phone: Number,
  candyspeciality: String
});

// register the User model
var UserModel = mongoose.model( 'UserModel', userSchema);

