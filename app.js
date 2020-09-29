// Include packages and server related variables
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')
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

// Set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Set middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

// Listen to server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`)
})
