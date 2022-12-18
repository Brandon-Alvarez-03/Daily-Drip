import React, {useState, useEffect} from "react";
import {FaShower, FaToilet, FaSink} from "react-icons/fa";
import {AiOutlineCar} from "react-icons/ai";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import "./Tracker.css";

function Tracker() {
  const initialUsages = JSON.parse(localStorage.getItem("waterUsages")) || [];
  const [waterUsages, setWaterUsages] = useState(initialUsages);

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

  // Save the waterUsages state to local storage whenever it is updated
  useEffect(() => {
    localStorage.setItem("waterUsages", JSON.stringify(waterUsages));
  }, [waterUsages]);

  // Clear the waterUsages state in local storage at midnight
  useEffect(() => {
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    const timer = setTimeout(() => {
      localStorage.removeItem("waterUsages");
    }, midnight.getTime() - Date.now());
    return () => clearTimeout(timer);
  }, []);

  // Calculate total gallons of water used
  const totalGallons = waterUsages.reduce(
    (acc, usage) => acc + usage.gallons,
    0
  );

  // Convert gallons to liters
  const totalLiters = Math.round(totalGallons * 3.78541);

  return (
    <div className="calculator">
      <h2>Water Usage Calculator</h2>
      <h6>
        Select your daily activities to track how your daily water usage fares!
      </h6>
      {waterUsages.some((usage) => usage.gallons === 18) ? (
        <button onClick={() => handleRemoveUsage(18)}>
          <FaShower style={{color: "#6495ED"}} />
        </button>
      ) : (
        <button onClick={() => handleAddUsage(18)}>
          {" "}
          <FaShower />
        </button>
      )}
      {waterUsages.some((usage) => usage.gallons === 3.5) ? (
        <button onClick={() => handleRemoveUsage(3.5)}>
          <FaToilet style={{color: "#6495ED"}} />
        </button>
      ) : (
        <button onClick={() => handleAddUsage(3.5)}>
          <FaToilet />
        </button>
      )}
      {waterUsages.some((usage) => usage.gallons === 20) ? (
        <button
          style={{color: "#6495ED"}}
          onClick={() => handleRemoveUsage(20)}
        >
          <FaSink style={{color: "#6495ED"}} size={40} />
          <br />
          Dishes
        </button>
      ) : (
        <button onClick={() => handleAddUsage(20)}>
          <FaSink size={40} />
          <br />
          Dishes
        </button>
      )}
      {waterUsages.some((usage) => usage.gallons === 60) ? (
        <button
          style={{color: "#6495ED"}}
          onClick={() => handleRemoveUsage(60)}
        >
          <AiOutlineCar style={{color: "#6495ED"}} size={40} />
          <br />
          Car Wash
        </button>
      ) : (
        <button onClick={() => handleAddUsage(60)}>
          <AiOutlineCar size={40} />
          <br />
          Car Wash
        </button>
      )}

      <br />

      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>
    </div>
  );
}

export default Tracker;
