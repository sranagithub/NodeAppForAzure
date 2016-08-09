var express = require('express');
var EmployeeRoute = express.Router();
// middleware that is specific to this router
EmployeeRoute.use(function timeLog(req, res, next) {
  // console.log('Time: ', Date.now()); 
  //This function will be called on every request to this route.
  next();
});

EmployeeRoute.get('/designation', function(req, resp, next){
	resp.render('./employee/designation', { title: 'Hey', message: 'Hello there!'});	
});

EmployeeRoute.post('/designation', function(req, resp, next)
	{
		console.log('This is designation POST.');
		next();
	})
EmployeeRoute.get('/employeelist', function(req, resp, next){	
	resp.render('./employee/employeelist', { title: 'Hey', message: 'Hello there!'});
	
});

EmployeeRoute.post('/addemployee', function(req, resp, next){	
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	console.log(req.body.lastorg);
	console.log(req.body.designation);
	resp.send('Saved Successfully.');
	
});

EmployeeRoute.get('/salary', function(req, resp, next){
	console.log('entered salary')
	resp.render('./employee/salary', { title: 'Hey', message: 'Hello there!'});
	
});

EmployeeRoute.post('/salary', function(req, resp, next){
	console.log(req.body.firstname);
	console.log(req.body.lastname);
	resp.send('Saved Successfully.');
	
});


// EmployeeRoute.use(function(req, res, next){
// 	console.log('No route found');
// 	//res.render('404');
// 	next(err);
// });
EmployeeRoute.use(function(err, req, res, next) {
	res.render('404');
  console.log('Something went wrong ---- AT EMPLOYEE!!!')

  //res.status(500).send('Something broke!');
});

module.exports = EmployeeRoute;