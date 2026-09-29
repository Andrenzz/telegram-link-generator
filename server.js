const express = require("express");
const fs = require("fs");


const app = express();


app.get("/r/:id",(req,res)=>{


let links = JSON.parse(
    fs.readFileSync("links.json")
);


let target = links[req.params.id];


if(target){

    res.redirect(target);

}
else{

    res.send("Link tidak ditemukan");

}


});


app.listen(3000,()=>{

console.log("Server aktif port 3000");

});