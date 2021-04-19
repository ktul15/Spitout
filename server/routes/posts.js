const express = require('express'),
router = express.Router()

router.get('/', async (req, res) => {
  res.send('all posts')
})

module.exports = router