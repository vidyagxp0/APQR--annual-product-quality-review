import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";

// Initialize Highcharts modules
HC_more(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

const HighchartsChart = () => {
  useEffect(() => {
    document.title = "Highcharts";
  }, []);

  const [selectedOption, setSelectedOption] = useState("hourly");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const records = [
    { "Batch No.": 100001, LSL: 90, "Observed Value": 25, USL: 110, Average: 100.01 },
    { "Batch No.": 100003, LSL: 90, "Observed Value": 50, USL: 110, Average: 100.01 },
    { "Batch No.": 100005, LSL: 90, "Observed Value": -50, USL: 110, Average: 100.01 },
    { "Batch No.": 100007, LSL: 90, "Observed Value": -75, USL: 110, Average: 100.01 },
    { "Batch No.": 100009, LSL: 90, "Observed Value": 100, USL: 110, Average: 100.01 },
    { "Batch No.": 100011, LSL: 90, "Observed Value": 75, USL: 110, Average: 100.01 },
    { "Batch No.": 100011, LSL: 90, "Observed Value": 125, USL: 110, Average: 100.01 },
    { "Batch No.": 100012, LSL: 90, "Observed Value": -125, USL: -125, Average: 100.01 },
    { "Batch No.": 100013, LSL: 90, "Observed Value": -150, USL: -125, Average: 100.01 },
    { "Batch No.": 100014, LSL: 90, "Observed Value": 150, USL: -125, Average: 100.01 },
  ];

  const processData = () => {
    return records.map((record) => ({
      x: record["Batch No."],
      y: record["Observed Value"],
    }));
  };

  const data = processData();

  const options = {
    chart: {
      type: "line",
      zoomType: "xy",
      height: 600,
      panning: true, // Enable panning
      panKey: "ctrl", // Set the key for panning (optional)
    },
    title: {
      text: "APQR Graph",
      style: {
        fontSize: "22px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      title: {
        text: "Batch No.",
        style: {
          fontSize: "22px",
          fontWeight: "bold",
        },
      },
    },
    yAxis: {
      title: {
        text: "Observed Value",
        style: {
          fontSize: "22px",
          fontWeight: "bold",
        },
      },
      min: -170,
      max: 170,
      tickInterval: 25,
      plotLines: [
        {
          value: 130,
          color: "red",
          width: 2,
          dashStyle: "Dash",
          label: { text: "USL", style: { color: "black", fontWeight: "bold" } },
        },
        {
          value: 80,
          color: "orange",
          width: 2,
          dashStyle: "Dash",
          label: { text: "UCL", style: { color: "black", fontWeight: "bold" } },
        },
        {
          value: -80,
          color: "orange",
          width: 2,
          dashStyle: "Dash",
          label: { text: "LCL", style: { color: "black", fontWeight: "bold" } },
        },
        {
          value: -130,
          color: "red",
          width: 2,
          dashStyle: "Dash",
          label: { text: "LSL ", style: { color: "black", fontWeight: "bold" } },
        },
        {
          value: 0,
          color: "black",
          width: 1,
          label: { text: "0", style: { color: "black", fontWeight: "bold" } },
        },
      ],
      labels: {
        style: {
          color: "black",
          fontWeight: "bold",
        },
      },
      gridLineColor: "rgba(0, 0, 0, 0.05)",
    },
    series: [
      {
        name: "Observed Value",
        data: data,
        lineWidth: 2,
        zones: [
          {
            value: -130,
            color: "rgba(200, 0, 0, 1)",
          },
          {
            value: -75,
            color: "rgba(255, 165, 0, 1)",
          },
          {
            value: 75,
            color: "rgba(0, 150, 0, 1)",
          },
          {
            value: 130,
            color: "rgba(255, 165, 0, 1)",
          },
          {
            color: "rgba(200, 0, 0, 1)",
          },
        ],
      },
    ],
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
    tooltip: {
      formatter: function () {
        return `<b>Batch ${this.x}</b><br/>Observed Value: ${this.y}`;
      },
    },
    annotations: [
      { point: { xAxis: 0, yAxis: 0, x: data[Math.floor(data.length / 2)].x, y: 75 }, text: "OOT" },
      { point: { xAxis: 0, yAxis: 0, x: data[Math.floor(data.length / 2)].x, y: 25 }, text: "OOS" },
      {
        point: { xAxis: 0, yAxis: 0, x: data[Math.floor(data.length / 2)].x, y: -25 },
        text: "OOS",
      },
      {
        point: { xAxis: 0, yAxis: 0, x: data[Math.floor(data.length / 2)].x, y: -75 },
        text: "OOT",
      },
    ],
  };

  return (
    <div className="graph-2" style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="chart-analytics chart-container" style={{ width: "100%" }}>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default HighchartsChart;
