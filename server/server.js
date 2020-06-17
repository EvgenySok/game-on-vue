const express = require('express')
const { resolve } = require('path')

const server = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

server.use(express.static(resolve(__dirname, '../dist')))

server.use('*', (req, res) => res.send('Request not found...'))

server.listen(PORT, () => {
  console.log(`Server has been started at http://localhost:${PORT}...`)
})