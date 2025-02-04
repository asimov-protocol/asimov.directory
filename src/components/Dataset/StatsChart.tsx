"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const StatsChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  // Dummy data
  const data = {
    labels,
    datasets: [
      {
        label: "Views",
        data: [120, 125, 130, 140, 150, 155, 160, 170, 175, 180, 190, 200],
        borderColor: "#f37021",
        backgroundColor: "rgba(243,124,34,0.2)",
        tension: 0.4,
        fill: true
      },
      {
        label: "Downloads",
        data: [90, 95, 100, 110, 115, 120, 125, 130, 135, 140, 145, 150],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255,255,255,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { display: false }
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" }
      }
    },
    plugins: {
      legend: {
        labels: { usePointStyle: true, pointStyle: "circle", color: "#fff" }
      },
      title: {
        display: false
      }
    }
  };

  return (
    <div className="w-full h-52">
      <Line data={data} options={options} />
    </div>
  );
}

export default StatsChart;
