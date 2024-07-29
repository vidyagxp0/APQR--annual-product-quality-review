import { useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import annotationPlugin from 'chartjs-plugin-annotation';
import "./Chart.css";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import BottomHeader from "../BottomHeader";

// Register Chart.js plugins
ChartJS.register(...registerables, annotationPlugin);

export default function Analytics5() {
  const [selectedOption, setSelectedOption] = useState("hourly");
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  const [chartType, setChartType] = useState("line");
  const location = useLocation();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };
  const records=[  {"Batch No.": 100001, "LSL": 90, "Observed Value": 25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100002, "LSL": 90, "Observed Value": 50, "USL": 110, "Average": 100.01},
    {"Batch No.": 100003, "LSL": 90, "Observed Value": 41, "USL": 110, "Average": 100.01},
    {"Batch No.": 100004, "LSL": 90, "Observed Value": 32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100005, "LSL": 90, "Observed Value": -25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100006, "LSL": 90, "Observed Value": -45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100007, "LSL": 90, "Observed Value": -85, "USL": 110, "Average": 100.01},
    {"Batch No.": 100008, "LSL": 90, "Observed Value": -120, "USL": 110, "Average": 100.01},
    {"Batch No.": 100009, "LSL": 90, "Observed Value": -111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100010, "LSL": 90, "Observed Value": 111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100011, "LSL": 90, "Observed Value": 90, "USL": 110, "Average": 100.01},
    {"Batch No.": 100012, "LSL": 90, "Observed Value": 42, "USL": 110, "Average": 100.01},
    {"Batch No.": 100013, "LSL": 90, "Observed Value": 22, "USL": 110, "Average": 100.01},
    {"Batch No.": 100014, "LSL": 90, "Observed Value": 35, "USL": 110, "Average": 100.01},
    {"Batch No.": 100015, "LSL": 90, "Observed Value": 79, "USL": 110, "Average": 100.01},
    {"Batch No.": 100016, "LSL": 90, "Observed Value": 23, "USL": 110, "Average": 100.01},
    {"Batch No.": 100017, "LSL": 90, "Observed Value": 29, "USL": 110, "Average": 100.01},
    {"Batch No.": 100018, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100019, "LSL": 90, "Observed Value": -32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100020, "LSL": 90, "Observed Value": -11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100021, "LSL": 90, "Observed Value": -13, "USL": 110, "Average": 100.01},
    {"Batch No.": 100022, "LSL": 90, "Observed Value": 15, "USL": 110, "Average": 100.01},
    {"Batch No.": 100023, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100024, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100025, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100026, "LSL": 90, "Observed Value": 113, "USL": 110, "Average": 100.01},
    {"Batch No.": 100027, "LSL": 90, "Observed Value": 34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100028, "LSL": 90, "Observed Value": -34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100029, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100030, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100031, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100032, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100033, "LSL": 90, "Observed Value": 78, "USL": 110, "Average": 100.01},
    {"Batch No.": 100034, "LSL": 90, "Observed Value":34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100035, "LSL": 90, "Observed Value": 43, "USL": 110, "Average": 100.01},
    {"Batch No.": 100036, "LSL": 90, "Observed Value": 12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100037, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100038, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100039, "LSL": 90, "Observed Value": 21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100040, "LSL": 90, "Observed Value": 46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100041, "LSL": 90, "Observed Value": -46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100042, "LSL": 90, "Observed Value": -71, "USL": 110, "Average": 100.01},
    {"Batch No.": 100043, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100044, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100045, "LSL": 90, "Observed Value": 24, "USL": 110, "Average": 100.01},
    {"Batch No.": 100046, "LSL": 90, "Observed Value": 30, "USL": 110, "Average": 100.01},
    {"Batch No.": 100047, "LSL": 90, "Observed Value": 1, "USL": 110, "Average": 100.01},
    {"Batch No.": 100001, "LSL": 90, "Observed Value": 25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100002, "LSL": 90, "Observed Value": 50, "USL": 110, "Average": 100.01},
    {"Batch No.": 100003, "LSL": 90, "Observed Value": 41, "USL": 110, "Average": 100.01},
    {"Batch No.": 100004, "LSL": 90, "Observed Value": 32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100005, "LSL": 90, "Observed Value": -25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100006, "LSL": 90, "Observed Value": -45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100007, "LSL": 90, "Observed Value": -85, "USL": 110, "Average": 100.01},
    {"Batch No.": 100008, "LSL": 90, "Observed Value": -120, "USL": 110, "Average": 100.01},
    {"Batch No.": 100009, "LSL": 90, "Observed Value": -111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100010, "LSL": 90, "Observed Value": 111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100011, "LSL": 90, "Observed Value": 90, "USL": 110, "Average": 100.01},
    {"Batch No.": 100012, "LSL": 90, "Observed Value": 42, "USL": 110, "Average": 100.01},
    {"Batch No.": 100013, "LSL": 90, "Observed Value": 22, "USL": 110, "Average": 100.01},
    {"Batch No.": 100014, "LSL": 90, "Observed Value": 35, "USL": 110, "Average": 100.01},
    {"Batch No.": 100015, "LSL": 90, "Observed Value": 79, "USL": 110, "Average": 100.01},
    {"Batch No.": 100016, "LSL": 90, "Observed Value": 23, "USL": 110, "Average": 100.01},
    {"Batch No.": 100017, "LSL": 90, "Observed Value": 29, "USL": 110, "Average": 100.01},
    {"Batch No.": 100018, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100019, "LSL": 90, "Observed Value": -32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100020, "LSL": 90, "Observed Value": -11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100021, "LSL": 90, "Observed Value": -13, "USL": 110, "Average": 100.01},
    {"Batch No.": 100022, "LSL": 90, "Observed Value": 15, "USL": 110, "Average": 100.01},
    {"Batch No.": 100023, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100024, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100025, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100026, "LSL": 90, "Observed Value": 113, "USL": 110, "Average": 100.01},
    {"Batch No.": 100027, "LSL": 90, "Observed Value": 34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100028, "LSL": 90, "Observed Value": -34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100029, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100030, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100031, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100032, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100033, "LSL": 90, "Observed Value": 78, "USL": 110, "Average": 100.01},
    {"Batch No.": 100034, "LSL": 90, "Observed Value":34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100035, "LSL": 90, "Observed Value": 43, "USL": 110, "Average": 100.01},
    {"Batch No.": 100036, "LSL": 90, "Observed Value": 12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100037, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100038, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100039, "LSL": 90, "Observed Value": 21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100040, "LSL": 90, "Observed Value": 46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100041, "LSL": 90, "Observed Value": -46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100042, "LSL": 90, "Observed Value": -71, "USL": 110, "Average": 100.01},
    {"Batch No.": 100043, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100044, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100045, "LSL": 90, "Observed Value": 24, "USL": 110, "Average": 100.01},
    {"Batch No.": 100046, "LSL": 90, "Observed Value": 30, "USL": 110, "Average": 100.01},
    {"Batch No.": 100047, "LSL": 90, "Observed Value": 1, "USL": 110, "Average": 100.01},
 {"Batch No.": 100001, "LSL": 90, "Observed Value": 25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100002, "LSL": 90, "Observed Value": 50, "USL": 110, "Average": 100.01},
    {"Batch No.": 100003, "LSL": 90, "Observed Value": 41, "USL": 110, "Average": 100.01},
    {"Batch No.": 100004, "LSL": 90, "Observed Value": 32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100005, "LSL": 90, "Observed Value": -25, "USL": 110, "Average": 100.01},
    {"Batch No.": 100006, "LSL": 90, "Observed Value": -45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100007, "LSL": 90, "Observed Value": -85, "USL": 110, "Average": 100.01},
    {"Batch No.": 100008, "LSL": 90, "Observed Value": -120, "USL": 110, "Average": 100.01},
    {"Batch No.": 100009, "LSL": 90, "Observed Value": -111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100010, "LSL": 90, "Observed Value": 111, "USL": 110, "Average": 100.01},
    {"Batch No.": 100011, "LSL": 90, "Observed Value": 90, "USL": 110, "Average": 100.01},
    {"Batch No.": 100012, "LSL": 90, "Observed Value": 42, "USL": 110, "Average": 100.01},
    {"Batch No.": 100013, "LSL": 90, "Observed Value": 22, "USL": 110, "Average": 100.01},
    {"Batch No.": 100014, "LSL": 90, "Observed Value": 35, "USL": 110, "Average": 100.01},
    {"Batch No.": 100015, "LSL": 90, "Observed Value": 79, "USL": 110, "Average": 100.01},
    {"Batch No.": 100016, "LSL": 90, "Observed Value": 23, "USL": 110, "Average": 100.01},
    {"Batch No.": 100017, "LSL": 90, "Observed Value": 29, "USL": 110, "Average": 100.01},
    {"Batch No.": 100018, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100019, "LSL": 90, "Observed Value": -32, "USL": 110, "Average": 100.01},
    {"Batch No.": 100020, "LSL": 90, "Observed Value": -11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100021, "LSL": 90, "Observed Value": -13, "USL": 110, "Average": 100.01},
    {"Batch No.": 100022, "LSL": 90, "Observed Value": 15, "USL": 110, "Average": 100.01},
    {"Batch No.": 100023, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100024, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100025, "LSL": 90, "Observed Value": 45, "USL": 110, "Average": 100.01},
    {"Batch No.": 100026, "LSL": 90, "Observed Value": 113, "USL": 110, "Average": 100.01},
    {"Batch No.": 100027, "LSL": 90, "Observed Value": 34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100028, "LSL": 90, "Observed Value": -34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100029, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100030, "LSL": 90, "Observed Value": 18, "USL": 110, "Average": 100.01},
    {"Batch No.": 100031, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100032, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100033, "LSL": 90, "Observed Value": 78, "USL": 110, "Average": 100.01},
    {"Batch No.": 100034, "LSL": 90, "Observed Value":34, "USL": 110, "Average": 100.01},
    {"Batch No.": 100035, "LSL": 90, "Observed Value": 43, "USL": 110, "Average": 100.01},
    {"Batch No.": 100036, "LSL": 90, "Observed Value": 12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100037, "LSL": 90, "Observed Value": -12, "USL": 110, "Average": 100.01},
    {"Batch No.": 100038, "LSL": 90, "Observed Value": -21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100039, "LSL": 90, "Observed Value": 21, "USL": 110, "Average": 100.01},
    {"Batch No.": 100040, "LSL": 90, "Observed Value": 46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100041, "LSL": 90, "Observed Value": -46, "USL": 110, "Average": 100.01},
    {"Batch No.": 100042, "LSL": 90, "Observed Value": -71, "USL": 110, "Average": 100.01},
    {"Batch No.": 100043, "LSL": 90, "Observed Value": 11, "USL": 110, "Average": 100.01},
    {"Batch No.": 100044, "LSL": 90, "Observed Value": 20, "USL": 110, "Average": 100.01},
    {"Batch No.": 100045, "LSL": 90, "Observed Value": 24, "USL": 110, "Average": 100.01},
    {"Batch No.": 100046, "LSL": 90, "Observed Value": 30, "USL": 110, "Average": 100.01},
    {"Batch No.": 100047, "LSL": 90, "Observed Value": 1, "USL": 110, "Average": 100.01}
  ]

    useEffect(() => {
      let data = [];
      let categories = [];
  
      if (selectedOption === "hourly") {
          // Assume Batch No. can be used as a unique identifier for each record
          data = records.map((record) => record["Observed Value"]);
          categories = records.map((record) => `Batch ${record["Batch No."]}`);
      } else if (selectedOption === "day") {
          const dayData = {};
          records.forEach((record) => {
              const day = new Date(record["Batch No."]).toLocaleDateString(); // Assumes Batch No. can be used to infer date
              if (!dayData[day]) {
                  dayData[day] = [];
              }
              dayData[day].push(record["Observed Value"]);
          });
          data = Object.keys(dayData).map(
              (day) => dayData[day].reduce((a, b) => a + b, 0) / dayData[day].length
          );
          categories = Object.keys(dayData);
      } else if (selectedOption === "month") {
          const monthData = {};
          records.forEach((record) => {
              const month = new Date(record["Batch No."]).toLocaleString("default", { month: "short" }); // Assumes Batch No. can be used to infer date
              if (!monthData[month]) {
                  monthData[month] = [];
              }
              monthData[month].push(record["Observed Value"]);
          });
          data = Object.keys(monthData).map(
              (month) => monthData[month].reduce((a, b) => a + b, 0) / monthData[month].length
          );
          categories = Object.keys(monthData);
      }
  
      setChartData(data);
      setChartCategories(categories);
  }, [selectedOption]);

  const gridLineLabels = [
    { value: 100, label: "USL ▴" },
    { value: 50, label: "UCL ▴" },
    { value: -50, label: "LCL ▾" },
    { value: -100, label: "LSL ▾" },
    { value: 0, label: "0" } // Added for demonstration
  ];

  const additionalLabels = [
    { x: 100/2, y: 100, label: "OOT" },
    { x: 100/2, y: 50, label: "OOS" },
    { x: 100/2, y: -50, label: "OOS" },
    { x: 100/2, y: -100, label: "OOT" },
    // Add more labels as needed
  ];

  const customTicks = (value, index, values) => {
    const labelObj = gridLineLabels.find((obj) => obj.value === value);
    if (labelObj) {
      return labelObj.label;
    }
    return value;
  };

  return (
    <div>
      <Header />
      <BottomHeader />
      <div
        className="graph-2"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="chart-analytics" style={{ width: "100%" }}>
          <Chart
            data={{
              labels: chartCategories,
              datasets: [
                {
                  type: chartType,
                  pointRadius: 8,
                  tension: 0.5,
                  label:
                    location.state?.processId === 1
                      ? "------------  Differential Pressure  ------------"
                      : location.state?.processId === 4
                      ? "------------  Temperature Records  ------------"
                      : "",
                  data: chartData,
                  backgroundColor: chartData.map((data) => {
                    if (data > 100) {
                      return "rgba(200, 0, 0, 1)"; // Red
                    } else if (data > 50) {
                      return "rgba(255, 165, 0, 1)"; // Orange
                    } else if (data > -50) {
                      return "rgba(0, 150, 0, 1)"; // green
                    } else if (data > -100) {
                      return "rgba(255, 165, 0, 1)"; // orange
                    } else {
                      return "rgba(200, 0, 0, 1)"; // red
                    }
                  }),
                },
              ],
            }}
            height={600}
            width={1500}
            options={{
              maintainAspectRatio: false,
              indexAxis: "x",
              barThickness: 5,
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 22,
                      weight: "bold",
                    },
                  },
                },
                annotation: {
                  annotations: {
                    ...gridLineLabels.reduce((acc, { value, label }) => {
                      acc[`yLabel_${value}`] = {
                        type: 'label',
                        xValue: chartCategories[Math.floor(chartCategories.length / 2)],
                        yValue: value,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        content: label,
                        display: true,
                        position: 'center',
                        padding: {
                          top: 10,
                          bottom: 10,
                          left: 10,
                          right: 10
                        },
                        font: {
                          size: 16,
                          weight: 'bold'
                        },
                        color: 'white',
                        xAdjust: -10, // Adjust as needed to center on the x-axis
                        yAdjust: -10, // Adjust as needed
                      };
                      return acc;
                    }, {}),
                    ...additionalLabels.reduce((acc, { x, y, label }) => {
                      acc[`customLabel_${x}_${y}`] = {
                        type: 'label',
                        xValue: x,
                        yValue: y,
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        content: label,
                        display: true,
                        position: 'center',
                        padding: {
                          top: 10,
                          bottom: 10,
                          left: 10,
                          right: 10
                        },
                        font: {
                          size: 16,
                          weight: 'bold'
                        },
                        color: 'black',
                        xAdjust: -10, // Adjust as needed
                        yAdjust: -10, // Adjust as needed
                      };
                      return acc;
                    }, {}),
                  },
                },
              },
              scales: {
                x: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    // text: 'Your Centered Title Here',
                    font: {
                      size: 22,
                      weight: 'bold',
                    },
                    color: 'black',
                    padding: {
                      top: 20, // Adjust padding if necessary
                    },
                    align: 'center', // Center the title horizontally
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "blue",
                    font: {
                      size: 12,
                      weight: "bold",
                    },
                    stepSize: 25,
                    callback: customTicks,
                  },
                  grid: {
                    color: (context) => {
                      let i = context.tick.value;
                      if (i === -100 || i === 100) {
                        return "red";
                      } else if (i === -50 || i === 50) {
                        return "orange";
                      } else if (i === 0) {
                        return "black";
                      } else {
                        return "rgba(0, 0, 0, 0.04)";
                      }
                    },
                  },
                  title: {
                    display: true,
                    text:
                      location.state?.processId === 1
                        ? "------------  Differential Pressure  ------------"
                        : location.state?.processId === 4
                        ? "------------  Temperature Records  ------------"
                        : "",
                    font: {
                      size: 22,
                      weight: "bold",
                    },
                  },
                  max: 130,
                  min:-130
                },
              },
            }}
          />
        </div>
        {/* <div className="chart-data" style={{ width: "200px" }}>
          <div className="group-input">
            <label className="color-label">Chart Type</label>
            <div className="instruction">&nbsp;</div>
            <select
              className="form-control"
              name="assign_to"
              onChange={handleChartTypeChange}
              value={chartType}
            >
              <option value="select" disabled>
                Select type
              </option>
              <option value="bar">Bar</option>
              <option value="line">Line</option>
              <option value="pie">Pie</option>
              <option value="doughnut">Doughnut</option>
              <option value="polarArea">Polar Area</option>
            </select>
          </div>
        </div> */}
      </div>
    </div>
  );
}
