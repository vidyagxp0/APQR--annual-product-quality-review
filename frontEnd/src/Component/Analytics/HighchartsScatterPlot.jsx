// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const HighchartsScatterPlot = ({ data, heading, batchNumbers, yAxisTitle, lsl, usl,max }) => {
//   const scatterData = data.map((value, index) => ({
//     x: index + 1,
//     y: value,
//     color: value < lsl || value > usl ? "#ab402b" : "#63db9b",
//   }));

//   const options = {
//     chart: {
//       type: "scatter",
//       zoomType: "xy",
//     },
//     title: {
//       text: heading,
//       style: {
//         fontSize: "14px",
//         fontWeight: "bold",
//       },
//     },
//     xAxis: {
//       title: {
//         text: "Batch Number",
//         style: {
//           fontSize: "14px",
//           fontWeight: "bold",
//         },
//       },
//       categories: batchNumbers,
//       tickInterval: 1,
//     },
//     yAxis: {
//       title: {
//         text: yAxisTitle,
//         style: {
//           fontSize: "14px",
//           fontWeight: "bold",
//         },
//       },
//       allowDecimals: false,
//       max: max,
//     },
//     series: [
//       {
//         name: "pH Value",
//         data: scatterData,
//         marker: {
//           radius: 5,
//           symbol: "diamond",
//         },
//         tooltip: {
//           headerFormat: "<b>{point.key}</b><br>",
//           pointFormat: "pH: {point.y}",
//         },
//       },
//     ],
//     plotOptions: {
//       scatter: {
//         marker: {
//           symbol: "circle",
//         },
//         dataLabels: {
//           enabled: true,
//           format: "{point.y}",
//         },
//       },
//     },
//   };

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default HighchartsScatterPlot;










import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const HighchartsScatterPlot = ({ data, heading, batchNumbers, yAxisTitle, lsl, usl, max = 5 }) => {
  const scatterData = data.map((value, index) => ({
    x: index + 1,
    y: value,
    color: value < lsl || value > usl ? "#ab402b" : "#63db9b",
  }));

  const options = {
    chart: {
      type: "scatter",
      zoomType: "xy",
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
        text: "Batch Number",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      categories: batchNumbers,
      tickInterval: 1,
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
      max: max,
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


















