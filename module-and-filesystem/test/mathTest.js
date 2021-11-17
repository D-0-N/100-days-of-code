const maths = require('../maths');
const assert = require('chai').assert;

describe('maths.js function test',()=>{
    it("should return 7 as sum value", ()=>{
        let result = maths.sum(3, 4);
        assert.equal(result, 7);
        assert.typeOf(result, 'number');       
    });
    it('should return 15 as the sum value', ()=>{
           let result = maths.sum(9, 6);
           assert.equal(result, 15);  
    });

    it('should return 45 as the product value', ()=>{
        let product = maths.multiply(5,9);
        assert.equal(product, 45);
    });
    
    it('should return 66 as the product value', ()=>{
        let product = maths.multiply(6,11);
        assert.equal(product, 66);
    });
});
