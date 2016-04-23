import { Router } from 'express';
import Post from '../models/posts';

let postRoutes = Router();

// GET / - List all Posts
postRoutes.get('/', (req, res) => {
	Post.find({}, function(err, posts) {
		console.log('retrieving all posts', posts);
		res.json(posts);
	});
});

// POST - create a new post
postRoutes.post('/', (req, res) => {
	let post = new Post(req.body);

	if (!req.body) res.json({});
	post.save(function(err, newPost) {
		if (err) res.json({ 'status': 'error'});
		res.json(newPost);
	});
});

// DELETE - delete post by ID
postRoutes.delete('/:id', (req, res) => {
	console.log('req', req.params);
	Post.findByIdAndRemove({ '_id': req.params.id }, function(err, posts) {
		console.log('removed', posts);
		res.json(posts);
	});
});

// UPDATE - update post by ID
postRoutes.patch('/:id', (req, res) => {
	console.log('req', req.params, req);
	Post.findByIdAndUpdate(req.params.id, req.body, function(err, posts) {
		console.log('updated', posts);
		res.json(posts);
	});
});

export default postRoutes;
