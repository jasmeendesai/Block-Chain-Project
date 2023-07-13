const axios = require('axios')

const coinModel = require('../model/coinModel')

const getCoin = async (req, res) =>{
    try{
        const coinCapData = await axios.get('https://api.coincap.io/v2/assets?limit=100')
        // console.log(response.data.data)

        let coinData = coinCapData.data.data

        const coins = coinData.map((val) => ({
            symbol : val.symbol,
            name : val.name,
            marketCapUsd: val.marketCapUsd,        
            priceUsd: val.priceUsd
        }))

        
        await coinModel.create(coins)

        let sortedData = coins.sort((a, b) => b.changePercent24Hr - a.changePercent24Hr)
        return res.status(200).send({data : sortedData})

    }
    catch(error){
        return res.status(500).send({status : false, message : error.message})
    }
}

module.exports = {getCoin}