import React, {useState} from "react";

function Tracker() {
  const [waterUsages, setWaterUsages] = useState([]);

  const handleAddUsage = (gallons) => {
    const newUsage = {gallons};
    setWaterUsages([...waterUsages, newUsage]);
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
      <button onClick={() => handleAddUsage(10)}>
        Click here to Add 10 gals
      </button>
      <br />
      <button onClick={() => handleAddUsage(20)}>
        Click here to Add 20 gals
      </button>

      <br />

      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>
    </div>
  );
}

export default Tracker;
