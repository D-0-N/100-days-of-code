
//import the 'fs' and 'maths.js' module
//read the content of 'input.txt' file and copy the content to 'duplicate.txt' file
//call the 'sum and 'multiply' functions of maths module and store the return values in 'result' and 'product' variables
//write the content 'The sum of the numbers is: result. The product of the numbers is: product' to the 'output.txt' file
const fs=require('fs')
const maths=require('./maths')

const result=maths.sum()
const product=maths.multiply()

// const data=fs.readFileSync('./input.txt')
// fs.writeFileSync('./duplicate.txt',data)
fs.writeFileSync('./output.txt',`The sum of the numbers is: ${result}. The product of the numbers is: ${product}`)