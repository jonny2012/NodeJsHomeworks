import events from "events"
import { EventEmitter } from "stream"

const emitter = new EventEmitter()

const user = "Name"
const message = "User message"

const sendMessage= (user, message) =>{
 console.log(`${user}: ${message}`)
}

emitter.on("message", sendMessage(user, message))

emitter.emit("message")