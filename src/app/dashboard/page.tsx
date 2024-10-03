'use client'
import PaidIcon from '@/assets/svgs/icon-paid.svg'
import UnpaidIcon from '@/assets/svgs/icon-unpaid.svg'
import TotalIcon from '@/assets/svgs/icon-total.svg'
import { Menu, MenuButton } from '@headlessui/react'
import CaretUpIcon from "@/assets/svgs/icon-carret-up.svg";
import React, {useState} from "react";
import {DashboardHeaderBar} from "@/components/DashboardHeaderBar";
import {Button} from "@/components/Button";
import dynamic from "next/dynamic";

const Tabs = dynamic(() => import('../../components/Tabs').then(comp => comp.Tabs), {
    ssr: false
})
const FilterHorizontalTabs = dynamic(() => import('../../components/FilterHorizontalTabs').then(comp => comp.FilterHorizontalTabs), {
    ssr: false
})
const DashboardBarChart = dynamic(() => import('../../components/DashboardBarChart').then(comp => comp.DashboardBarChart), {
    ssr: false
})
const ArrowLeftIcon = dynamic(() => import('../../assets/svgs/icon-arrow-left.svg'), {
    ssr: false
})
const ColumnChartIcon = dynamic(() => import('../../assets/svgs/icon-column-chart.svg'), {
    ssr: false
})
const LineChartIcon = dynamic(() => import('../../assets/svgs/icon-line-chart.svg'), {
    ssr: false
})
const PieChartIcon = dynamic(() => import('../../assets/svgs/icon-pie-chart.svg'), {
    ssr: false
})
const BarChartIcon = dynamic(() => import('../../assets/svgs/icon-bar-chart.svg'), {
    ssr: false
})
const MenuItems = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItems), {
    ssr: false
});
const MenuItem = dynamic(() => import('@headlessui/react').then(mod => mod.MenuItem), {
    ssr: false
});


interface ChartSeries {
    name: string
    data: number[]
}
export default function Dashboard() {
    const chartTypes = [
        {
            text: 'Column Chart',
            value: 'column-chart',
            icon: <ColumnChartIcon />
        },
        {
            text: 'Line Chart',
            value: 'line-chart',
            icon: <LineChartIcon />
        },
        {
            text: 'Pie Chart',
            value: 'pie-chart',
            icon: <PieChartIcon />
        },
        {
            text: 'Bar Chart',
            value: 'bar-chart',
            icon: <BarChartIcon />
        }
    ];

    const tabs = [
        {
            text: 'Paid',
            icon: <PaidIcon />,
            info: '34.2k'
        },
        {
            text: 'Unpaid',
            icon: <UnpaidIcon />,
            info: '0'
        },
        {
            text: 'Total',
            icon: <TotalIcon />,
            info: '34.2k'
        }
    ];

    const paidStats :ChartSeries[] = [
            {
                name: 'Previous',
                data: [44, 55, 57, 56, 9, 58, 63, 60, 35,  56, 99, 58]
            },
            {
                name: 'Current',
                data: [20, 41, 29, 26, 45, 10, 52, 66, 41, 12, 34, 7]
            }
        ]

    const unpaidStats :ChartSeries[] = [
        {
            name: 'Previous',
            data: [0, 29, 57, 89, 36, 58, 63, 60, 90,  56, 61, 13]
        },
        {
            name: 'Current',
            data: [35, 23, 36, 26, 45, 48, 52, 53, 0, 12, 34, 43]
        }
    ]

    const totalStats :ChartSeries[] = [
        {
            name: 'Previous',
            data: [12, 35, 57, 3, 61, 0, 63, 89, 22,  0, 61, 58]
        },
        {
            name: 'Current',
            data: [7, 41, 15, 26, 50, 48, 78, 53, 41, 19, 34, 7]
        }
    ]

    const [selectedChartTab, selectChartTab] = useState<number>(0);

    function updateChartTabs(index :number) {
        selectChartTab(index);
    }

    return (
        <div className="flex flex-col h-[calc(100vh_-_66px_-_105px)]">
            <DashboardHeaderBar title="Suppliers" />

            <div className="dashboard-padding flex-1 flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center">
                        <Button
                            type='button'
                            label=''
                            isSecondary={true}
                            hasIcon={true}
                            icon={<ArrowLeftIcon/>}
                        />

                        <Menu>
                            <MenuButton className="btn-wrap bg-primary text-white">
                                <div className="bg-blue size-2 rounded-full"></div>
                                <span>
                                View
                                <b> Suppliers</b>
                            </span>
                                <CaretUpIcon className="text-white"/>
                            </MenuButton>
                            <MenuItems anchor={{to: 'bottom start', gap: '10px'}} className="w-[225px] menu-items">
                                <MenuItem>
                                    <div className="menu-item item-header">
                                        View
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="menu-item">
                                        Total Purchases
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="menu-item">
                                        Top Suppliers
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="menu-item">
                                        Average Days to Pay
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="menu-item">
                                        Table View
                                    </div>
                                </MenuItem>
                            </MenuItems>
                        </Menu>

                        <PreviousViewBtn/>
                    </div>

                    <FilterHorizontalTabs tabItems={chartTypes} preSelectedValue={chartTypes[0].value}/>
                </div>

                <div className="flex gap-3 pt-6 border-b border-grey-medium">
                    <Tabs tabsList={tabs} getCurrentTabIndex={updateChartTabs} />
                </div>

                <div className="flex-1 px-1">
                    {selectedChartTab === 0 && <DashboardBarChart series={paidStats}/>}
                    {selectedChartTab === 1 &&  <DashboardBarChart series={unpaidStats}/>}
                    {selectedChartTab === 2 &&  <DashboardBarChart series={totalStats}/>}
                </div>
            </div>
        </div>
    )
}


function PreviousViewBtn() {
    return (
        <div className="flex items-center ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none">
                <path d="M0.707106 8.05852L7.70711 1.05852C7.89464 0.870982 8 0.616629 8 0.351412L8 17.1798C8 16.9146 7.89464 16.6603 7.70711 16.4727L0.707107 9.47273C0.316583 9.08221 0.316582 8.44904 0.707106 8.05852Z" fill="#E9EAEF"/>
            </svg>
            <div className="text-sm bg-grey-light py-2 px-4 rounded flex justify-center items-center">
                previous view
            </div>
        </div>
    )
}
