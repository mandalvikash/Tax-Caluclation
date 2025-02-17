const TaxCalculation = require("../models/TaxCalculation");

exports.calculateTax = async (req, res) => {
  const { annualIncome, investments, deductions, otherIncome } = req.body;

  const taxableIncome =
    annualIncome - (investments + deductions) + otherIncome;

  
  let taxPayable = 0;
  if (taxableIncome <= 500000) {
    taxPayable = 0;
  } else if (taxableIncome <= 1000000) {
    taxPayable = (taxableIncome - 500000) * 0.2;
  } else {
    taxPayable = 125000 + (taxableIncome - 1000000) * 0.3;
  }

 
  const taxRecord = new TaxCalculation({
    annualIncome,
    investments,
    deductions,
    otherIncome,
    taxableIncome,
    taxPayable,
  });

  await taxRecord.save();

  
  res.json({
    taxableIncome,
    taxPayable,
    suggestions: "Consider investing more in 80C to save tax.",
  });
};


exports.getTaxHistory = async (req, res) => {
  try {
    const taxHistory = await TaxCalculation.find().sort({ timestamp: -1 });
    res.json(taxHistory);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tax history" });
  }
};

