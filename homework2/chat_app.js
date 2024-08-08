import events from "events"
import EventEmitter from "events"

export const emitter = new EventEmitter()

export const data = [{
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

 export const sendMessage = (user, message, eventEmitter) => {
    eventEmitter.emit("message", {user, message})
}

emitter.on("message", (data)=>{
    console.log(`${data.user}: ${data.message}`)
})