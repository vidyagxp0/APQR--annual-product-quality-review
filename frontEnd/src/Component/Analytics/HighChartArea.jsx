import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartArea = ({ data }) => {
  const categories = data?.map((item) => item['Batch No.']);
  const seriesData = data?.map((item) => item['Observed Value']);

  const options = {
    chart: {
      type: 'area',
      height: 500, // Increase height
    },
    title: {
      text: 'Observed Values by Batch (Area)',
    },
    accessibility: {
      description: 'An area chart comparing observed values for various batches.',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Batch No.',
      },
      accessibility: {
        rangeDescription: 'Range: Batches in the dataset.',
      },
    },
    yAxis: {
      title: {
        text: 'Observed Value',
      },
    },
    tooltip: {
      pointFormat: '{series.name} had an observed value of <b>{point.y}</b> in {point.x}',
    },
    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true,
            },
          },
        },
      },
    },
    series: [
      {
        name: 'Observed Value',
        data: seriesData,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighChartArea;
