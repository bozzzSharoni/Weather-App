const express = require('express')
const app = express()
const path = require('path')
const request = require('request')
const api = require('./server/routes/api')


app.use(express.static(path.join(__dirname, 'dist')))



const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const mongoose = require('mongoose')
app.use('/', api)
mongoose.connect('mongodb://localhost/WeatherDB', { useNewUrlParser: true });








const port = 8080
app.listen(port, () => console.log(`Server listening on port ${port}`))