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

export default postRoutes;
