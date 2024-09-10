import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Histogram from "highcharts/modules/histogram-bellcurve";

Histogram(Highcharts);

const HighchartsHistogram2 = ({ data, heading, xAxisTitle, yAxisTitle, bins, plotLines }) => {
  const processData = (data, bins) => {
    const binKeys = Object.keys(bins);
    const binCounts = binKeys.reduce((acc, key) => ({ ...acc, [key]: 0 }), {});
    const binValues = binKeys.reduce((acc, key) => ({ ...acc, [key]: [] }), {});

    data.forEach((value) => {
      for (let i = 0; i < binKeys.length; i++) {
        const [min, max] = binKeys[i].split("-").map(Number);
        if (value >= min && value < max) {
          binCounts[binKeys[i]]++;
          binValues[binKeys[i]].push(value);
          break;
        }
      }
    });

    const histogramData = binKeys.map((bin) => binCounts[bin]);
    const averageData = binKeys.map((bin) => {
      const sum = binValues[bin].reduce((a, b) => a + b, 0);
      return binValues[bin].length ? sum / binValues[bin].length : null;
    });

    return { histogramData, averageData };
  };

  const { histogramData, averageData } = processData(data, bins);

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
      alignTicks: false,
      categories: Object.keys(bins),
      plotLines: plotLines.map((line) => ({
        color: "red",
        width: 2,
        value: Object.keys(bins).indexOf(line.position),
        label: {
          text: line.label,
          align: line.align,
          style: {
            color: "red",
          },
        },
        zIndex: 5,
      })),
    },
    yAxis: {
      title: {
        text: yAxisTitle,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      allowDecimals: false,
      max: data.length / (Object.keys(bins).length * 0.6), // Adjust the y-axis maximum value
    },
    series: [
      {
        name: "Number of Batches",
        data: histogramData,
        groupPadding: 0,
        pointPadding: 0,
        color: "#c19df5",
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

export default HighchartsHistogram2;
