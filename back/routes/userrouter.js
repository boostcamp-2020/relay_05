const express = require("express");
const userRouter = express.Router();
const multer = require("multer");
const CTRimgfilter = require("../apps/controller/CTRimgfilter");
const request = require('request');
const fs=require('fs');
const { memoryStorage } = require("multer");

// memoryStorage 수정
const upload = multer({
  storage: memoryStorage()
});

userRouter.post("/image", upload.single("img"), async (req, res, next) => {
  try {
      console.log(req.file.buffer);
      request.post({
      headers:{'Content-Type': 'application/json'},
      url : 'http://localhost:5000/cartoonize',
      body : {'img' : req.file.buffer.toString('base64')},
      json : true
    }, (p_err, p_res, body) => {
      if (p_err) {
        console.log('ERROR !');
      }
      console.log('SUCCESS !');
      res.status(200).send("");
    });
    
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

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