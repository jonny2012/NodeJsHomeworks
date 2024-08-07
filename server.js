import express from "express"
import { data, sendMessage, emitter } from "./homework2/chat_app.js"
const app = express()
const port = 5000

app.get("/", (req, res) => {

    res.send("Server is running")
})


sendMessage(data[1].user, data[1].message, emitter)
sendMessage(data[0].user, data[0].message, emitter)
sendMessage(data[2].user, data[2].message, emitter)


app.listen(port, () => {
    console.log(`Server is running on ${port} `)
})