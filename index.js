const server = require("express")();

server.get("/", (req, res) => {
  res.send("heelo");
});

server.listen(5000, () => {
  console.log("listening on port 5000");
});
