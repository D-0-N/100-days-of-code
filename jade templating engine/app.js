const express= require('express');
var app = express();

// set 'jade' as the 'view engine'
app.set('views','./views')
app.set("view engine", "jade")
// render the jade template engine with the following data as parameter:
        // option:"teachers" / "students",
        // Students:["Athul", "Ramij", "Nil", "Satyaki", "Souvik"],
        // Teachers :["Swarnali", "Paromita", "Poulomi", "sreejukta"]
app.get('/',(req,res)=>{
  const Students=["Athul", "Ramij", "Nil", "Satyaki", "Souvik"]
  const Teachers=["Swarnali", "Paromita", "Poulomi", "sreejukta"]
  res.render ('view',)
})
// run the application on port 8000
app.listen(8000,()=>{
  console.log('listening on 8000')
})