const fs=require('fs')

const readableStream=fs.createReadStream('data_file.txt')
const writableStream=fs.createWriteStream('new_data_file.txt')
readableStream.pipe(writableStream)