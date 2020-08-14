const express = require("express");
const userRouter = express.Router();

userRouter.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const userName = req.body;
    res.cookie("login", JSON.stringify(userName));
    res.status(200).send("");
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

module.exports = userRouter;
