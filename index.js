const express = require("express")
const {config} = require("dotenv")
const connect = require("./src/config/database")
const todoRoute = require("./src/router/todoRoute")
connect()
config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use("/", todoRoute)
const PORT = process.env.PORT || 3000

app.listen(port, function(){
    console.log(`app listening on port ${port}`)
})