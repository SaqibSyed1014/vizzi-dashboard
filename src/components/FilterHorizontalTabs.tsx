'use client'
import React, {useEffect, useState} from "react";

interface FilterTabsProps {
    tabItems : { text: string, value: string, icon?: React.ReactNode }[]
    preSelectedValue: string
}

export const FilterHorizontalTabs :React.FC<FilterTabsProps> = ({ tabItems, preSelectedValue }) => {
    const [selectedTab, selectTabFilter] = useState('');

    useEffect(() => {
        selectTabFilter(preSelectedValue);
    }, [preSelectedValue]);

    return (
        <div className="rounded-outline">
            <div className="flex gap-2.5 font-normal">
                {tabItems.map((tab, index) => {
                    return (
                        <div
                            key={index}
                            className={`flex gap-1.5 items-center px-1.5 py-[3px] rounded-md cursor-pointer text-xs 2xl:text-sm transition ${selectedTab === tab.value ? 'bg-blue text-white':'hover:bg-hover-blue'}`}
                            onClick={() => selectTabFilter(tab.value)}
                        >
                            {tab.icon !== undefined ? tab.icon : '' }
                            {tab.text}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
