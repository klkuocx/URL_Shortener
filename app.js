// Include packages and server related variables
const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = 3000

// Set MongoDB
mongoose.connect('mongodb://localhost/url-shortener', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error 0_0')
})
db.once('open', () => {
  console.log('mongodb connected =)')
})

// Set route
app.get('/', (req, res) => {
  res.send('URL Shortener coming soon...')
})

// Listen to server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`)
})
