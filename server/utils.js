const {Post} = require('./models')

async function handleRequest(req, res, task){
  let result
  try {
    switch(task){
      case 'get-all-posts':{
          result = await Post.find()
      }
      break
      case 'get-one-post': {
        try {
          result = await Post.findById(req.params.id)
        } catch (e) {
          res.json(e)
        }
      }
      break
      case 'delete-one-post': {
        try {
          result = await Post.findByIdAndDelete(req.params.id)
        } catch (e) {
          res.json(e)
        }
      }
      break
      case 'create-new-post': {
        try {
          result = await Post.create(req.body)
        } catch (e) {
          res.json(e)
        }
      }
      break
      case 'update-one-post': {
        try {
          result = await Post.findByIdAndUpdate(req.params.id, req.body)
        } catch (e) {
          res.json(e)
        }
      }
      break
      default:
        result = 'got nothing from database'
    }
  } catch (e) {
    res.json(e)
  }
  
  res.json(result)
}

exports.handleRequest = handleRequest