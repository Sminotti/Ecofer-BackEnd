const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/contacto");

router.get("/", (req, res) => res.render("contacto"));
router.post("/sendEmail", sendEmail);

module.exports = router;
