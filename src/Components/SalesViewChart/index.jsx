import React, { useState } from 'react'
import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts"
import { SaleViewWrapper } from './styles'
const SalesView = () => {
  const [state, setState] = useState({
          
    series: [{
      name: 'Inflation',
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 11, 2.3, 1.4, 5, 0.5, 4]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {

          borderRadius: 2,
          backgound:"red",
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
          colors: ["#142430"]
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
        text: 'Monthly Sales of Courses, 2021 - present',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#161515'
        }
      }
    },
  
  
  })

 



  return (
    <SaleViewWrapper>
    
    <div id="chart">
    <ReactApexChart options={state.options}  series={state.series} type="bar" height={350} />
    </div>
    </SaleViewWrapper>
  )
}

export default SalesView