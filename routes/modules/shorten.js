// Include express ,router and shorten related functions
const express = require('express')
const router = express.Router()

const hasOriginAndReturn = require('../../checkoutUrl')

// Set routes to shorten URL
router.post('/', (req, res) => {
  const { origin } = req.body
  hasOriginAndReturn(origin, res)
})

router.get('/success', (req, res) => {
  const { code } = req.query
  res.render('success', { code })
})

module.exports = router
