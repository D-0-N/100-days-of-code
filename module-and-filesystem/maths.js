// Create and export a module with two functions sum and multiply
// Both functions should two arguements and return the sum and product values

const sum=(a=2,b=3)=>{
    return a+b
  }
  
  const multiply=(a=2,b=3)=>{
    return a*b
  }
  
  module.exports.sum=sum
  module.exports.multiply=multiply