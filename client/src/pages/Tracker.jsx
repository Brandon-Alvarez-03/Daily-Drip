import React, { useState, useEffect } from "react";
import { FaToilet } from "react-icons/fa";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Bathtub from "@mui/icons-material/Bathtub";
import Shower from "@mui/icons-material/Shower";
import CountertopsIcon from "@mui/icons-material/Countertops";
import Wash from "@mui/icons-material/Wash";
import Form from "../components/Form/Form";

import "./Tracker.css";

function Tracker() {
  const initialUsages = JSON.parse(localStorage.getItem("waterUsages")) || [];
  const [waterUsages, setWaterUsages] = useState(initialUsages);

  const handleAddUsage = (gallons) => {
    const newUsage = { gallons };
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
  const costPerDay = ((totalGallons * 0.003 * 100) / 100).toFixed(2);
  const roundedCostPerDay = ((costPerDay * 100) / 100).toFixed(2);

  return (
    <div className="calculator">
      <h2>Water Usage Calculator</h2>
      <h6>
        Select your daily activities to track how your daily water footprint!
      </h6>
      <div className="usage-options">
        {waterUsages.some((usage) => usage.gallons === 18) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(18)}
          >
            <Shower style={{ fontSize: "48px" }} />
            <br />
            Shower
          </button>
        ) : (
          <button onClick={() => handleAddUsage(18)}>
            {" "}
            <Shower style={{ fontSize: "48px" }} />
            <br />
            Shower
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 17.5) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(17.5)}
          >
            <FaToilet style={{ fontSize: "48px" }} />
            <br />
            Flush
          </button>
        ) : (
          <button onClick={() => handleAddUsage(17.5)}>
            <FaToilet style={{ fontSize: "48px" }} />
            <br />
            Flush
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 20) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(20)}
          >
            <CountertopsIcon size={40} />
            <br />
            Dishes
          </button>
        ) : (
          <button onClick={() => handleAddUsage(20)}>
            <CountertopsIcon style={{ fontSize: "48px" }} />
            <br />
            Dishes
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 60) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(60)}
          >
            <LocalCarWashIcon style={{ fontSize: "48px" }} />
            <br />
            Car Wash
          </button>
        ) : (
          <button onClick={() => handleAddUsage(60)}>
            <LocalCarWashIcon style={{ fontSize: "48px" }} />
            <br />
            Car Wash
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 30) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(30)}
          >
            <LocalLaundryServiceIcon style={{ fontSize: "48px" }} />
            <br />
            Laundry
          </button>
        ) : (
          <button onClick={() => handleAddUsage(30)}>
            <LocalLaundryServiceIcon style={{ fontSize: "48px" }} />
            <br />
            Laundry
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 25) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(25)}
          >
            <RestaurantIcon style={{ fontSize: "48px" }} />
            <br />
            Eating Out
          </button>
        ) : (
          <button onClick={() => handleAddUsage(25)}>
            <RestaurantIcon style={{ fontSize: "48px" }} />
            <br />
            Eating Out
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 2.5) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(2.5)}
          >
            <Wash style={{ fontSize: "48px" }} />
            <br />
            Washing Hands
          </button>
        ) : (
          <button onClick={() => handleAddUsage(2.5)}>
            <Wash style={{ fontSize: "48px" }} />
            <br />
            Washing Hands
          </button>
        )}
        {waterUsages.some((usage) => usage.gallons === 50) ? (
          <button
            style={{ color: "#6495ED" }}
            onClick={() => handleRemoveUsage(50)}
          >
            <Bathtub style={{ fontSize: "48px" }} />
            <br />
            Bath
          </button>
        ) : (
          <button onClick={() => handleAddUsage(50)}>
            <Bathtub style={{ fontSize: "48px" }} />
            <br />
            Bath
          </button>
        )}
      </div>

      <br />

      <p>Total gallons of water used: {totalGallons}</p>
      <p>Total liters of water used: {totalLiters}</p>
      <p>Total cost of water used (1day): ${roundedCostPerDay}</p>
      <p>At this rate you will pay ${roundedCostPerDay * 30} every month!</p>

      {/* Add a submit button here to send array of numbers up to the db */}

      <Form />
    </div>
  );
}

export default Tracker;
