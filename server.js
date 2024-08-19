import express from "express"
import  _ from "lodash"
import "./app.js"
import dotenv from "dotenv"


const env = process.env.NODE_ENV || "development"
dotenv.config({path:`.env.${env}`})

const app = express()
const port = process.env.PORT 


app.get("/", (req, res) => {

    res.send("Server is running")
})



app.listen(port, () => {

})