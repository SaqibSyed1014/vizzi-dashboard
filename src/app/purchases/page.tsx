'use client'

import {Button} from "@/components/Button";
import ArrowLeftIcon from '@/assets/svgs/icon-arrow-left.svg'
import PaidIcon from '@/assets/svgs/icon-paid.svg'
import UnpaidIcon from '@/assets/svgs/icon-unpaid.svg'
import TotalIcon from '@/assets/svgs/icon-total.svg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import CaretUpIcon from "@/assets/svgs/icon-carret-up.svg";
import React, {useState} from "react";
import {Tabs} from "@/components/Tabs";
import {DashboardHeaderBar} from "@/components/DashboardHeaderBar";
import {PurchaseTable} from "@/components/PurchaseTable";
import ChevronLeftIcon from "@/assets/svgs/icon-chevron-left.svg";
import ChevronRightIcon from "@/assets/svgs/icon-chevron-right.svg";
import SearchIcon from "@/assets/svgs/icon-search.svg";

export default function Purchases() {
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
    ]

    const quantityOptions = [10, 20, 25, 50];

    return (
        <div className="overflow-hidden">
            <DashboardHeaderBar title="Purchases" />

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
                            <MenuButton className="btn-wrap bgwhite text-blue border border-blue">
                                <div className="bg-[#2EA41B] size-2 rounded-full"></div>
                                <b> Contact</b>
                                <CaretUpIcon className="text-blue"/>
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
                    </div>

                    <div className="flex gap-2">
                        <div className="relative">
                            <input type="search" placeholder="Search" className="btn-wrap w-[300px] !pl-9"/>
                            <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
                        </div>
                        <Menu>
                            <MenuButton className="btn-wrap bgwhite text-blue border border-blue">
                                <b> Filter Table Columns</b>
                                <CaretUpIcon className="text-blue" />
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
                    </div>
                </div>

                <div className="flex gap-3 pt-6 border-b border-grey-medium">
                    <Tabs tabsList={tabs}/>
                </div>

                <div className="flex flex-col gap-6">
                    <PurchaseTable />
                    <div className="flex justify-between">
                        <div className="flex items-center gap-3 font-normal">
                            <p>Showing</p>
                            <Menu>
                                <MenuButton className="btn-wrap gap-2 text-sm">
                                    <span>3</span>
                                </MenuButton>
                                <MenuItems anchor={{ to: 'bottom end', gap: '10px' }} className="w-[47px] menu-items">
                                    {quantityOptions.map((val) => (
                                        <MenuItem key={val}>
                                            <div className="menu-item text-center">
                                                {val}
                                            </div>
                                        </MenuItem>
                                    ))}
                                </MenuItems>
                            </Menu>
                            <p>rows</p>
                        </div>

                        <div>
                            <ul className="table-pagination">
                                <li className="rounded-l !w-auto">
                                    <ChevronLeftIcon />
                                </li>
                                <li className="active">1</li>
                                <li>2</li>
                                <li>3</li>
                                <li className="dots">...</li>
                                <li>8</li>
                                <li>9</li>
                                <li>10</li>
                                <li className="rounded-r !w-auto">
                                    <ChevronRightIcon />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
