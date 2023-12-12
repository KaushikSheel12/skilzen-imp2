import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

export const ColorChart = ({ rangeValue }) => {
  const data = {
    labels: ["gray", "yellow"],
    datasets: [
      {
        data: [rangeValue, 200],
        backgroundColor: ["#6EB077", "#A0D6B4"],
        hoverBackgroundColor: ["#00FF7F", "#CCFFFF"],
      },
    ],
  };

  return <Pie data={data} />;
};
