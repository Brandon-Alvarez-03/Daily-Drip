import React, {useState} from "react";

function Tracker() {
  const [waterUsages, setWaterUsages] = useState([]);

  const handleAddUsage = (gallons) => {
    const newUsage = {gallons};
    setWaterUsages([...waterUsages, newUsage]);
  };

  const handleRemoveUsage = (gallons) => {
    const updatedUsages = waterUsages.filter(
      (usage) => usage.gallons !== gallons
    );
    setWaterUsages(updatedUsages);
  };

  // Calculate total gallons of water used
  const totalGallons = waterUsages.reduce(
    (acc, usage) => acc + usage.gallons,
    0
  );

  // Convert gallons to liters
  const totalLiters = totalGallons * 3.78541;

  return (
    <div>
      <h2>Water Usage Calculator</h2>
      <h6>
        Select your daily activities to track how your daily water usage fares!
      </h6>
      {waterUsages.some((usage) => usage.gallons === 10) ? (
        <button onClick={() => handleRemoveUsage(10)}>
          -10
        </button>
      ) : (
        <button onClick={() => handleAddUsage(10)}>
          +10
        </button>
      )}
      {waterUsages.some((usage) => usage.gallons === 20) ? (
        <button onClick={() => handleRemoveUsage(20)}>
          -20
        </button>
      ) : (
        <button onClick={() => handleAddUsage(20)}>
          +20
        </button>
      )}
      {waterUsages.some((usage) => usage.gallons === 30) ? (
        <button onClick={() => handleRemoveUsage(30)}>
          -30
        </button>
      ) : (
        <button onClick={() => handleAddUsage(30)}>
          +30
        </button>
      )}

      <br />

      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>
    </div>
  );
}

export default Tracker;
