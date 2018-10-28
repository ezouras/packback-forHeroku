const express = require("express"),
      path = require("path");

const app=express();
app.use(express.static('./dist/passback'));

app.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/passback/index.html'));
});
app.listen(process.env.PORT||8080,()=>{
  console.log("server started on 8080");
});
