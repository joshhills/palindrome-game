const express = require('express');
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator');
const { isPalindrome } = require('./palindrome');

const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index.html');
});

/// BEGIN TEST ///

let hiscores = [];

app.get('/api/getScores', function(req, res) {
	res.json(hiscores);
});

app.post('/api/submitEntry', [
	check('name')
		.trim().isAlpha().isLength({min: 3, max: 32}),
	check('word')
		.trim().isLength({min: 3, max: 64}).matches(/^\S+$/) // Disallow spaces
], function(req, res) {

	// Check and sanitise input
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	let name = req.body.name;
	let word = req.body.word.toLowerCase();
	
	// Perform service logic (update application state)
	if (isPalindrome(word)) {
		hiscores.push({ name, points: word.length });
		hiscores.sort((a, b) => b.points - a.points);
		hiscores = hiscores.slice(0, 5);
	}

	// Return response
	res.json(hiscores);
});

/// END TEST ///

var port = 3000;
app.listen(port, function() {
	console.log('Server', process.pid, 'listening on port', port);
});
