import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createDay } from "../../services/day"
import categoryOptions from "./categories";
import "./Form.css"

function Form() {
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const usageRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        usage: usageRef.current.value,
      };
      await createDay(data);
      navigate(`/dashboard`);
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
              placeholder="Description"
              name="description"
              ref={descriptionRef}
            />
            <input
              type="number"
              id="usage"
              placeholder="Gals or Liters"
              name="usage"
              ref={usageRef}
            />
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