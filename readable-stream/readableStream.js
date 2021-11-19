const fs=require("fs")

const readableStream=fs.createReadStream('./readable-stream/Node-stream-handson/data_file.txt')


readableStream.setEncoding('utf8')
readableStream.on('data',(chunk)=>{
  
  console.log(chunk.length)
})