import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Histogram from "highcharts/modules/histogram-bellcurve";
import Exporting from "highcharts/modules/exporting";

Histogram(Highcharts);
Exporting(Highcharts);

const App = () => {
  const data = [2.9, 3.5, 3.25, 2.8, 2.45, 3.0, 3.75]; // Replace with your actual data

  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const stdev = Math.sqrt(
    data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / data.length
  );

  const bins = [...Array(11).keys()].map((x) => 2 + x * 0.2); // Adjusted for your data range
  const histogramData = bins.map((bin, index) => ({
    x: bin,
    y: data.filter((value) => value >= bin && value < (bins[index + 1] || bin + 0.2)).length,
  }));

  const normalDistData = [];
  for (let i = 0; i <= 100; i++) {
    const x = 1.65 + (i * (4.45 - 1.65)) / 100;
    const y =
      (1 / (stdev * Math.sqrt(2 * Math.PI))) *
      Math.exp(-0.5 * Math.pow((x - mean) / stdev, 2)) *
      data.length *
      0.3; // Adjust for bin width
    normalDistData.push([x, y]);
  }

  const options = {
    title: {
      text: "pH Observed Value",
    },
    xAxis: {
      title: { text: "Values" },
      plotLines: [
        {
          color: "red",
          dashStyle: "solid",
          value: 2,
          width: 2,
          label: {
            text: "LSL",
            style: {
              color: "red",
            },
          },
        },
        {
          color: "red",
          dashStyle: "solid",
          value: 4,
          width: 2,
          label: {
            text: "USL",
            style: {
              color: "red",
            },
          },
        },
      ],
    },
    yAxis: {
      title: { text: "Number" },
    },
    series: [
      {
        name: "Histogram",
        type: "column",
        data: histogramData,
        pointPadding: 0,
        groupPadding: 0,
        pointPlacement: "between",
      },
      {
        name: "Normal Distribution",
        type: "spline",
        color: "blue",
        marker: { enabled: false },
        data: normalDistData,
        zIndex: -1,
      },
    ],
    exporting: {
      enabled: true,
    },
    annotations: [
      {
        labels: [
          {
            point: {
              xAxis: 0,
              yAxis: 0,
              x: mean,
              y: Math.max(...histogramData.map((d) => d.y)),
            },
            text: `Mean: ${mean.toFixed(2)}<br>Median: 3.00<br>Mode: 3.00<br>n: 7`,
          },
        ],
        labelOptions: {
          backgroundColor: "rgba(255,255,255,0.5)",
          borderColor: "black",
          style: {
            fontSize: "10px",
          },
        },
      },
    ],
  };

  return (
    <div className="w-5/12">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default App;
