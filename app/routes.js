module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});


	var greetingSchema = mongoose.Schema({
	  sentence: String
	}); 
	var Greeting= mongoose.model('Greeting', greetingSchema);

	app.get('/test', function(req, res){
  		Greeting.findOne(function (err, greeting) {
    		res.send(greeting.sentence);
  		});
	});

	

};
