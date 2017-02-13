var mongoose = require( 'mongoose' );
var UserModel = mongoose.model( 'UserModel' );

/* ******** ******** REST API HANDLERS ******** ********  */

exports.getAllHandler = function (req, res){
  //app.get('/candy)'
  UserModel.find({}, function(err, theArray){
    if (!err){
    	console.log(" here!");
      res.json(theArray);
    }
    else{
      console.log("something went wrong!");
    }
  }); //UserModel.find
}; //getAllHandler

exports.postOneHandler = function(req, res){
  //app.post('/candy)'
  var fname = req.body.fname ? req.body.fname : "";
	var lname = req.body.lname ? req.body.lname : "";
	var cname = req.body.cname ? req.body.cname : "";
	var	web = req.body.web ? req.body.web : 0;
	var	phone = req.body.phone ? req.body.phone : "";
	var	speciality = req.body.speciality ? req.body.speciality : 0;

  var message;
  var newRecord = new UserModel();
  newRecord.firstname = fname;
	newRecord.lastname = lname;
	newRecord.company = cname;
	newRecord.webaddress = web;
	newRecord.phone = phone;
	newRecord.candyspeciality = speciality;

	console.log("Received inquiry=%s ", fname);
   //save to db through model :: Add a record

   var result = fname.charAt(0);
   var rgx = new RegExp("^"+result);

   mongoose.model('UserModel').find({'firstname': rgx, 'lastname': newRecord.lastname, 'company' : '', 'webaddress': newRecord.webaddress}, function(err, userModel){
       //console.log(userModel.length);
       if(userModel.length > 0){
       		mongoose.model('UserModel').find({'firstname': newRecord.firstname}, function(err, userModel){
       			if(userModel.length > 0){
	            	console.log('error 2');
       			}else{
		            console.log('error 3');
       			}
   			});
		}
		else{
            newRecord.save(function(err, savedUser){
				  if(err){
				  	if (err.code === 11000) { //error for dupes
			                console.log("Company and website name are same. Error 1");
			                res.status(500).send({status:500, message: 'Company and website name are same. Error 1', type:'internal'}); 
                      //next(new Error('Something went wrong :-('));  
			            }  
				     
				     console.log(newRecord.firstname + " could not be added");
				   }else{
				     res.json(true);
				     console.log(newRecord.firstname + " added successfully");
				   }
   			}); //newRecord.save
       	}
   });
}; //postOneHandler