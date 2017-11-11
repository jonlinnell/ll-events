const fs = require('fs')
const Joi = require('joi')

module.exports = () => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return
    require(`./${file.substr(0, file.indexOf('.'))}`)(Joi)
  })
}
