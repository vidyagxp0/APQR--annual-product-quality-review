import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Pareto from "highcharts/modules/pareto";

// Initialize the Pareto module
Pareto(Highcharts);

const HighchartsPareto = ({ data, heading, xAxisTitle, yAxisTitle, lsl, usl }) => {
  //   const phOfParacetamol = {
  //     data: [
  //       1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8,
  //       2.75, 3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85,
  //       3.45, 4.1, 2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 2.85,
  //       2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
  //       2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
  //       2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85, 2.85,
  //     ],
  //     lsl: 2,
  //     usl: 4,
  //     heading: "Observation value for pH value of Paracetamol",
  //     yAxisTitle: "Number of Batches",
  //   };

  const processData = (data) => {
    const bins = { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 };

    data.forEach((value) => {
      if (value >= 1 && value < 2) {
        bins["1-2"]++;
      } else if (value >= 2 && value < 3) {
        bins["2-3"]++;
      } else if (value >= 3 && value < 4) {
        bins["3-4"]++;
      } else if (value >= 4 && value < 5) {
        bins["4-5"]++;
      }
    });

    const histogramData = Object.keys(bins).map((bin) => bins[bin]);

    // Calculate cumulative data for the Pareto line
    let cumulativeData = [];
    let cumulativeSum = 0;
    const total = histogramData.reduce((a, b) => a + b, 0);
    for (let i = 0; i < histogramData.length; i++) {
      cumulativeSum += histogramData[i];
      cumulativeData.push((cumulativeSum / total) * 100);
    }

    return { histogramData, cumulativeData };
  };
  const { histogramData, cumulativeData } = processData(data);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: heading,
      style: {
        fontSize: "14px",
        fontWeight: "bold",
      },
    },
    xAxis: {
      title: { text: "pH Range" },
      categories: ["1-2", "2-3", "3-4", "4-5"],
    },
    yAxis: [
      {
        title: { text: yAxisTitle , style: {
          fontSize: "14px",
          fontWeight: "bold",
        },},
        allowDecimals: false,
      },
      {
        title: { text: "Cumulative Percentage" },
        max: 100,
        opposite: true,
      },
    ],
    series: [
      {
        name: "Number of Batches",
        type: "column",
        data: histogramData,
        tooltip: {
          valueSuffix: " batches",
        },
      },
      {
        name: "Cumulative",
        type: "pareto",
        yAxis: 1,
        data: cumulativeData,
        tooltip: {
          valueSuffix: "%",
        },
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighchartsPareto;
