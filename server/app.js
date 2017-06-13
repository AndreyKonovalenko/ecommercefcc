const express = require('express')
const jsonServer = require('json-server')
const morgan = require('morgan')
const compression = require('compression')
const path = require('path')

const app = express()

// Setup logging
app.use(morgan(':remote-addr - :remote-user [:date[clf]] "method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// Enable compression
app.use(compression())

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'public')))

app.use('/images', (express.static(path.resolve(__dirname, '..', 'public', 'images'))))

// Use json-server for fake api
app.use('/api', jsonServer.router(path.resolve(__dirname, '..', 'fake-api', 'db.json')))

// Always return index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

module.exports = app
