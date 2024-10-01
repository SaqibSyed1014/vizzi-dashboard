'use client'
import React from "react";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const DashboardBarChart :React.FC = () => {
    const labels =  {
        style: {
            fontWeight: 800
        }
    }
    const options = {
        chart: {
            type: 'bar',
            height: 550,
            width: '100%',
            toolbar: {
                show: false
            },
        },
        grid: {
            show: true,
            borderColor: '#E9EAEF',
            column: {
                width: '150px',
            },
            row: {
                width: '700px',
            },
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '36px',
                endingShape: 'rounded',
                dataLabels: {
                    position: 'top', // top, center, bottom
                },
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val :any) {
                return val + "k";
            },
            offsetX: 0,
            offsetY: -18,
            style: {
                fontSize: '10px',
                colors: ["#9CA3AF"]
            }
        },
        stroke: {
            show: true,
            width: 0,
            colors: ['transparent']
        },
        xaxis: {
            labels: labels,
            categories: ['Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23', 'Jan-24'],
        },
        colors: ["#1A2956", '#41CCAD'],
        yaxis: {
            labels: labels,
        },
        fill: {
            opacity: 1
        },
        legend:{
          show: true,
            fontSize: '12px',
          markers: {
              size: 6,
              shape: 'circle'
          }
        },
        tooltip: {
            shared: true,
            followCursor: false,
            absolute: {
                position: 'center',
                offsetY: -50,
            },
            style: {
                backgroundColor: 'red'
            },
            intersect: false,
            custom: function({ series, seriesIndex, dataPointIndex, w }) {
                console.log('check ', series, seriesIndex, dataPointIndex, w)
                return `<div class="tooltip-wrap mt-40">
<!--                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">-->
<!--                                <path d="M0.707106 8.05852L7.70711 1.05852C7.89464 0.870982 8 0.616629 8 0.351412L8 17.1798C8 16.9146 7.89464 16.6603 7.70711 16.4727L0.707107 9.47273C0.316583 9.08221 0.316582 8.44904 0.707106 8.05852Z" fill="red"/>-->
<!--                            </svg>-->
                          <div class="chart-tooltip">
                            <p class="text-[10px]">Click to view details</p>
                            <div class="text-xs">
                                    <div class="flex gap-1 items-center">
                                        <div class="size-2.5 rounded-full" style="background: #41CCAD;"></div>
                                        <p>${w.config.xaxis.categories[dataPointIndex]}: $${series[0][dataPointIndex]}</p>
                                    </div>
                                    <div class="flex gap-1 items-center">
                                        <div class="size-2.5 rounded-full" style="background: #1A2956;"></div>
                                        <p>${w.config.xaxis.categories[dataPointIndex]}: $${series[1][dataPointIndex]}</p>
                                    </div>                            
                            </div>
                          </div>
                         </div>`
            },
        }
    };

    const series = [
        {
            name: 'Previous',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,  56, 61, 58]
        },
        {
            name: 'Current',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 12, 34, 7]
        }
    ];

    return (
        <div className="px-1">
            <ApexChart
                type="bar"
                options={options}
                series={series}
            />
        </div>
    )
}
