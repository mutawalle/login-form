// Express
const express = require('express')
const app = express()
const port = 4000

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
  next()
})

var bodyParser = require('body-parser')

// body parserd
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user', (req, res) => {
  console.log(req.body)
  res.status(200).send("success")
})

app.get('/user/:email/:password', (req, res) => {
  res.status(200).send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})