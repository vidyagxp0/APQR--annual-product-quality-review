import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";
import { records } from "./ChartJsFunction";

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
      width:2000,
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
      categories: records.map(record => `BatchNo ${record["Batch No."]}`),
      tickInterval: 1, 
      step:1, // Show every data point
      labels: {
        formatter: function() {
          return this.value;  // Customize label format if needed
        }
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
          value: 120,
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
          value: -120,
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
        step: 1,
        style: {
          color: "black",
          fontWeight: "bold",
        },
      },
      tickAmount: 'auto' ,
      gridLineColor: "rgba(0, 0, 0, 0.05)",
    },
    series: [
      {
        name: "Observed Value",
        data: data,
        lineWidth: 2,
        zones: [
          {
            value: -120,
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
            value: 120,
            color: "rgba(255, 165, 0, 1)",
          },
          {
            color: "rgba(200, 0, 0, 1)",
          },
        ],
      },
    ],
    plotOptions: {
      // pointStart:0,

      series: {
        marker: {
          enabled: true,
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
    <div className="w-full bg-white shadow-lg p-4 overflow-auto">
    <div className="graph-2 " style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="chart-analytics chart-container " >
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
    </div>
  );
};

export default HighchartsChart;
