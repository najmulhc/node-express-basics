const express = require("express");
const cors = require("cors"); // this is cors aka cross origin resource sharing that allows us to share data between backend and frontend
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
//for pursing data from body in post
app.use(express.json());

//creating some data
const users = [];
// getting data from client side
app.get("/", (req, res) => {
  console.log(req);
  res.send(users);
});
// geting data from backend
app.get("/testing", (req, res) => {
  console.log(req);
  res.send({ name: "testing" });
  console.log("Successfully sent the data from client side");
});

// posting data from frontend
app.post("/testing", (req, res) => {
  let user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("server is working");
});
