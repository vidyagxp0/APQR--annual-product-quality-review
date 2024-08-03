// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const PHValueChart = ({ data, lsl, usl, text, yAxisTitle, batchNumbers }) => {
//   // Calculate points for the curve
//   const curveData = calculateCurveData(data.map((item) => item[1]));

//   const chartOptions = {
//     chart: {
//       type: "column",
//       zoomType: "xy",
//     },
//     title: {
//       text: text,
//     },
//     xAxis: {
//       categories: batchNumbers,
//       title: {
//         text: "Batch No.",
//       },
//     },
//     yAxis: [
//       {
//         title: {
//           text: yAxisTitle,
//         },
//         plotLines: [
//           {
//             color: "red",
//             dashStyle: "dash",
//             value: lsl,
//             width: 2,
//             label: {
//               text: `LSL: ${lsl}`,
//               align: "right",
//               style: { color: "red" },
//             },
//           },
//           {
//             color: "red",
//             dashStyle: "dash",
//             value: usl,
//             width: 2,
//             label: {
//               text: `USL: ${usl}`,
//               align: "right",
//               style: { color: "red" },
//             },
//           },
//         ],
//       },
//       {
//         title: { text: "Distribution" },
//         opposite: true,
//         max: Math.max(...curveData.map((point) => point[1])) * 1.1,
//       },
//     ],
//     series: [
//       {
//         name: yAxisTitle,
//         data: data.map((item) => item[1]),
//         color: "#7cb5ec",
//       },
//       {
//         name: "Distribution Curve",
//         type: "spline",
//         data: curveData,
//         yAxis: 1,
//         color: "rgba(0, 0, 255, 0.5)",
//         marker: { enabled: false },
//         enableMouseTracking: false,
//       },
//     ],
//     plotOptions: {
//       column: {
//         dataLabels: {
//           enabled: true,
//           format: "{y:.2f}",
//         },
//       },
//     },
//     tooltip: {
//       formatter: function () {
//         if (this.series.name === yAxisTitle) {
//           return `<b>Batch No:</b> ${this.x}<br><b>${yAxisTitle}:</b> ${this.y.toFixed(2)}`;
//         }
//         return false;
//       },
//     },
//   };

//   return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
// };

// // Function to calculate points for the curve
// function calculateCurveData(values) {
//   const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
//   const variance =
//     values.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / values.length;
//   const stdDev = Math.sqrt(variance);

//   const minX = Math.min(...values) - stdDev;
//   const maxX = Math.max(...values) + stdDev;
//   const step = (maxX - minX) / 100;

//   const curveData = [];
//   for (let x = minX; x <= maxX; x += step) {
//     const y =
//       (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(-Math.pow(x - mean, 2) / (2 * variance));
//     curveData.push([x, y]);
//   }

//   return curveData;
// }

// export default PHValueChart;

// /prev
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Histogram from "highcharts/modules/histogram-bellcurve";
Histogram(Highcharts);

const HistogramChart = ({ data, lsl, usl, text, yAxisTitle }) => {
  const chartOptions = {
    title: {
      text: text,
    },
    xAxis: [
      {
        title: { text: "pH Values" },
        opposite: false,
      },
    ],
    yAxis: [
      {
        title: { text: yAxisTitle },
        opposite: false,
        plotLines: [
          {
            color: "red",
            width: 2,
            value: lsl,
            label: {
              text: `LSL: ${lsl}`,
              align: "center",
              style: { color: "red" },
            },
          },
          {
            color: "red",
            width: 2,
            value: usl,
            label: {
              text: `USL: ${usl}`,
              align: "center",
              style: { color: "red" },
            },
          },
        ],
      },
    ],
    series: [
      {
        name: "Histogram",
        type: "histogram",
        baseSeries: "s1",
        zIndex: -1,
        borderWidth: 1,
        borderColor: "black",
      },
      {
        name: "Bell curve",
        type: "bellcurve",
        xAxis: 0,
        yAxis: 0,
        baseSeries: "s1",
        zIndex: -1,
      },
      {
        name: "Data",
        type: "scatter",
        data: data,
        id: "s1",
        marker: {
          radius: 2,
        },
        visible: false,
      },
    ],
    plotOptions: {
      histogram: {
        binsNumber: 10,
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default HistogramChart;
