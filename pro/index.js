const express = require('express')
const app = express()
const path = require("path")
const fs = require('fs')
const bodyParser = require('body-parser')
const { Mongoose } = require('mongoose')
//const mongo =require('mongo')
const userSchema =require('schemas/user_schemas')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  const filename = path.join(__dirname, 'index.html')
  const indexData = fs.readFileSync(filename)
  res.end(indexData)
})

app.listen(3000, function () {
  console.log("server running on port 3000");
})