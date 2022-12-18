import React from "react";

function Tracker() {
  const waterUsages = [
    {gallons: 10},
    {gallons: 20},
    {gallons: 30},
    {gallons: 40},
  ];

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
      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>
    </div>
  );
}

export default Tracker;
