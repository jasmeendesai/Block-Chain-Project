const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({
    symbol : {
        type : String,
        unique : true
    },
    name : {
        type : String,
        unique : true
    },
    marketCapUsd:  String,

    priceUsd: String

})

module.exports = mongoose.model('coin', coinSchema)