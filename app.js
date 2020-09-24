// Include packages and server related variables
const express = require('express')

const app = express()
const PORT = 3000

// Set route
app.get('/', (req, res) => {
  res.send('URL Shortener coming soon...')
})

// Listen to server
app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`)
})
