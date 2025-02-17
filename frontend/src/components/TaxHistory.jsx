import React, { useEffect, useState } from "react";

function TaxHistory() {
  const [taxHistory, setTaxHistory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tax-history")
      .then((response) => response.json())
      .then((data) => setTaxHistory(data))
      .catch((error) => console.error("Error fetching tax history:", error));
  }, []);

  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Tax History</h2>
      {taxHistory.length > 0 ? (
        <ul className="space-y-4">
          {taxHistory.map((record, index) => (
            <li key={index} className="p-4 bg-white rounded-lg shadow-sm">
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(record.timestamp).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Taxable Income:</span> ₹
                {record.taxableIncome}
              </p>
              <p>
                <span className="font-semibold">Tax Payable:</span> ₹
                {record.taxPayable}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tax history available.</p>
      )}
    </div>
  );
}

export default TaxHistory;