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
      <div className="usage-options">
        {waterUsages.some((usage) => usage.gallons === 18) ? (
          <button
            style={{color: "#6495ED"}}
            onClick={() => handleRemoveUsage(18)}
          >
            <FaShower size={40} />
            <br />
            Shower
          </button>
        ) : (
          <button onClick={() => handleAddUsage(18)}>
            {" "}
            <FaShower size={40} />
            <br />
            Shower
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 17.5) ? (
          <button
            style={{color: "#6495ED"}}
            onClick={() => handleRemoveUsage(17.5)}
          >
            <FaToilet size={40} />
            <br />
            Flush
          </button>
        ) : (
          <button onClick={() => handleAddUsage(17.5)}>
            <FaToilet size={40} />
            <br />
            Flush
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 20) ? (
          <button
            style={{color: "#6495ED"}}
            onClick={() => handleRemoveUsage(20)}
          >
            <FaSink size={40} />
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
            <LocalCarWashIcon size={50} />
            <br />
            Car Wash
          </button>
        ) : (
          <button onClick={() => handleAddUsage(60)}>
            <LocalCarWashIcon size={50} />
            <br />
            Car Wash
          </button>
        )}
      </div>

      <br />

      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>

      {/* Add a submit button here to send array of numbers up to the db */}
    </div>
  );
}

export default Tracker;
