const express = require('express')
const app = express()

const userRoute = require('./userRoute')
app.use('/', userRoute)

app.listen(3333)
