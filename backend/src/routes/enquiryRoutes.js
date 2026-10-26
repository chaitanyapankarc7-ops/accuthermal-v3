const express = require("express");
const { createContactEnquiry } = require("../controllers/enquiryController");

const router = express.Router();

router.post("/contact", createContactEnquiry);

module.exports = router;