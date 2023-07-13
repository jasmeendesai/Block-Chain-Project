const express = require('express')
const route = require('./route/route')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config()

const {PORT, MONGODB_STRING} = process.env

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect(MONGODB_STRING, {
    useNewUrlParser : true
}).then(()=> console.log("MongoDB is connected"))
.catch((err)=> console.log(err))

app.use('/',route)

app.listen(PORT, ()=>{
    console.log(`Express app is running on port ${PORT}`)
})