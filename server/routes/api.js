const express = require('express')
const PostController = require('../controllers/post.controller')

const router = express.Router()

console.log(router)

// Get all Posts
router.route('/posts').get(PostController.getPosts)






//testing next

router.route('/posts2').get(function (req, res) {
    res.send('Get a random book')
})

router.route('/test').get(PostController.test)

// // Get one post by cuid
// router.route('/posts/:cuid').get(PostController.getPost)
//
// // Add a new Post
// router.route('/posts').post(PostController.addPost)
//
// // Delete a post by cuid
// router.route('/posts/:cuid').delete(PostController.deletePost)

module.exports = router
