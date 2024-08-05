// First one (near perfect)

// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Histogram from "highcharts/modules/histogram-bellcurve";

// // Initialize the histogram module
// Histogram(Highcharts);

// const phOfParacetamol = {
//   data: [
//     1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8, 2.75,
//     3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1,
//     2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85,
//   ],
//   lsl: 2,
//   usl: 4,
//   heading: "Observation value for pH value of Paracetamol",
//   yAxisTitle: "pH",
//   batchNumbers: [
//     "Batch 1",
//     "Batch 2",
//     "Batch 3",
//     "Batch 4",
//     "Batch 5",
//     "Batch 6",
//     "Batch 7",
//     "Batch 8",
//     "Batch 9",
//     "Batch 10",
//     "Batch 11",
//     "Batch 12",
//     "Batch 13",
//     "Batch 14",
//     "Batch 15",
//     "Batch 16",
//     "Batch 17",
//     "Batch 18",
//     "Batch 19",
//     "Batch 20",
//     "Batch 21",
//     "Batch 22",
//     "Batch 23",
//     "Batch 24",
//     "Batch 25",
//     "Batch 26",
//     "Batch 27",
//     "Batch 28",
//     "Batch 29",
//     "Batch 30",
//     "Batch 31",
//     "Batch 32",
//     "Batch 33",
//     "Batch 34",
//     "Batch 35",
//     "Batch 36",
//     "Batch 37",
//     "Batch 38",
//     "Batch 39",
//     "Batch 40",
//     "Batch 41",
//     "Batch 42",
//     "Batch 43",
//     "Batch 44",
//     "Batch 45",
//     "Batch 46",
//     "Batch 47",
//     "Batch 48",
//     "Batch 49",
//     "Batch 50",
//   ],
// };

// const options = {
//   chart: {
//     zoomType: "xy",
//   },
//   title: {
//     text: phOfParacetamol.heading,
//   },
//   xAxis: [
//     {
//       title: { text: "Batch" },
//       alignTicks: false,
//     },
//     {
//       title: { text: "pH" },
//       alignTicks: false,
//       opposite: true,
//     },
//   ],
//   yAxis: [
//     {
//       title: { text: phOfParacetamol.yAxisTitle },
//     },
//     {
//       title: { text: "Histogram" },
//       opposite: true,
//     },
//   ],
//   series: [
//     {
//       name: "Histogram",
//       type: "histogram",
//       xAxis: 1,
//       yAxis: 1,
//       baseSeries: "s1",
//       zIndex: -1,
//       color: "rgba(63,169,245,0.75)",
//       pointPadding: 0,
//       groupPadding: 0,
//     },
//     {
//       name: "Data",
//       type: "scatter",
//       data: phOfParacetamol.data,
//       id: "s1",
//       marker: {
//         radius: 1.5,
//       },
//       tooltip: {
//         headerFormat: "<b>{series.name}</b><br>",
//         pointFormat: "pH: {point.x}, Batch: {point.y}",
//       },
//     },
//   ],
//   plotOptions: {
//     series: {
//       pointStart: 1,
//     },
//   },
// };

// const HighchartsHistogramScatter = () => (
//   <HighchartsReact highcharts={Highcharts} options={options} />
// );

// export default HighchartsHistogramScatter;

//second one

// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Histogram from "highcharts/modules/histogram-bellcurve";

// // Initialize the histogram module
// Histogram(Highcharts);

// const phOfParacetamol = {
//   data: [
//     1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8, 2.75,
//     3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1,
//     2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85,
//   ],
//   lsl: 3,
//   usl: 4,
//   heading: "Observation value for pH value of Paracetamol",
//   yAxisTitle: "Number of Batches",
// };

