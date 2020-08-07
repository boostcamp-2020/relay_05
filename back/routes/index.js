const express = require('express');
const router = express.Router();

const RTComment = require('./comment')

router.use('/comment',RTComment)

module.exports = router