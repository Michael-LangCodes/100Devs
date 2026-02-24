const express = require('express')
const app = express()

// Make sure you place this before your CRUD handlers!
app.use(express.urlencoded({ extended: true }))

app.listen(3000, function () {
  console.log('listening on 3000')
})

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req, res) => {
  console.log(req.body)
})

console.log('May Node be with you')