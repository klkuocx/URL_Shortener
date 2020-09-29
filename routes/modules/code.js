// Include express and router
const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

// Set routes to redirect URL code
router.get('/:code', (req, res) => {
  const { code } = req.params
  Url.findOne({ code })
    .then(url => res.redirect(url.origin))
    .catch(error => console.log(error))
})

module.exports = router
