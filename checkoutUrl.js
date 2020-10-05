const Url = require('./models/url')
const generateCode = require('./generate_code')

function hasOriginAndReturn(origin, res) {
  Url.findOne({ origin })
    .lean()
    .then((url) => {
      if (url) {
        res.redirect(`/shorten/success?code=${url.code}`)
      } else {
        checkoutCodeAndCreate(origin, res)
      }
    })
    .catch(error => console.log(error))
}

async function checkoutCodeAndCreate(origin, res) {
  let code = ''

  while (true) {
    code = generateCode()
    const repeat = await Url.findOne({ code }).exec()
    if (repeat === null) break
  }

  Url.create({ origin, code })
    .then(() => res.redirect(`/shorten/success?code=${code}`))
    .catch(error => console.log(error))
}

module.exports = hasOriginAndReturn
