const express = require('express');
const router = express.Router();

const CTRComments = require('../apps/controller/CTRComments');

router.post('/', CTRComments.create);
// router.delete('/', CTRComments.delete);
router.get('/', CTRComments.get);

module.exports = router