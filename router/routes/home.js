var express = require('express');
var routeHome = express.Router();

// middleware that is specific to this router
routeHome.use(function timeLog(req, res, next) {
  // console.log('Time: ', Date.now()); 
  // console.log('Entered Home');
  next();
});

routeHome.get('/', function(req, resp, next){
	resp.render('home', { title: 'Hey', message: 'Hello there!'});	
});

routeHome.get('/about', function(req, resp, next){
	resp.render('aboutus', { title: 'Hey', message: 'Hello there!'});
	
});

routeHome.get('/contact', function(req, resp, next){	
	resp.render('contactus', { title: 'Hey', message: 'Hello there!'});
	
});
// routeHome.use(function(req, res, next){
// 	console.log('No route found');
// 	//res.render('404');
// 	next(err);
// });
routeHome.use(function(err, req, res, next) {
	res.render('404');
  console.log('Something went wrong --- HOME!!!')

  //res.status(500).send('Something broke!');
});

module.exports = routeHome;