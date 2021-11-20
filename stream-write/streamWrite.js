const fs=require("fs")

const data='Node.js is an ultimate backend javascript for backend developement'

const writableStream=fs.createWriteStream('Big_data.txt')
writableStream.write(data,'UTF8')
writableStream.end()