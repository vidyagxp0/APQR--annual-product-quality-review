import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";
// import { records } from "./ChartJsFunction";

// Initialize Highcharts modules
HC_more(Highcharts);
HC_exporting(Highcharts);
HC_exportData(Highcharts);

const HighchartsChart = ({
  heading,
  xHeading,
  yHeading,
  yMin,
  yMax,
  yTickInterval,
  plotLines,
  annotations,
  zones,
  highchartData,
}) => {


  const [selectedOption, setSelectedOption] = useState("hourly");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
console.log(highchartData,"chart")
  const processData = () => {
    return highchartData?.map((record) => ({
      x: parseInt(record["Batch No."].split("_")[1]),
      // x: parseInt(record["Batch No."]),
      y: parseInt(record["Observed Value"]),
    }));
  };

  const data = processData() || [];
  const options = {
    chart: {
      type: "line",
      zoomType: "x",
      height: 355,
      // width: 2000,
      panning: true, // Enable panning
      panKey: "ctrl", // Set the key for panning (optional)
    },
    title: {
      text: heading,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      title: {
        text: xHeading,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      // categories: highchartData?.map((record) => `BatchNo ${record["Batch No."]}`),
      categories: highchartData?.map((record) => ` ${record["Batch No."]}`),
      tickInterval: 1,
      step: 1, // Show every data point
      labels: {
        formatter: function () {
          return this.value; // Customize label format if needed
        },
      },
    },
    yAxis: {
      title: {
        text: yHeading,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      min: yMin,
      max: yMax,
      tickInterval: yTickInterval,
      plotLines: plotLines,
      labels: {
        step: 1,
        style: {
          color: "black",
          fontWeight: "bold",
        },
      },
      tickAmount: "auto",
      gridLineColor: "rgba(0, 0, 0, 0.05)",
    },
    series: [
      {
        name: yHeading,
        data: data,
        lineWidth: 2,
        zones: zones,
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
        return `<b> ${this.x}</b><br/>${yHeading}: ${this.y}`;
      },
    },

    annotations: annotations?.map((e, index) => {
      return {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: data[Math.floor(data.length / 2)],
          y: e.y,
        },
        text: e.text,
      };
    }),
    // ,
    // {
    //   point: {
    //     xAxis: 0,
    //     yAxis: 0,
    //     x: data[Math.floor(data.length / 2)].x,
    //     y: 25,
    //   },
    //   text: "OOS",
    // },
    // {
    //   point: {
    //     xAxis: 0,
    //     yAxis: 0,
    //     x: data[Math.floor(data.length / 2)].x,
    //     y: -25,
    //   },
    //   text: "OOS",
    // },
    // {
    //   point: {
    //     xAxis: 0,
    //     yAxis: 0,
    //     x: data[Math.floor(data.length / 2)].x,
    //     y: -75,
    //   },
    //   text: "OOT",
    // },
  };

  return (
    <div
      className=" bg-white shadow-lg p-4 overflow-auto divWithScrollbar"
    >
      <div className="graph-2 " style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="chart-analytics chart-container ">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default HighchartsChart;
