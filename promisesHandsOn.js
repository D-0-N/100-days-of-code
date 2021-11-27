var express = require('express');
var app = express();
var Promise=require('bluebird')
var fs = Promise.promisifyAll(require('fs'));

app.get( '/users', function(req,res) {
  fs.readFileAsync('./users.json', 'utf-8')
  .then((data)=>{
    try {
          data = JSON.parse(data);
          res.send(data);
      }
      catch (e) {
          console.error("invalid json file");
      }
  })
  .catch((err)=>{
    console.log("unable to read file")
  })
});
app.listen(3000,function(){
  console.log("listening on port 3000");
});