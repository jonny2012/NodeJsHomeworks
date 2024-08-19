import fs from "fs"

fs.readFile('./log.txt', (err, data)=>{
    if(err) {
        console.log("error", err)
        return
    }
    console.log(data)
})
const content = 'lesson1'

fs.writeFile('leson', content, "utf-8", di (err)=>{
    if(err) {
        console.log("error", err)
        return
    }
})


// try{
//  const  data = fs.readFileSync("./input.txt", "utf-8")
//  const  dataSend = fs.writeFileSync("./output.txt",data ,"utf-8")
 
// }
// catch(e){
//     console.error(e)
// }

const  writeStream = fs.createWriteStream("./output.txt", 'utf8')

writeStream.write("first row \n")
writeStream.write("2 row \n")
writeStream.write("3 row \n")

// writeStream.end(()=>{
//     console.log("file was created")
// })
// writeStream.on("finish", ()=>{
//     console.log("Finish")
// })

const readStream = fs.createReadStream("./input.txt", "utf8")

readStream.pipe(writeStream)