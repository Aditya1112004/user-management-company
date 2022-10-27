const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

// DB connection
const connectDB = require('./server/database/connection')
connectDB();


const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3001

//log requests
app.use(morgan('tiny'))

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")

//if you created folder inside views than add this->
//app.set("views",path.resolve(__dirname,"views/folder_name"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))


// load router
app.use('/',require('./server/routes/router'))


app.listen(PORT,()=>{
    console.log(`Listening to the port https://localhost:${PORT}`)
})