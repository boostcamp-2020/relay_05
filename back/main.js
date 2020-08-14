require("dotenv").config();
const express = require("express");
const router = require("./routes");
const userRouter = require("./routes/userrouter");
const app = express();
const port = 3200;

const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:8080"],
  })
);
app.use("/user", userRouter);
app.use("/", router);

app.listen(port, () => {
  console.log(`Now listen ${port} port.`);
});
const WSConnector = require("./websocket/WSConnector");
WSConnector.connect();
