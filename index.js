const express = require('express')
const app = express();


app.get('/' , (req ,res)=>{
    res.json("hellow world")
})






app.listen(4000 ,() =>{
    console.log('Connected')
})
