
module.exports = {
	'/': index,
};

function index(req, res) {

	res.locals.currentPath = req.path;
	res.render('index', { title: 'Stem Operating System' });
}
