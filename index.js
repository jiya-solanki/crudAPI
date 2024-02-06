const prodRouter = require('./routes/productRouter')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://jiyasolanki:mongopwd@cluster0.imug7ka.mongodb.net/?retryWrites=true&w=majority');
app.use('/product',prodRouter)

app.listen(4000, ()=>{
    console.log('Started')
})

