var express = require('express');
var i18n = require("i18next");
var Courser = require('courser');
var CookieStore = require('cookie-sessions');
//var md = require("node-markdown").Markdown;

// Environment Settings
if (!process.env.NODE_ENV)
	process.env.NODE_ENV = 'development';

var app = express();

app.configure(function() {

	// Initializing i18n
	i18n.init({
		ignoreRoutes: [ 'public/' ],
		resGetPath: __dirname + '/locales/__ns_____lng__.json'
	});

	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', {
		environment: process.env.NODE_ENV,
		__: i18n.t
	});
	app.locals({
		environment: process.env.NODE_ENV,
		__: i18n.t
	});
	app.enable('jsonp callback');
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(i18n.handle);
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
	app.use(express.errorHandler()); 
});

app.locals.configs = {
	appPath: __dirname,
	documentationPath: __dirname + '/documentation'
};

app.locals.markdown = require("node-markdown").Markdown;

// Initializing Routes
var courser = new Courser(app);
courser.addPath(__dirname + '/routes/router');
courser.addGlobalPath(__dirname + '/routes/global');
courser.init(function() {
	app.listen(5002);
	console.log('Stem website is ready.');
});
