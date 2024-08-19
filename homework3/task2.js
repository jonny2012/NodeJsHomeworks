import fs from "fs"


const writeFile =  ()=>{
    const content = "Nodejs is awesome"

    fs.writeFile("info.txt", content, "utf8", (err)=>{
        if(err) return console.error("Error on file writing", err)
            console.log("Content is succesfully writed in file")
    } )
}
// console.log(writeFile())

const readFile = ()=>{
     fs.readFile("info.txt", "utf8", (err, data)=>{
        if(err) { console.error(" Error on read file", err)
            return
        }
            console.log(data)
     })
}
// console.log(readFile())