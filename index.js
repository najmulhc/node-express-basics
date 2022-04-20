const  express = require("express");
const cors = require("cors");// this is cors aka cross origin resource sharing that allows us to share data between backend and frontend 
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

//creating some data 
const user = {name:"Abdul basir", university: "Dhaka", department:"Management Informations Systems", course:"Bangladesh sturdies", batch:16, ischairman:false};
app.get("/", (req, res) => { 
    res.send(user)
})

app.listen(port, () => {
    console.log("server is working");
})