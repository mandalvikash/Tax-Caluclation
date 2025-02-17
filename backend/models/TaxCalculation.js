const mongoose = require("mongoose");

const taxCalculationSchema = new mongoose.Schema({
  annualIncome: Number,
  investments: Number,
  deductions: Number,
  otherIncome: Number,
  taxableIncome: Number,
  taxPayable: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("TaxCalculation", taxCalculationSchema);