// récupération d'express
const express = require('express');
const axios = require('axios');
const serverRSS = express.Router()


serverRSS.get('', async(req, res) => {
    try {
        const newsAPI = await axios.get('http://api.mediastack.com/v1/news?access_key=b9635d95baa1f1df59d97a18b4b961cb&countries=fr&keywords=rgpd');
        console.log(newsAPI.data)
        console.log("test")
        res.render('news', { articles : newsAPI.data.data })
    } catch (error) {
        if(error.response) {
            console.log(error.response.data)
        } else if(error.request) {
            console.log(error.request)
        } else {
            console.log('Error', error.message)
        }
    }
})

module.exports = serverRSS;
