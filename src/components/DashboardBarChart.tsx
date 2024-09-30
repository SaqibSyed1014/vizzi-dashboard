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
            formatter: function (val) {
                return val + "%";
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
        tooltip: {
            // intersect: false,
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    };

    const series = [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66,  56, 61, 58]
        },
        {
            name: 'Free Cash Flow',
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
