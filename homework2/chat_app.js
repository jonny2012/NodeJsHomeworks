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
// сначала я думал  сделать как в презентации но меня волновал  пункт 3 
// немного они намудрили  с формулировкой  пунктов  но вроде все правильно сделал 
// при вызове функции с 3 параметрами  все работает 
emitter.on("message", (data)=>{
    console.log(`${data.user}: ${data.message}`)
})