import restfulMongoose from 'restful-mongoose';
import mongoose from 'mongoose'


// Schema
var postSchema = new mongoose.Schema({
    title: String,
    body: String
});

// Return model
export default mongoose.model('Post', postSchema);
// module.exports = restful.model('Products', productSchema);