// const options = {
//   chart: {
//     zoomType: "xy",
//   },
//   title: {
//     text: phOfParacetamol.heading,
//   },
//   xAxis: {
//     title: { text: "pH Range" },
//     alignTicks: false,
//     plotLines: [
//       {
//         color: "red",
//         width: 2,
//         value: phOfParacetamol.lsl,
//         label: {
//           text: "LSL",
//           align: "right",
//           style: {
//             color: "red",
//           },
//         },
//       },
//       {
//         color: "red",
//         width: 2,
//         value: phOfParacetamol.usl,
//         label: {
//           text: "USL",
//           align: "left",
//           style: {
//             color: "red",
//           },
//         },
//       },
//     ],
//   },
//   yAxis: {
//     title: { text: phOfParacetamol.yAxisTitle },
//   },
//   series: [
//     {
//       name: "Histogram",
//       type: "histogram",
//       baseSeries: "s1",
//       zIndex: -1,
//       color: "rgba(63,169,245,0.75)",
//       pointPadding: 0,
//       groupPadding: 0,
//     },
//     {
//       name: "Data",
//       type: "scatter",
//       data: phOfParacetamol.data,
//       id: "s1",
//       visible: false,
//     },
//   ],
//   plotOptions: {
//     histogram: {
//       binsNumber: "auto",
//     },
//   },
// };

// const HighchartsHistogramScatter = () => (
//   <HighchartsReact highcharts={Highcharts} options={options} />
// );

// export default HighchartsHistogramScatter;

//only histogram
// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Histogram from "highcharts/modules/histogram-bellcurve";

// // Initialize the histogram module
// Histogram(Highcharts);

// const phOfParacetamol = {
//   data: [
//     1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8, 2.75,
//     3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1,
//     2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85,
//   ],
//   lsl: 2,
//   usl: 4,
//   heading: "Observation value for pH value of Paracetamol",
//   yAxisTitle: "Number of Batches",
// };

// const options = {
//   chart: {
//     type: "column",
//   },
//   title: {
//     text: phOfParacetamol.heading,
//   },
//   xAxis: {
//     title: { text: "pH Range" },
//     alignTicks: false,
//     plotLines: [
//       {
//         color: "red",
//         width: 2,
//         value: phOfParacetamol.lsl,
//         label: {
//           text: "LSL",
//           align: "right",
//           style: {
//             color: "red",
//           },
//         },
//       },
//       {
//         color: "red",
//         width: 2,
//         value: phOfParacetamol.usl,
//         label: {
//           text: "USL",
//           align: "left",
//           style: {
//             color: "red",
//           },
//         },
//       },
//     ],
//   },
//   yAxis: {
//     title: { text: phOfParacetamol.yAxisTitle },
//   },
//   series: [
//     {
//       name: "Number of Batches",
//       data: [],
//     },
//   ],
// };

// const processData = (data) => {
//   // Determine the histogram bins
//   const bins = {};
//   data.forEach((value) => {
//     const bin = Math.floor(value);
//     if (!bins[bin]) {
//       bins[bin] = 0;
//     }
//     bins[bin]++;
//   });

//   return Object.keys(bins).map((bin) => [parseFloat(bin), bins[bin]]);
// };

// const HighchartsHistogramScatter = () => {
//   const histogramData = processData(phOfParacetamol.data);
//   options.series[0].data = histogramData;

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default HighchartsHistogramScatter;

// Perfect one (only histogram)

// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";
// import Histogram from "highcharts/modules/histogram-bellcurve";

// // Initialize the histogram module
// Histogram(Highcharts);

// const phOfParacetamol = {
//   data: [
//     1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8, 2.75,
//     3.45, 3.5, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 3.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1,
//     2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85,
//   ],
//   lsl: 2,
//   usl: 4,
//   heading: "Observation value for pH value of Paracetamol",
//   yAxisTitle: "Number of Batches",
// };

