import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighChartDonut = ({ data }) => {
  const seriesData = data?.map((item) => ({
    name: item['Batch No.'],
    y: item['Observed Value'],
  }));

  const donutOptions = {
    chart: {
      type: 'pie',
      height: 500, // Increase height
    },
    title: {
      text: 'Observed Values by Batch (Donut)',
    },
    plotOptions: {
      pie: {
        innerSize: '50%', // This makes it a donut chart
        dataLabels: {
          enabled: true,
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

  return <HighchartsReact highcharts={Highcharts} options={donutOptions} />;
};

export default HighChartDonut;
