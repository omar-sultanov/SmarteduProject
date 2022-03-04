const express = require('express')
const app = express();

const port = 3000;

app.get("/",(req,res)=>{
    res.status(200).send("HOME PAGE")
})
app.listen(port,()=>{
    console.log(`Server is working with port:${port}`);
})