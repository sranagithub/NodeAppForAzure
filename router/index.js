
module.exports = function (app) {
	
	app.use('/employee', require('./routes/employee'));
    app.use('/', require('./routes/home'));    
};