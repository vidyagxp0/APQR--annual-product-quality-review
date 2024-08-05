import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const phOfParacetamol = {
  data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 5) + 2),
  data: [
    2.9, 1.75, 3.45, 2.85, 4.05, 3.2, 2.1, 4.1, 1.9, 2.8, 3.3, 4.0, 2.25, 3.5, 2.3, 4.1, 1.65, 3.35,
    2.95, 3.4, 2.0, 4.05, 1.8, 2.7, 4.0, 3.45, 2.85, 1.85, 4.1, 2.9, 3.5, 1.7, 3.25, 4.1, 2.2, 3.3,
    2.95, 1.75, 3.5, 4.1, 1.9, 2.8, 4.05, 2.15, 3.4, 1.75, 4.0, 2.8, 3.45, 4.05, 2.0,
  ],
  lsl: 2,
  usl: 4,
  heading: "Observation value for pH value of Paracetamol",
  yAxisTitle: "pH",
  batchNumbers: [
    "Batch 1",
    "Batch 2",
    "Batch 3",
    "Batch 4",
    "Batch 5",
    "Batch 6",
    "Batch 7",
    "Batch 8",
    "Batch 9",
    "Batch 10",
    "Batch 11",
    "Batch 12",
    "Batch 13",
    "Batch 14",
    "Batch 15",
    "Batch 16",
    "Batch 17",
    "Batch 18",
    "Batch 19",
    "Batch 20",
    "Batch 21",
    "Batch 22",
    "Batch 23",
    "Batch 24",
    "Batch 25",
    "Batch 26",
    "Batch 27",
    "Batch 28",
    "Batch 29",
    "Batch 30",
    "Batch 31",
    "Batch 32",
    "Batch 33",
    "Batch 34",
    "Batch 35",
    "Batch 36",
    "Batch 37",
    "Batch 38",
    "Batch 39",
    "Batch 40",
    "Batch 41",
    "Batch 42",
    "Batch 43",
    "Batch 44",
    "Batch 45",
    "Batch 46",
    "Batch 47",
    "Batch 48",
    "Batch 49",
    "Batch 50",
  ],
};

const HighchartsScatterPlot = () => {
  const scatterData = phOfParacetamol.data.map((value, index) => ({
    x: index + 1,
    y: value,
    color: value < phOfParacetamol.lsl || value > phOfParacetamol.usl ? "#ab402b" : "#63db9b",
  }));

  const options = {
    chart: {
      type: "scatter",
      zoomType: "xy",
    },
    title: {
      text: phOfParacetamol.heading,
    },
    xAxis: {
      title: { text: "Batch Number" },
      categories: phOfParacetamol.batchNumbers,
      tickInterval: 1,
    },
    yAxis: {
      title: { text: phOfParacetamol.yAxisTitle },
      allowDecimals: false,
      max: 5,
    },
    series: [
      {
        name: "pH Value",
        data: scatterData,
        marker: {
          radius: 5,
          symbol: "diamond",
        },
        tooltip: {
          headerFormat: "<b>{point.key}</b><br>",
          pointFormat: "pH: {point.y}",
        },
      },
    ],
    plotOptions: {
      scatter: {
        marker: {
          symbol: "circle",
        },
        dataLabels: {
          enabled: true,
          format: "{point.y}",
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsScatterPlot;
