const express = require("express");
const fs = require("fs");

//setting up the express router
const app = express();

app.use(express.json());

//write the code for routes here
app.get('/view',(req,res)=>{
  let data=fs.readFileSync('get.json')
  data=JSON.parse(data)
  if(req.query.id){
    let result=data.filter(el=>el.id===req.query.id)
    return res.status(200).send(result)
  }
  else{
    return res.status(200).send(data)
  }
})

app.post('/add',(req,res)=>{
  const data=req.body
  let result=fs.readFileSync('post.json')
  result=JSON.parse(result)
  result.push(data)
  fs.writeFileSync('post.json',JSON.stringify(result))
  res.sendStatus(200)
})

app.patch('/edit/:id',(req,res)=>{
  return res.sendStatus('updated')
})

module.exports = app;

