import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Pareto from "highcharts/modules/pareto";

// Initialize the Pareto module
Pareto(Highcharts);

const HighchartsPareto = ({
  data = [],
  heading = "Histogram",
  xAxisTitle = "X-Axis",
  yAxisTitle = "Y-Axis",
  bins = { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 }, // Default bins
  plotLines = [],
}) => {
  const processData = (data, bins) => {
    const binKeys = Object.keys(bins);
    const binCounts = binKeys.reduce((acc, key) => ({ ...acc, [key]: 0 }), {});

    data.forEach((value) => {
      for (let i = 0; i < binKeys.length; i++) {
        const [min, max] = binKeys[i].split("-").map(Number);
        if (value >= min && value < max) {
          binCounts[binKeys[i]]++;
          break;
        }
      }
    });

    const histogramData = binKeys.map((bin) => binCounts[bin]);

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

  const { histogramData, cumulativeData } = processData(data, bins);

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
      title: {
        text: xAxisTitle,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      categories: Object.keys(bins),
    },
    yAxis: [
      {
        title: {
          text: yAxisTitle,
          style: {
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
        allowDecimals: false,
      },
      {
        title: {
          text: "Cumulative Percentage",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
          },
        },
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
