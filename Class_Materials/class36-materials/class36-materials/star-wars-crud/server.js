const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

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
  quotesCollection
    .insertOne(req.body)
    .then(result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
})

let connectionString = 'mongodb+srv://michael3303:<db_password>@testcluster.cnz9vlm.mongodb.net/?appName=TestCluster'

MongoClient.connect(/* ... */)
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(/* ... */)
    app.get(/* ... */)
    app.post(/* ... */)
    app.listen(/* ... */)
  })
  .catch(console.error)

console.log('May Node be with you')