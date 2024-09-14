import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartColumn = ({ data }) => {
  const seriesData = data?.map((item) => item['Observed Value']);
  const categories = data?.map((item) => item['Batch No.']);

  const options = {
    chart: {
      type: 'column', // Column chart type
      height: 600, // Increase the height
    },
    title: {
      text: 'Observed Values by Batch',
    },
    xAxis: {
      categories: categories,
      title: {
        text: 'Batch No.',
      },
    },
    yAxis: {
      title: {
        text: 'Observed Value',
      },
    },
    series: [
      {
        name: 'Observed Value',
        data: seriesData,
      },
    ],
    plotOptions: {
      column: {
        dataLabels: {
          enabled: true, // Shows values on top of the columns
        },
      },
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default HighChartColumn;
