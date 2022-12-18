import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function LG(props) {
  const { days } = props;

  const filtered = days.map((day) => {
    return day.description;
  });

  const usage = days.map((day) => {
    return day.usage;
  });
  
  const data = {
    labels: filtered,
    datasets: [
      {
        label: "Usage",
        data: usage,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="LG">
      <Line data={data} />
    </div>
  );
}
