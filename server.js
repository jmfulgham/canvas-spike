// Socket server code goes here
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = process.env.PORT || 8000;

server.listen(port);
app.use(express.static("./public"));
console.info(`Server listening on port ${port}`);
