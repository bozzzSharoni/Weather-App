const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const request = require('request')
const City = require('../model/City')



router.get('/city/:cityName', function (req, res) {
    const city = req.params.cityName
    request.get(`https://api.apixu.com/v1/current.json?key=9c01201316034371830115320191007&q=${city}`, function (error, response) {
        console.log('Error:', error)
        const cities = JSON.parse(response.body)
        res.send(cities)
    })

})

router.post('/city', function (req, res) {
    const city = req.body
    const c1 = new City(city)
    c1.save('GREAT SUCCESS!')
    res.end()

})

router.get('/cities', function (req, res){
    City.find({}, function (err, city) {
        console.log('Error:', err)
        res.send(city)
    })
    
})

router.delete('/city/:cityName', function(req, res){
    const city = req.params.cityName
    City.findOneAndRemove({'name': city}).then(function(){

    })
    res.end()
})
module.exports = router