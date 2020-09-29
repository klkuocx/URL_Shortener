// Include packages and server related variables
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const generateCode = require('./generate_code')
const hasOriginAndReturn = require('./checkoutUrl')
const Url = require('./models/url')

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

// Set view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// Set middleware
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))


// Set route to home
app.get('/', (req, res) => {
  res.render('index')
})

// Set routes to shorten URL
app.post('/shorten', (req, res) => {
  const { origin } = req.body
  let code = generateCode()
  hasOriginAndReturn(origin, code, res)
})

app.get('/success', (req, res) => {
  const { code } = req.query
  res.render('success', { code })
})

// Set routes to redirect URL code
app.get('/:code', (req, res) => {
  const { code } = req.params
  Url.findOne({ code })
    .then(url => res.redirect(url.origin))
    .catch(error => console.log(error))
})

// Listen to server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`)
})
