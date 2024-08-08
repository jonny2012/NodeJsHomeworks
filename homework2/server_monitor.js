
import EventEmitter from "events"

export const logger = new EventEmitter()

const current_time = Date()
export const logData = [{
    logType: "info",
    time:current_time,
    status:"Server started"
},{
    logType:"warning",
    time:current_time,
    status:"High memory usage"
},{
    logType:"error",
    time:current_time,
    status:"Server crashed code 500"
}]

export const logEvent = (logType, status, eventLogger)=>{
    eventLogger.emit("log", {logType, status})
}
logger.on("log", (data)=>{
    console.log(`${data.logType}:${data.status} \n ${current_time}`)
})
