require("dotenv").config(); //this allows you to stash "artificial env variables" in a file
const express = require("express");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());

// console.log(process.env.USER);
// console.log(process.env.HOME);
// console.log(process.env.PORT);
// console.log(process.env.LADY);
// console.log(process.env.API_SECRET);

server.get("/", (req, res) => {
  res.send("hello");
});

server.get("/api", (req, res) => {
  res.json({ message: "you rock" });
});
server.get("/api/learn", (req, res) => {
  res.json({ message: "test test test test" });
});
server.listen(port, () => {
  console.log(`listenging on ${port}`);
});
