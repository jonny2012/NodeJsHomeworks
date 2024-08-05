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
