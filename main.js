"use strict";
console.log("Its Started");

let express = require('express');
let app = new express();

app.get('/Xmen',(req,res)=>{
        res.status(200)
        .json({
        Xmen:[{
            name:"Wolverine",
            ability:"Adamantium-laced skeleton and regenerative healing factor",
            id:"1"},
                  {
            name:"Cyclops",
            ability:"Optic force blasts",
            id:"2"},
                  {
            name:"Jean Grey",
            ability:"Telekinesis and Telepathy",
            id:"3"}]
    })
        })

app.get('/Xmen/1',(req,res)=>{
    res.status(200)
    .json({
        Xmen:[{
            name:"Wolverine",
            ability:"Adamantium-laced skeleton and regenerative healing factor",
            id:"1"}]
    })
})

app.listen(3333,()=>{
 console.log("ITS LISTENING");   
})

