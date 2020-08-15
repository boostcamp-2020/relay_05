const express = require("express");
const router = express.Router();

const CTRComments = require("../apps/controller/CTRComments");

router.post("/login", async (req, res, next) => {
  try {
    console.log(req.body);
    const { userName } = req.body;
    res.cookie("login", JSON.stringify(userName));
    res.status(200).send("");
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

router.post("/", CTRComments.create);
// router.delete('/', CTRComments.delete);
router.get("/", CTRComments.get);

module.exports = router;
