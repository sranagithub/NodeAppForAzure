var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// var routeHome = require('routeHome')
var app = express();
app.use(express.static(path.join(__dirname,'/public/scripts')));
app.use(express.static(path.join(__dirname,'/public/plugins')));
// var router = express.Router();
// var home = require('./router/routes/home');
app.set('views', path.join(__dirname,'/views'));
app.set('view engine','ejs');
// app.use(router);
app.use(bodyParser.urlencoded({extended:true}));
// app.use(routeHome);
// router.use(function(req, res, next){
// 	console.log('baseURL : %s', req.originalUrl);
// 	console.log('Will be called everytime');
// 	//res.render('404');
// 	next();
// });
var router = require('./router')(app);
module.exports = app;
// app.get('/*',home);
// router.get('/', function(req, res, next){
// 		console.log('Default called')
// 		//res.render('home', { title: 'Hey', message: 'Hello there!'});	
// 		var x = 0/1;
// 		res.end();
// });

// router.get('/home/:id', function(req, res, next){
//  if (req.params.id == 0) {
//  	console.log('with parameter route 1 {req.params.id} - method 2. Go to next route')
//  	next('route');
//  }
//  else {
//  	console.log('with parameter route 1 - method 1.');
//  	next();
//  	//res.send('This is route 1 in stack.');
//  } 
// },function(req, res, next){
// 	console.log('with parameter route 1 - method 2.');
// 	res.end();
// 	//res.send('This is route 2 in stack.');	
// });

// router.get('/home/:id', function(req, res, next){
// 	console.log('with parameter route 2 - method 1.');
	
//  	res.render('home', { title: 'Hey', message: 'Hello there!'});
//  	//res.send('This is another route in stack.');
// });
// router.use(function(req, res, next){
// 	console.log('No route found');
// 	//res.render('404');
// 	next(err);
// });
// router.use(function(err, req, res, next) {
// 	res.render('404');
//   console.log('Something went wrong!!!')

  //res.status(500).send('Something broke!');
// });





//start server
app.listen(3000,function(){
	console.log('Server Started');
});