import React from 'react';
import {
  Chart as ChartJS,
  DoughnutController,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ReactApexChart from 'react-apexcharts';
import Header from "../Component/Header";
import BottomHeader from "../Component/BottomHeader";

// Define generateData function
const generateData = (timestamp, count, range) => {
  return Array.from({ length: count }, () => ({
    x: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min,
    y: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min,
    r: Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
  }));
};

// Register Chart.js components
ChartJS.register(DoughnutController, ArcElement, Tooltip, Legend);

const Analytics = () => {
  // Data for Doughnut chart
  const doughnutData = {
    labels: [
    'Gray',
    'Sky',
    'Purple'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(128, 128, 128)',  // Gray
      'rgb(135, 206, 235)',  // Sky Blue
      'rgb(216, 191, 216)'   // Light Purple
      ],
      hoverOffset: 4
    }]
  };

  // Data and options for new ApexCharts Polar Area chart
  const polarAreaState = {
    series: [14, 23, 21, 17, 15, 12, 17, 21],
    options: {
      chart: {
        type: 'polarArea',
      },
      stroke: {
        colors: ['#fff']
      },
      fill: {
        opacity: 0.8
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom'
      },
    }
  };
   // Data and options for new ApexCharts Line chart
   const lineChartState = {
    series: [{
      name: 'Sales',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
      },
      forecastDataPoints: {
        count: 7
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
        tickAmount: 10,
        labels: {
          formatter: function(value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
          }
        }
      },
      title: {
        text: 'Forecast',
        align: 'left',
        style: {
          fontSize: "16px",
          color: '#666'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        },
      }
    }
  };
    // Data and options for new ApexCharts bar chart
    const barChartState = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      }
    };
   // Data and options for new Bar chart
const inflationChartState = {
  series: [{
    name: 'Inflation',
    data: [2.3, 3.1, 4.0, 10.1, 10, 9, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
  }],
  options: {
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      position: 'top',
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          }
        }
      },
      tooltip: {
        enabled: true,
      }
    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val + "%";
        }
      }
    },
    title: {
      text: 'Monthly Inflation in Argentina, 2002',
      floating: true,
      offsetY: 330,
      align: 'center',
      style: {
        color: '#444'
      }
    }
  }
};


  
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <BottomHeader />
      <div className="flex flex-row  justify-center items-center gap-10  m-10">

           <div className=" chart-container flex flex-wrap justify-center items-center w-1/2 h-96 bg-white shadow-lg p-6">
            <Doughnut data={doughnutData} />
           </div>

          <div className="line1chart-container flex w-1/2 justify-center items-center bg-white shadow-lg h-96 ">
            <ReactApexChart options={polarAreaState.options} series={polarAreaState.series} type="polarArea" width="425px" />
          </div>
      </div>


      <div className="flex flex-row justify-center items-center gap-10 m-10">
          <div className="chart-container flex justify-center items-center w-1/2 bg-white shadow-lg p-6">
            <ReactApexChart options={lineChartState.options} series={lineChartState.series} type="line" height={350} width={340} />
          </div>
          <div className="line4 chart-container flex justify-center items-center w-1/2 bg-white shadow-lg p-6">
            <ReactApexChart className="p-34" options={barChartState.options} series={barChartState.series} type="bar" height={350} />
          </div>
        </div>
        
      <div className="line5 flex flex-row justify-center items-center gap-10 m-10">
        <div className="chart-container flex justify-center items-center w-2/2 bg-white shadow-lg p-6">
        <ReactApexChart options={inflationChartState.options} series={inflationChartState.series} type="bar" height={350} width={600} />
        </div>
      </div>
      </div>
  </>
  );
};

export default Analytics;
