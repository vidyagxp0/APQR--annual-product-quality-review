import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Histogram from "highcharts/modules/histogram-bellcurve";

Histogram(Highcharts);

const HighchartsHistogram = ({ phOfParacetamol }) => {

  const processData = (data) => {
    const bins = { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 };
    const averagePh = { "1-2": [], "2-3": [], "3-4": [], "4-5": [] };

    data.forEach((value) => {
      if (value >= 1 && value < 2) {
        bins["1-2"]++;
        averagePh["1-2"].push(value);
      } else if (value >= 2 && value < 3) {
        bins["2-3"]++;
        averagePh["2-3"].push(value);
      } else if (value >= 3 && value < 4) {
        bins["3-4"]++;
        averagePh["3-4"].push(value);
      } else if (value >= 4 && value < 5) {
        bins["4-5"]++;
        averagePh["4-5"].push(value);
      }
    });

    const histogramData = Object.keys(bins).map((bin) => bins[bin]);
    const averagePhData = Object.keys(averagePh).map((bin) => {
      const sum = averagePh[bin].reduce((a, b) => a + b, 0);
      return averagePh[bin].length ? sum / averagePh[bin].length : null;
    });

    return { histogramData, averagePhData };
  };
  const { histogramData, averagePhData } = processData(phOfParacetamol.data);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: phOfParacetamol.heading,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      title: { text: phOfParacetamol.xAxisTitle, style: {
        fontSize: "14px",
        fontWeight: "bold",
      }, },
      alignTicks: false,
      categories: ["1-2", "2-3", "3-4", "4-5"],
      plotLines: [
        {
          color: "red", // violet
          width: 2,
          value: 0.5, // Index of '2-3' category
          label: {
            text: "LSL",
            align: "right",
            style: {
              color: "red", // violet
            },
          },
          zIndex: 5, // Ensure plot line is above the bars
        },
        {
          color: "red", // violet
          width: 2,
          value: 2.5, // Index of '4-5' category
          label: {
            text: "USL",
            align: "left",
            style: {
              color: "red", // violet
            },
          },
          zIndex: 5, // Ensure plot line is above the bars
        },
      ],
    },
    yAxis: {
      title: { text: phOfParacetamol.yAxisTitle, style: {
        fontSize: "14px",
        fontWeight: "bold",
      }, },
      allowDecimals: false,
      max: phOfParacetamol.data.length / 2.4, // Set yAxis maximum value to 30
    },
    series: [
      {
        name: "Number of Batches",
        data: histogramData,
        groupPadding: 0,
        pointPadding: 0,
        color: "#c19df5", // violet
      },
      {
        name: "Distribution Curve",
        type: "spline",
        data: histogramData,
        zIndex: 6,
        color: "blue",
        marker: {
          enabled: false,
        },
        tooltip: {
          pointFormat: "Distribution: {point.y:.2f}",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsHistogram;
