import React, { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import TaxResult from "./components/TaxResult";
import TaxHistory from "./components/TaxHistory";

function App() {
  const [taxResult, setTaxResult] = useState(null);

  const handleCalculateTax = async (incomeDetails) => {
    try {
      const response = await fetch("http://localhost:5000/api/calculate-tax", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(incomeDetails),
      });
      const data = await response.json();
      setTaxResult(data);
    } catch (error) {
      console.error("Error calculating tax:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Simple Tax Calculation Portal
        </h1>
        <IncomeForm onSubmit={handleCalculateTax} />
        {taxResult && <TaxResult taxResult={taxResult} />}
        <TaxHistory />
      </div>
    </div>
  );
}

export default App;