const express = require("express");
const cors = require("cors");
const http = require("http");
let bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes/routes");

app.use(routes);

const port = process.env.PORT || 9000;

server.listen(port, () => {
  console.log("Server is running in port " + port);
});
