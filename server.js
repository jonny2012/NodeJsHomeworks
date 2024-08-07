import express from "express"
import events from "events"
import EventEmitter from "events"
const app = express()
const port = 5000

app.get("/", (req, res) => {

    res.send("Server is running")
})

const emitter = new EventEmitter()

const data = [{
    user: "Ion",
    message: "Думаю да, нужно где-то в проекте  поиграться с этим"
}, {
    user: "Vadim",
    message: "Ты разобрался с events?"
},
{
    user:"Oxana",
    message:"Опять непонятная формулировка  задания!"
}]

const sendMessage = (user, message, eventEmitter) => {
    eventEmitter.emit("message", {user, message})
}

emitter.on("message", (data)=>{
    console.log(`${data.user}: ${data.message}`)
})
sendMessage(data[1].user, data[1].message, emitter)
sendMessage(data[0].user, data[0].message, emitter)
sendMessage(data[2].user, data[2].message, emitter)


app.listen(port, () => {
    console.log(`Server is running on ${port} `)
})