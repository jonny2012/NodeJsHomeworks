import EventEmitter from "events"

export const backupEvent = new EventEmitter()


export const filenames = [
    {
        filename: "users.log"
    }, {
        filename: "registration.log"
    }, {
        filename: "template.txt"
    }]



export const startBackup = (filename, eventEmitter) => {
    eventEmitter.emit("backup", { filename })
}

backupEvent.on("backup", (data) => {
    console.log(`Backup Started for file: ${data.filename}`)
})


// сначала я думал  сделать как в презентации но меня волновал  пункт 3 
// немного они намудрили  с формулировкой  пунктов  но вроде все правильно сделал 
// совсем нет разнообразия в заданиях
// чтобы проверить просто раскоментите  по  одному заданию 

// задание 1
// sendMessage(data[1].user, data[1].message, emitter)
// sendMessage(data[0].user, data[0].message, emitter)
// sendMessage(data[2].user, data[2].message, emitter)

// задание 2
// logEvent(logData[1].logType, logData[1].status, logger)
// logEvent(logData[0].logType, logData[0].status, logger)
// logEvent(logData[2].logType, logData[2].status, logger)

// задание 3
// startBackup(filenames[0].filename, backupEvent)
// startBackup(filenames[2].filename, backupEvent)
// startBackup(filenames[1].filename, backupEvent)