const express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  port = process.env.PORT || 3000,
  postRoutes = require('./routes/posts')

mongoose.connect('mongodb://localhost:27017/spitout_1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('connected to mongo'))
  .catch(e => console.log(`mongodb error: ${e}`))

app.set('view engine', 'ejs')
app.use(express.urlencoded({
  extended: false
}))

app.use('/posts', postRoutes)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})