
var fs = require('fs');
var stream = require('stream');

module.exports = {
	'/': index,
	'/about': about,
	'/support': support
};

function index(req, res) {

	res.locals.currentPath = req.path;
	res.render('index', { title: 'Stem Operating System' });
}

function about(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/about.md');
	stream.setEncoding('utf8');

	stream.on('error', function(error) {
		console.error(error.toString());
	});

	stream.on('data', function(data) {
		buffer.push(data);
	});

	stream.on('end', function() {
		var content = buffer.join('');

		res.locals.markdown = res.app.locals.markdown;
		res.locals.currentPath = req.path;
		res.render('about', { title: 'Stem Operating System', content: content });
	});
}

function support(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/support.md');
	stream.setEncoding('utf8');

	stream.on('error', function(error) {
		console.error(error.toString());
	});

	stream.on('data', function(data) {
		buffer.push(data);
	});

	stream.on('end', function() {
		var content = buffer.join('');

		res.locals.markdown = res.app.locals.markdown;
		res.locals.currentPath = req.path;
		res.render('support', { title: 'Stem Operating System', content: content });
	});
}
