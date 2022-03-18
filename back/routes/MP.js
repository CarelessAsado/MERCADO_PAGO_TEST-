const { createPreference } = require("../controllers/MP");

const router = require("express").Router();

router.post("/mp", createPreference);
module.exports = router;
