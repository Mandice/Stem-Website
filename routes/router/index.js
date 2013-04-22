
var fs = require('fs');
var stream = require('stream');

module.exports = {
	'/': index,
	'/News': news,
	'/about': about,
	'/support': support,
	'/Demo': demo,
	'/download': download
};

function curLocale(locale) {
	var lang = 'en-US';

	// dev : for facebook scrape
	if (['en', 'dev'].indexOf(locale) >= 0)
		return 'en-US';

	return locale;
}

function index(req, res) {

	res.locals.currentPath = req.path;
	res.render('index', { title: 'Stem Operating System' });
}

function news(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/' + curLocale(req.locale) + '/news.md');
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
		res.render('news', { title: 'Stem Operating System', content: content });
	});
}

function about(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/' + curLocale(req.locale) + '/about.md');
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

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath  + '/' + curLocale(req.locale) + '/support.md');
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

function demo(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/' + curLocale(req.locale) + '/demo.md');
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
		res.render('demo', { title: 'Stem Operating System', content: content });
	});
}

function download(req, res) {
	var buffer = [];

	var stream = fs.createReadStream(res.app.locals.configs.documentationPath + '/' + curLocale(req.locale) + '/download.md');
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
		res.render('download', { title: 'Stem Operating System', content: content });
	});
}
