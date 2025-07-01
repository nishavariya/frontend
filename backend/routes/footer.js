const express = require("express");
const router = express.Router();
const { subscribeEmail } = require("../controller/footer");

router.post("/", subscribeEmail);

module.exports = router;
