
const express =require('express');
const fs=require('fs');

const app=new express();
const PORT=5000;

app.get('/',(req,res,next)=>{

    fs.readFile('./backup/emp.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
       
        res.send(data);
        res.end();
      });

})

app.listen(PORT,()=> console.log("Server is listening to " +PORT));