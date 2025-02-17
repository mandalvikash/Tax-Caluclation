import React from "react";

function TaxResult({ taxResult }) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        Tax Calculation Result
      </h2>
      <p className="text-gray-700">
        <span className="font-semibold">Taxable Income:</span> ₹
        {taxResult.taxableIncome}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Tax Payable:</span> ₹
        {taxResult.taxPayable}
      </p>
      {taxResult.suggestions && (
        <p className="text-gray-700">
          <span className="font-semibold">Suggestions:</span>{" "}
          {taxResult.suggestions}
        </p>
      )}
    </div>
  );
}

export default TaxResult;