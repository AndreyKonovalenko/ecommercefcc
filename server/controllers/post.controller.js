const Post = require('../models/post')


module.exports.getPosts = function (req, res) {
    Post.findAll().then(posts => {
        // posts will be an array of all Project instances
        res.send(posts)
    })
}



module.exports.test = function (req, res) {
    res.send('GET request to the homepage')
}

module.exports.list = function (req, res) {
    res.send('respond with a resource')
}

module.exports.delete = function (req, res) {
    res.send('delete user')
}


















/**
 * Get all posts
 * @param req
 * @param res
 * @returns void
 */
module.exports.getPosts = function (req, res) {
    Post.findAll().then(posts => {
        // posts will be an array of all Project instances
        res.send(posts)
    })
}

//
// /**
//  * Save a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// module.exports = function addPost(req, res) {
//     if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
//         res.status(403).end();
//     }
//
//     const newPost = new Post(req.body.post);
//
//     // Let's sanitize inputs
//     newPost.title = sanitizeHtml(newPost.title);
//     newPost.name = sanitizeHtml(newPost.name);
//     newPost.content = sanitizeHtml(newPost.content);
//
//     newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
//     newPost.cuid = cuid();
//     newPost.save((err, saved) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         res.json({ post: saved });
//     });
// }
//
// /**
//  * Get a single post
//  * @param req
//  * @param res
//  * @returns void
//  */
// module.exports = function getPost(req, res) {
//     Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         res.json({ post });
//     });
// }
//
// /**
//  * Delete a post
//  * @param req
//  * @param res
//  * @returns void
//  */
// module.exports = function deletePost(req, res) {
//     Post.findOne({ cuid: req.params.cuid }).exec((err, post) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//
//         post.remove(() => {
//             res.status(200).end();
//         });
//     });
// }
