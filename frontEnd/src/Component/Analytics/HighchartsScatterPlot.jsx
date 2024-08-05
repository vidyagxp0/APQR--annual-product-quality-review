import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsScatterPlot = ({ phOfParacetamol }) => {

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
