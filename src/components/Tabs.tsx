'use client'
import React, {ReactNode, useEffect, useState} from "react";

interface TabsProps {
    tabsList: { text: string, info: string, icon: ReactNode }[]
    getCurrentTabIndex?: (index :number) => void
}

export const Tabs :React.FC<TabsProps> = ({ tabsList, getCurrentTabIndex }) => {
    const [selectedTab, selectTab] = useState<number>(0);

    useEffect(() => {
        if (getCurrentTabIndex) {
            getCurrentTabIndex(selectedTab);
        }
    }, [selectedTab]);

    return (
        tabsList.map((tab, index) => {
                return (
                    <div key={index} className="flex flex-col gap-2.5">
                        <div
                             className='flex gap-2 items-center text-sm cursor-pointer' onClick={() => selectTab(index)}>
                            <div className="size-6 bg-grey-medium rounded flex justify-center items-center">
                                {tab.icon}
                            </div>
                            <p className="font-bold uppercase">{tab.text}</p>
                            <p className="font-normal">({tab.info})</p>
                        </div>

                        <div className={`w-full h-0.5 ${selectedTab === index ? 'bg-blue' : 'bg-transparent' }`}></div>
                    </div>
                )
            })
    )
}
