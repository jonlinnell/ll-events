/* eslint-disable consistent-return */

const fs = require('fs')
const path = require('path')
const uuidv4 = require('uuid/v4')

const verifyToken = require('../lib/verifyToken')

const mediaDir = path.join(__dirname, '..', process.env.MEDIA_DIR)

const filetypes = {
  'image/jpeg': 'jpg',
  'image/png': 'png'
}

module.exports = (app) => {
  app.post('/media/upload', verifyToken, (req, res) => {
    if (!req.files) {
      return res.status(400).send('No file uploaded.')
    }

    if (!filetypes[req.files.image.mimetype]) {
      return res.status(400).send(`Unsupported file type uploaded: ${req.files.image.mimetype}. Supported filetypes: ${Object.keys(filetypes)}`)
    }

    const image = { ...req.files.image }
    const filename = `${uuidv4(req.files.image.data)}.${filetypes[req.files.image.mimetype]}`

    image.mv(path.join(mediaDir, filename), (err) => {
      if (err) {
        return res.status(500).send('Unable to move file')
      }

      res.status(200).json({ file: filename })
    })
  })

  app.get('/media/:img', (req, res) => {
    const requestedFile = `${mediaDir}/${req.params.img}`

    if (fs.existsSync(requestedFile)) {
      res.sendFile(requestedFile)
    } else {
      res.sendStatus(404)
    }
  })

  app.delete('/media/:img', verifyToken, (req, res) => {
    const requestedFile = `${mediaDir}/${req.params.img}`

    fs.unlink(requestedFile, (err) => {
      if (err) {
        return res.sendStatus(404)
      }

      res.send(200)
    })
  })
}
