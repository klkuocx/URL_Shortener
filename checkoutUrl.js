const Url = require('./models/url')

function hasOriginAndReturn(origin, code, res) {
  Url.findOne({ origin })
    .lean()
    .then((url) => {
      if (url) {
        res.redirect(`/success?code=${url.code}`)
      } else {
        checkoutCodeAndCreate(origin, code, res)
      }
    })
    .catch(error => console.log(error))
}

function checkoutCodeAndCreate(origin, code, res) {
  const codes = []
  Url.find()
    .lean()
    .then(urls => {
      urls.forEach(url => codes.push(url.code))
      while (codes.includes(code)) {
        code = generateCode()
      }
    })
    .then(() => {
      Url.create({ origin, code })
        .then(() => res.redirect(`/success?code=${code}`))
        .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
}

module.exports = hasOriginAndReturn
