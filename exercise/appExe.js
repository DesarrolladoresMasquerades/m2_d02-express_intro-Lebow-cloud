const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.static("public"))

app.all("/hobbies", (req, res)=>{
    res.sendFile(__dirname + "/views/hobbies.html")
})
app.all("/hobbies/crochet", (req, res)=>{
    res.sendFile(__dirname + "/views/crochet.html")
})




app.listen(3001), () => {
    console.log("App listening on port 5500")
}