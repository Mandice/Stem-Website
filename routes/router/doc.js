
var fs = require('fs');
var stream = require('stream');
var path = require('path');

module.exports = {
	'/doc': doc,
	'/doc/:topic': doc
};

function curLocale(locale) {
	var lang = 'en-US';

	if (locale == 'en')
		return 'en-US';

	return locale;
}

function doc(req, res) {
	var buffer = [];

	var topic = 'index';
	if (req.params.topic) {
		topic = path.basename(req.params.topic);
	}

	var docPath = res.app.locals.configs.documentationPath + '/' + curLocale(req.locale) + '/doc/' + topic + '.md';

	var stream = fs.createReadStream(docPath);
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
		res.render('doc', { title: 'Stem Operating System', content: content });
	});
}
