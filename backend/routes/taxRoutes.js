const express = require("express");
const taxController = require("../controllers/taxController");

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Tax Calculation Portal is Live!");
  });

router.post("/calculate-tax", taxController.calculateTax);

router.get("/tax-history", taxController.getTaxHistory);

module.exports = router;
