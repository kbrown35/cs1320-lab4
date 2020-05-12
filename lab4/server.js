const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
const port = 80;

app.use((req, res, next) => {
	console.log(`receiving requests for ${req.url}`);
	next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cookieParser());

app.get('/madlibs', (req, res) => res.sendFile('views/madlibs.html' , {root: __dirname}));
app.get('/login', (req, res) => res.sendFile('views/login.html' , {root: __dirname}));
app.get('/results', (req, res) => res.sendFile('views/results.html' , {root: __dirname}));
app.get('*', (req, res) => res.sendStatus(404));

app.listen(port, () => console.log(`Madlibs server listening on http://localhost:${port}`));