import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Exporting from "highcharts/modules/exporting";

Exporting(Highcharts);

// Inverse error function implementation
function erfinv(x) {
  var a = 0.147; // Choose a constant
  var the_sign_of_x = x < 0 ? -1 : 1;
  x = (1 - x) * (1 + x);
  var ln = Math.log(x);
  var ln2 = ln * ln;
  var ln4 = ln2 * ln2;
  var t = 2 / (Math.PI * a) + ln / 2;
  var y = (t + Math.sqrt(t * t - ln / a)) * the_sign_of_x;
  return Math.sqrt(y);
}

const ProbabilityHighChart = () => {
  const data = [2.9, 3.5, 3.25, 2.8, 2.45, 3.0, 3.75, 2.9, 3.5, 3.25, 2.8, 2.45, 3.0, 3.75]; // Replace with your actual data

  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const stdev = Math.sqrt(
    data.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / data.length
  );

  const sortedData = data.slice().sort((a, b) => a - b);
  const theoreticalQuantiles = sortedData.map((value, index) => {
    const z = (index + 0.5) / data.length;
    return {
      x: mean + stdev * Math.sqrt(2) * erfinv(2 * z - 1),
      y: value,
    };
  });

  const cp = (4 - 2) / (6 * stdev);
  const cpk = Math.min((4 - mean) / (3 * stdev), (mean - 2) / (3 * stdev));

  const options = {
    title: {
      text: "pH (2) Observed Value Normal Probability Plot",
    },
    xAxis: {
      title: { text: "Theoretical Quantiles" },
    },
    yAxis: {
      title: { text: "Observed Values" },
    },
    series: [
      {
        name: "Data Points",
        type: "scatter",
        data: theoreticalQuantiles.map((point) => [point.x, point.y]),
      },
      {
        name: "Normal Distribution Line",
        type: "line",
        data: theoreticalQuantiles.map((point) => [point.x, point.x]),
        color: "blue",
        marker: { enabled: false },
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
              x: theoreticalQuantiles[Math.floor(data.length / 2)].x,
              y: sortedData[Math.floor(data.length / 2)],
            },
            text: `
                            Mean: ${mean.toFixed(2)}<br>
                            Median: 3.00<br>
                            Mode: 3.00<br>
                            n: 7<br>
                            Cp: ${cp.toFixed(2)}<br>
                            Cpk: ${cpk.toFixed(2)}<br>
                            Stdev: ${stdev.toFixed(2)}<br>
                            Range: ${(Math.max(...data) - Math.min(...data)).toFixed(2)}<br>
                            Min: ${Math.min(...data).toFixed(2)}<br>
                            Max: ${Math.max(...data).toFixed(2)}<br>
                            Z Bench: ${(mean / stdev).toFixed(2)}<br>
                            % Defects: 0.0%<br>
                            PPM: 0.00<br>
                            Exp PPM ST: 36586.97<br>
                            Exp PPM LT: 30738.66<br>
                            Sigma: 3.29
                        `,
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
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ProbabilityHighChart;
