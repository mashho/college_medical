const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;

app.get('/',(req,res)=>{
    res.send({message:"Hii"});
})

app.listen(PORT,()=>{
    console.log("Backend is running on Port 8800");
})