const express = require("express");
const router = express.Router();
const US   = require("../controller/contect");

router.post("/", US.submitContactForm);
router.get("/", US.get);

module.exports = router;
