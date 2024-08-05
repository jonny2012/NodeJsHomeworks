import express from "express"
import { logMessage } from "./homework1/logger.js"
const app = express()
const port = 5000

app.get("/", (req,res)=>{

res.send("Server is running")
})

const firstMessage = "First Message, \n"
const secondMessage = "Second Message, \n"
logMessage(firstMessage)
logMessage(secondMessage)
logMessage("Third Message, \n")

// Здраствуйте,  учитель, меня  зовут  Ion/Иван, меня на этой неделе не будет на уроках(работа) 
// познакомимся с вами на следующей неделе
// По поводу импортов  просто нужно  добавить  "type":"module" в  package.json

app.listen(port, ()=>{
    console.log(`Server is running on ${port} ` )
})