// const options = {
//   chart: {
//     type: "column",
//   },
//   title: {
//     text: phOfParacetamol.heading,
//   },
//   xAxis: {
//     title: { text: "pH Range" },
//     alignTicks: false,
//     categories: ["1-2", "2-3", "3-4", "4-5"],
//     plotLines: [
//       {
//         color: "red",
//         width: 2,
//         value: 0.5, // Index of '2-3' category
//         label: {
//           text: "LSL",
//           align: "right",
//           style: {
//             color: "red",
//           },
//         },
//         zIndex: 5, // Ensure plot line is above the bars
//       },
//       {
//         color: "red",
//         width: 2,
//         value: 2.5, // Index of '4-5' category
//         label: {
//           text: "USL",
//           align: "left",
//           style: {
//             color: "red",
//           },
//         },
//         zIndex: 5, // Ensure plot line is above the bars
//       },
//     ],
//   },
//   yAxis: {
//     title: { text: phOfParacetamol.yAxisTitle },
//     allowDecimals: false,
//     // setExt
//   },
//   series: [
//     {
//       name: "Number of Batches",
//       data: [],
//       groupPadding: 0,
//       pointPadding: 0,
//     },
//   ],
// };

// const processData = (data) => {
//   const bins = { "1-2": 0, "2-3": 0, "3-4": 0, "4-5": 0 };

//   data.forEach((value) => {
//     if (value >= 1 && value < 2) {
//       bins["1-2"]++;
//     } else if (value >= 2 && value < 3) {
//       bins["2-3"]++;
//     } else if (value >= 3 && value < 4) {
//       bins["3-4"]++;
//     } else if (value >= 4 && value < 5) {
//       bins["4-5"]++;
//     }
//   });

//   return Object.keys(bins).map((bin) => bins[bin]);
// };

// const HighchartsHistogram = () => {
//   const histogramData = processData(phOfParacetamol.data);
//   options.series[0].data = histogramData;

//   return <HighchartsReact highcharts={Highcharts} options={options} />;
// };

// export default HighchartsHistogram;

//LAST ONE

import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Histogram from "highcharts/modules/histogram-bellcurve";

// Initialize the histogram module
Histogram(Highcharts);

const phOfParacetamol = {
  data: [
    1.65, 2.7, 3.4, 4.1, 2.2, 2.8, 3.3, 4.0, 1.75, 2.9, 3.5, 4.05, 2.1, 2.85, 3.2, 4.15, 1.8, 2.75,
    3.45, 4.0, 2.25, 2.95, 3.35, 4.1, 1.9, 2.8, 3.5, 4.05, 2.0, 2.9, 3.3, 4.0, 1.7, 2.85, 3.45, 4.1,
    2.15, 2.9, 3.25, 4.0, 1.85, 2.8, 3.4, 4.05, 2.3, 2.95, 3.5, 4.1, 1.75, 2.85, 3.4,3.9,3.4
  ],
  lsl: 2,
  usl: 4,
  heading: "Observation value for pH value of Paracetamol",
  yAxisTitle: "Number of Batches",
};

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

const HighchartsHistogram = () => {
  const { histogramData, averagePhData } = processData(phOfParacetamol.data);

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: phOfParacetamol.heading,
    },
    xAxis: {
      title: { text: "pH Range" },
      alignTicks: false,
      categories: ["1-2", "2-3", "3-4", "4-5"],
      plotLines: [
        {
          color: "red",
          width: 2,
          value: 0.5, // Index of '2-3' category
          label: {
            text: "LSL",
            align: "right",
            style: {
              color: "red",
            },
          },
          zIndex: 5, // Ensure plot line is above the bars
        },
        {
          color: "red",
          width: 2,
          value: 2.5, // Index of '4-5' category
          label: {
            text: "USL",
            align: "left",
            style: {
              color: "red",
            },
          },
          zIndex: 5, // Ensure plot line is above the bars
        },
      ],
    },
    yAxis: {
      title: { text: phOfParacetamol.yAxisTitle },
      allowDecimals: false,
      max: phOfParacetamol.data.length/2.4, // Set yAxis maximum value to 30
    },
    series: [
      {
        name: "Number of Batches",
        data: histogramData,
        groupPadding: 0,
        pointPadding: 0,
      },
      {
        name: "Distribution Curve",
        type: "spline",
        data: histogramData,
        zIndex: 6,
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
