const express = require("express");

const {
  createContactEnquiry,
  createSupportEnquiry,
} = require("../controllers/enquiryController");

const router = express.Router();

// Contact Us form
router.post("/contact", createContactEnquiry);

// Support form
router.post("/support", createSupportEnquiry);

module.exports = router;