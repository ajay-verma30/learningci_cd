const express = require('express')
const app = express();



app.get('/',(req,res)=>{
    res.status(200).send("Working")
})
const port = process.env.PORT || 3000;
app.listen(port)