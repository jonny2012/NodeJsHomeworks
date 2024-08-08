
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