const express = require('express'),
  router = express.Router(),
  {
    handleRequest
  } = require('../utils')

router
  .get('/', (req, res) => {
    // send all posts to client
    handleRequest(req, res, 'get-all-posts')
  })
  .get('/post/:id', (req, res) => {
    // send one post to client
    handleRequest(req, res, 'get-one-post')
  })
  .post('/', (req, res) => {
    // create a new post and save in database
    handleRequest(req, res, 'create-new-post')
  })
  .delete('/delete/:id', (req, res) => {
    // delete a single post from database
    handleRequest(req, res, 'delete-one-post')
  })
  .put('/:id', (req, res) => {
    // update one post
    handleRequest(req, res, 'update-one-post')
  })

module.exports = router