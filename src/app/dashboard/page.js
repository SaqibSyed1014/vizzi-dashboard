import {Button} from "@/components/Button";
import ArrowLeftIcon from '@/assets/svgs/icon-arrow-left.svg'
import ColumnChartIcon from '@/assets/svgs/icon-column-chart.svg'
import LineChartIcon from '@/assets/svgs/icon-line-chart.svg'
import PieChartIcon from '@/assets/svgs/icon-pie-chart.svg'
import BarChartIcon from '@/assets/svgs/icon-bar-chart.svg'
import {FilterHorizontalTabs} from "@/components/FilterHorizontalTabs";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import CaretUpIcon from "@/assets/svgs/icon-carret-up.svg";
import React from "react";

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

    return (
        <div className="dashboard-padding">
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
                            <CaretUpIcon className="text-white" />
                        </MenuButton>
                        <MenuItems anchor={{ to: 'bottom start', gap: '10px' }} className="w-[225px] menu-items">
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

                    <PreviousViewBtn />
                </div>

                <FilterHorizontalTabs tabItems={chartTypes} preSelectedValue={chartTypes[0].value} />
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
