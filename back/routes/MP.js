const { createPreference, confirmPayment } = require("../controllers/MP");

const router = require("express").Router();

router.post("/mp", createPreference);
router.get("/feedback", confirmPayment);
module.exports = router;
