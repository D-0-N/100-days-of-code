const fs= require('fs');
const assert = require('chai').assert;
const app = require('../app');
const maths= require('../maths');

describe('app.js tests',()=>{

 
    it('should should check the maths sum function called succesfully',function(){
      const result = maths.sum(3,4);
      assert.equal(result , 7);  
    });

    it('should should check the maths multiply function called succesfully',function(){
      const product = maths.multiply(3,4);
      assert.equal(product, 12);  
    });

    it('should check the writeFile successfull', function(){
      const result = maths.sum(4,4);
      assert.equal(result , 8);

      const product = maths.multiply(3,8);
      assert.equal(product, 24);  

      let text= "The sum of the numbers is: 8. The product of the numbers is: 24"

      fs.readFile('output.txt', (err, data)=>{
         assert(data, text);
      });     
      
    });

    it('should check the copyFile successfully', function(){
      let text = "This is a node.js application based on modules and file system."
      
      fs.readFile('input.txt', (err, data)=>{
          fs.readFile("duplicate.txt", (err, data)=>{
            assert(data, text);
          })
      })
    });
});
