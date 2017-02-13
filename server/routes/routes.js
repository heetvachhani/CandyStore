const mongoose = require( 'mongoose' );
const UserModel = mongoose.model( 'UserModel' );

/* ******** ******** REST API HANDLERS ******** ********  */

exports.getAllHandler = function (req, res){
  //app.get('/candy)'
  UserModel.find({}, function(err, theArray){
    if (!err){
    	//console.log(" here!");
      res.json(theArray);
    }
    else{
      console.log("something went wrong!");
    }
  }); //UserModel.find
}; //getAllHandler

exports.postOneHandler = function(req, res){
  //app.post('/candy)'
  const fname = req.body.fname ? req.body.fname : "";
	const lname = req.body.lname ? req.body.lname : "";
	const cname = req.body.cname ? req.body.cname : "";
	const	web = req.body.web ? req.body.web : 0;
	const	phone = req.body.phone ? req.body.phone : "";
	const	speciality = req.body.speciality ? req.body.speciality : 0;
  const date = req.body.date ? req.body.date : "";
  const newRecord = new UserModel();
  newRecord.firstname = fname;
	newRecord.lastname = lname;
	newRecord.company = cname;
	newRecord.webaddress = web;
	newRecord.phone = phone;
	newRecord.candyspeciality = speciality;
  newRecord.date = date;

	console.log("Received inquiry=%s ", fname);
   //save to db through model :: Add a record

   const result = fname.charAt(0);
   const rgx = new RegExp("^"+result);

   mongoose.model('UserModel').find({'firstname': rgx, 'lastname': newRecord.lastname, 'company' : '', 'webaddress': newRecord.webaddress}, function(err, userModel){
       //console.log(userModel.length);
       if(userModel.length > 0){
       		mongoose.model('UserModel').find({'firstname': newRecord.firstname}, function(err, userModel){
       			if(userModel.length > 0){
	            	console.log('error 2');
                res.status(500).send({status:500, message: 'Duplicate! Error 2', type:'internal'}); 
       			}else{
		            console.log('error 3');
                res.status(500).send({status:500, message: 'Questionable! Error 3', type:'internal'}); 
       			}
   			});
		}
		else{
            newRecord.save(function(err, savedUser){
				  if(err){
				  	if (err.code === 11000) { //error for dupes
			                console.log("Company and website name are same. Error 1");
			                res.status(500).send({status:500, message: 'Company and website name are same. Duplicate! Error 1', type:'internal'}); 
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