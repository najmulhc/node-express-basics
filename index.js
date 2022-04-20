const  express = require("express");
const app = express();
const port = process.env.PORT || 4000;

//creating some data 
const user = {name:"Abdul basir", university: "Dhaka", department:"Management Informations Systems", course:"Bangladesh sturdies", batch:16, ischairman:false};
app.get("/", (req, res) => { 
    res.send(user)
})

app.listen(port, () => {
    console.log("server is working");
})