// Include packages and server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const app = express()
const routes = require('./routes')
require('./config/mongoose')
const PORT = process.env.PORT || 3000

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
