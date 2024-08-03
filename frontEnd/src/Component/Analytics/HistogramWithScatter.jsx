import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Helper function to calculate histogram data
const calculateHistogram = (data, binCount) => {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const binWidth = (max - min) / binCount;

  const histogramData = [];
  for (let i = 0; i < binCount; i++) {
    histogramData.push({
      name: `${(min + i * binWidth).toFixed(2)} - ${(min + (i + 1) * binWidth).toFixed(2)}`,
      y: data.filter((value) => value >= min + i * binWidth && value < min + (i + 1) * binWidth)
        .length,
    });
  }

  return histogramData;
};

const HistogramWithScatter = ({ data, lsl, usl, heading, yAxisTitle }) => {
  // Calculate histogram data
  const histogramData = calculateHistogram(data, 10); // Adjust bin count as needed

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: heading,
    },
    xAxis: {
      categories: histogramData.map((data) => data.name),
      title: {
        text: "pH Range",
      },
    },
    yAxis: {
      title: {
        text: yAxisTitle,
      },
    },
    series: [
      {
        name: "Histogram",
        type: "column",
        data: histogramData,
        color: "#7cb5ec",
      },
      {
        name: "Scattered Data",
        type: "scatter",
        data: data.map((value) => [value, 0]), // y = 0 to plot points on x-axis
        marker: {
          radius: 5,
          fillColor: "#f15c80",
        },
      },
    ],
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
      scatter: {
        marker: {
          radius: 5,
          states: {
            hover: {
              enabled: true,
              radius: 7,
            },
          },
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HistogramWithScatter;
