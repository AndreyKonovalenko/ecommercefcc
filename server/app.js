const express = require('express')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')

const app = express()

// Setup logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] "method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Enable compression
app.use(compression())

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.use('/images', (express.static(path.resolve(__dirname, '..', 'dist', 'images'))))

// Always return index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
})

module.exports = app
