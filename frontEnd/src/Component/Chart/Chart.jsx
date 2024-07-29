import { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "./Chart.css";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import BottomHeader from "../BottomHeader";

export default function Analytics5() {
  const [selectedOption, setSelectedOption] = useState("hourly");
  const [chartData, setChartData] = useState([]);
  const [chartCategories, setChartCategories] = useState([]);
  const [chartType, setChartType] = useState("bar");
  const location = useLocation();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  useEffect(() => {
    // Generate fake data
    const generateFakeData = () => {
      const records = [];
      const now = new Date();
      for (let i = 0; i < 30; i++) {
        records.push({
          time: new Date(now.getTime() - i * 60 * 60 * 1000).toISOString(),
          differential_pressure: Math.random() * 4,
          temprature_record: Math.random() * 40
        });
      }
      return records;
    };

    const records = generateFakeData();
    let data = [];
    let categories = [];

    if (selectedOption === "hourly") {
      data = records.map((record) => record.differential_pressure);
      categories = records.map((record) => new Date(record.time).toLocaleTimeString());
    } else if (selectedOption === "day") {
      const dayData = {};
      records.forEach((record) => {
        const day = new Date(record.time).toLocaleDateString();
        if (!dayData[day]) {
          dayData[day] = [];
        }
        dayData[day].push(record.differential_pressure);
      });
      data = Object.keys(dayData).map(
        (day) => dayData[day].reduce((a, b) => a + b, 0) / dayData[day].length
      );
      categories = Object.keys(dayData);
    } else if (selectedOption === "month") {
      const monthData = {};
      records.forEach((record) => {
        const month = new Date(record.time).toLocaleString("default", {
          month: "short",
        });
        if (!monthData[month]) {
          monthData[month] = [];
        }
        monthData[month].push(record.differential_pressure);
      });
      data = Object.keys(monthData).map(
        (month) =>
          monthData[month].reduce((a, b) => a + b, 0) / monthData[month].length
      );
      categories = Object.keys(monthData);
    }

    setChartData(data);
    setChartCategories(categories);
  }, [selectedOption]);

  const gridLineLabels = [
    { value: 2.6, label: "Danger Zone[2.6] ▴" },
    { value: 0.6, label: "Danger Zone[0.6] ▾" },
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
                  backgroundColor: chartData.map((data) =>
                    (data > 0.6) & (data < 2.6)
                      ? "rgba(0, 200, 0, 1)"
                      : "rgba(200, 0, 0, 1)"
                  ),
                },
              ],
            }}
            height={600}
            width={1500}
            options={{
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
              },
              scales: {
                x: {
                  beginAtZero: true,
                  ticks: {
                    color: "orange",
                    font: {
                      size: 12,
                      weight: "bold",
                    },
                  },
                  grid: {
                    color: "#ffffff",
                  },
                  title: {
                    display: true,
                    text: `---------------  ${
                      selectedOption[0].toUpperCase() + selectedOption.slice(1)
                    } Basis  ---------------`,
                    font: {
                      size: 22,
                      weight: "bold",
                    },
                  },
                },
                y: {
                  beginAtZero: true,
                  ticks: {
                    color: "orange",
                    font: {
                      size: 12,
                      weight: "bold",
                    },
                    stepSize: 0.2,
                    callback: customTicks,
                  },
                  grid: {
                    color: (context) => {
                      let i = context.tick.value;
                      if (i === 0.6 || i === 2.6) {
                        return "red";
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
                  max: 4,
                },
              },
            }}
          />
        </div>
        <div className="chart-data" style={{ width: "200px" }}>
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
        </div>
      </div>
    </div>
  );
}
