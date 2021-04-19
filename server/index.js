const express = require('express'),
app = express(),
port = process.env.PORT || 3000,
postRoutes = require('./routes/posts')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use('/posts', postRoutes)

app.listen(port, () => {
  console.log(`server started on port ${port}`)
})