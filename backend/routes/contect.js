const express = require("express");
const router = express.Router();
const { submitContactForm } = require("../controller/contect");

router.post("/", submitContactForm);

module.exports = router;
