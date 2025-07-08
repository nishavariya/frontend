const express = require("express");
const router = express.Router();
const { subscribeEmail ,get} = require("../controller/footer");

router.post("/", subscribeEmail);
router.get("/", get);


module.exports = router;
