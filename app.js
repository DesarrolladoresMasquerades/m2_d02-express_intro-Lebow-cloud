const { request, response } = require("express");
const express = require("express");
const res = require("express/lib/response");

require("dotenv").config();

const app = express();

app.use(express.static("public"));


app.all("/", (request, response)=>{
    response.sendFile(__dirname + "/views/index.html");
    
})

//THIS RESPONSE TO ALL HTTP VERBS
app.all("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.listen(3000), ()=> {
    console.log("App listening on port 3000")}

