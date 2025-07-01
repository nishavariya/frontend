// const express = require("express");
// const router = express.Router();
// const US = require("../controller/appointment");

// router.post("create", US.create);

// router.get("get", US.get);

// router.patch("update/:id", US.update);

// router.delete("delete/:id", US.delete);

// module.exports = router;



const express = require("express");
const router = express.Router();
const US = require("../controller/appointment");


router.post("/", US.create);
router.get("/", US.get);
router.patch("/:id", US.update);
router.delete("/:id", US.delete);

module.exports = router;
