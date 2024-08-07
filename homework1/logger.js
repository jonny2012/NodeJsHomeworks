import fs from "fs"


export const logMessage = (message) =>{
    fs.appendFile("log.txt", message, err =>{
        if(err){
            console.error(err)
            return
        }
        console.log("You did It")

    })
}

// const firstMessage = "First Message, \n"
// const secondMessage = "Second Message, \n"
// logMessage(firstMessage)
// logMessage(secondMessage)
// logMessage("Third Message, \n")
