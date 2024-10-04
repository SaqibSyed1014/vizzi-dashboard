'use client'
import React, {useRef} from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    Legend,
    Tooltip,
    ChartEvent, ActiveElement, Chart
} from "chart.js";
// import { ApexOptions } from "apexcharts";
import { useRouter } from "next/navigation";
import { ChartOptions } from "chart.js";

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement, Legend, Tooltip
)

interface ChartProps {
    series: { name: string, data: number[], bgColor: string }[]
}

export const DashboardBarChart :React.FC<ChartProps> = ({ series }) => {
    const router = useRouter();
    const myChart = useRef<any>();

    const labels =  {
        style: {
            fontWeight: 800
        }
    }

    const data = {
        labels:  ['Feb-23', 'Mar-23', 'Apr-23', 'May-23', 'Jun-23', 'Jul-23', 'Aug-23', 'Sep-23', 'Oct-23', 'Nov-23', 'Dec-23', 'Jan-24'],
        datasets: series.map((item) => ({
            label: item.name,
            data: item.data,
            tension: 0.1,
            backgroundColor: item.bgColor
        }))
    };

    const chartOptions :ChartOptions<"bar"> = {
        maintainAspectRatio: false,
        animation: false,
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            x: {
                grid: {
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                },
                ticks: {
                    color: 'black',
                    textStrokeWidth: .5,
                    textStrokeColor: 'black',
                }
            },
            y: {
                ticks: {
                    color: 'black',
                    textStrokeWidth: .5,
                    textStrokeColor: 'black',
                }
            }
        },
        onClick(event: ChartEvent, elements: ActiveElement[], chart: Chart) {
            const activePoints = myChart.current?.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
            if (activePoints?.length > 0) {
                router.push('/purchases');
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                    boxHeight: 8
                }
            },
            tooltip: {
                enabled: true,
                xAlign: 'left',
                yAlign: 'center',
                backgroundColor: 'white',
                titleColor: 'black',
                displayColors: true,
                boxWidth: 15,
                bodyColor: 'black',
                usePointStyle: true,
                callbacks: {
                    title: () => `Click to view details`,
                    labelPointStyle: function() {
                        return {
                            pointStyle: 'circle',
                            rotation: 0
                        };
                    }
                }
            }
        }
    }

    return (
            <Bar
                ref={myChart}
                data={data}
                options={chartOptions}
            />
    )
}
