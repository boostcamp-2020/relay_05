const express = require('express');
const router = express.Router();

const userRouter = require("./userrouter");
const RTComment = require('./comment')

router.use('/comment',RTComment)
router.use("/user", userRouter);
module.exports = router