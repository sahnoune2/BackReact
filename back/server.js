const express = require("express");
const { config } = require("./config/config");
const { userRouter, productRouter } = require("./router/router");
const cors = require("cors");
const cookieParser = require("cookie-parser"); 

const port = 5000;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());  

config();

app.use("/", userRouter);
app.use("/", productRouter);
app.listen(port, () => {
  console.log("server is running ");
});
