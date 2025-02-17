const express = require("express");
const taxController = require("../controllers/taxController");

const router = express.Router();

// POST /api/calculate-tax
router.post("/calculate-tax", taxController.calculateTax);

// GET /api/tax-history
router.get("/tax-history", taxController.getTaxHistory);

module.exports = router;