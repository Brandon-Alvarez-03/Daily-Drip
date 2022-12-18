import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createDay} from "../../services/day";
import categoryOptions from "./categories";
import "./Form.css";

function Form({totalLiters}) {
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const usageRef = useRef();
  const unitRef = useRef(); // Add a reference for the hidden input field that holds the unit value
  const navigate = useNavigate();
  const [unit, setUnit] = useState("liters"); // Add a state variable to store the selected unit

  const handleUnitChange = (event) => {
    setUnit(event.target.value); // Update the unit state when the user selects a different unit
  };

  // Convert the totalLiters value to gallons if the user selects the "gallons" option
  const total =
    unit === "gallons" ? Math.round(totalLiters / 3.78541) : totalLiters;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        usage: usageRef.current.value,
        unit: unit, // Add the unit value to the data object
      };
      await createDay(data);
      navigate(`/dashboard`);
      alert("Dont use too Much!")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-day-container">
      <form onSubmit={handleSubmit} className="day-details">
        <input
          type="text"
          id="description"
          placeholder="Describe Activity!"
          name="description"
          ref={descriptionRef}
        />
        <input
          type="number"
          id="usage"
          placeholder="Gals or Liters"
          name="usage"
          ref={usageRef}
          value={total}
        />
        <select onChange={handleUnitChange}>
          <option value="liters">Liters</option>
          <option value="gallons">Gallons</option>
        </select>
        <select
          name="category"
          className="select"
          ref={categoryRef}
          id="category"
          placeholder="Category"
        >
          {categoryOptions.map((option, index) => {
            return (
              <option value={option.category} key={index}>
                {option.title}
              </option>
            );
          })}
        </select>
        <button type="submit" id="day-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
