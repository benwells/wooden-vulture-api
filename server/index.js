import http          from 'http';
import express       from 'express';
import cors          from 'cors';
import bodyParser    from 'body-parser';
import db            from './db';
import middleware    from './middleware';
import api           from './api';
import passport      from 'passport';
import morgan        from 'morgan';
import jsonwebtoken  from 'jsonwebtoken';

var app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: ['Link']
}));

app.use(bodyParser.json());

app.use(morgan('dev'));


// connect to db
db( λ => {

	// internal middleware
	app.use(middleware());

	require('./config/passport')(passport);

	// api router
	app.use('/api', api());

	app.server.listen(process.env.PORT || 8080);

	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
