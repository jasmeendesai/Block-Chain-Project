const express = require('express')
const router = express.Router()

const {getCoin} = require('../controller/coinController')

router.get('/assets', getCoin)

router.use('*', (req, res)=>{
    return res.status(400).send({status : false, message : "Invalid Url"})
})

module.exports = router