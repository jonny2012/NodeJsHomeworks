import fs from "fs"

const createFolder = ()=>{
fs.mkdir("myFolder", (err)=>{
    if(err) return console.log("Error on creating folder")

console.log("Folder created succesfull")
})

}

const deleteFolder = ()=>{
    fs.rmdir("myFolder", (err)=>{
          if(err) return console.log("No such file or directory")
            console.log("Folder deleted successfull")
    })
}
console.log(deleteFolder())

