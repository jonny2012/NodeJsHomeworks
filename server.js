import express from "express"
import { data, sendMessage, emitter } from "./homework2/chat_app.js"
import { logEvent, logData, logger } from "./homework2/server_monitor.js"
import { backupEvent,startBackup, filenames} from "./homework2/backup_system.js"
const app = express()
const port = 5000

app.get("/", (req, res) => {

    res.send("Server is running")
})
// задание 1
// sendMessage(data[1].user, data[1].message, emitter)
// sendMessage(data[0].user, data[0].message, emitter)
// sendMessage(data[2].user, data[2].message, emitter)

// задание 2
// logEvent(logData[1].logType, logData[1].status, logger)
// logEvent(logData[0].logType, logData[0].status, logger)
// logEvent(logData[2].logType, logData[2].status, logger)

startBackup(filenames[0].filename, backupEvent)
startBackup(filenames[2].filename, backupEvent)
startBackup(filenames[1].filename, backupEvent)

app.listen(port, () => {
    console.log(`Server is running on ${port} `)
})