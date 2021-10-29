const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")

app.use(express.static("public"))

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "public" , "html/index.html"))
})
app.get("/booktickets", (req,res) =>{
    res.status(200).sendFile(path.join(__dirname,"public","html/booking.html"))
});


app.get("*" , (req, res) => {
    res.render("404.pug")
  })
app.listen(port, ()=>{
    console.log("server started")
})