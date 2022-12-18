import { useState, useEffect, useMemo } from "react";
import { getDays } from "../services/day";
import categoryOptions from "../components/Form/categories";
import { useSelector } from "react-redux";
import "./DashBoard.css";
import LG from "../components/LG";
import Barz from "../components/Barz";

function DashBoard() {
  const [days, setDays] = useState([]);
  const [query, setQuery] = useState("");
  const { loading, userInfo } = useSelector((state) => state.auth);

  function prettyDate(time) {
    let date = new Date(time);
    let day = date.toLocaleDateString();
    return day;
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const days = await getDays();
      setDays(days);
    };
    fetchPosts();
  }, []);
  const filtered = useMemo(
    () =>
      days.filter((day) => {
        if (query === "all") {
          setQuery("");
        }
        return (
          day.category.toLowerCase().includes(query) &&
          day.owner === userInfo.id
        );
      }),
    [days, query]
  );

  if (!Object.keys(days).length) return <h1>Loading...</h1>;

  return (
    <div className="dashboard-container">
      {days.length > 0 ? (
        <div className="dash-items">
          <div className="dash-aside">
            {filtered.map((day, index) => {
              return (
                <div key={index}>
                  <h1 className="dash-desc">{day.description}</h1>
                </div>
              );
            })}
            <form className="dash-form">
              <select
                name="category"
                className="select"
                id="category"
                onChange={(e) => setQuery(e.target.value)}
              >
                {categoryOptions.map((option, index) => {
                  return (
                    <option value={option.category} key={index}>
                      {option.title}
                    </option>
                  );
                })}
              </select>
            </form>
          </div>
          <LG days={filtered} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
      <Barz days={filtered} />
    </div>
  );
}

export default DashBoard;
