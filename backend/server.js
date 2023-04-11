const colors = require('colors')
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler } = require('./middleware/errorMiddleWare')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./Routes/gooalRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))