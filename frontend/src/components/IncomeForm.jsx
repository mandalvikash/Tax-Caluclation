import React, { useState } from "react";

function IncomeForm({ onSubmit }) {
  const [incomeDetails, setIncomeDetails] = useState({
    annualIncome: "",
    investments: "",
    deductions: "",
    otherIncome: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeDetails({ ...incomeDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(incomeDetails);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Annual Income:
        </label>
        <input
          type="number"
          name="annualIncome"
          value={incomeDetails.annualIncome}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Investments (80C, 80D, etc.):
        </label>
        <input
          type="number"
          name="investments"
          value={incomeDetails.investments}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Other Deductions (HRA, LTA, etc.):
        </label>
        <input
          type="number"
          name="deductions"
          value={incomeDetails.deductions}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Income from Other Sources:
        </label>
        <input
          type="number"
          name="otherIncome"
          value={incomeDetails.otherIncome}
          onChange={handleChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Calculate Tax
      </button>
    </form>
  );
}

export default IncomeForm;