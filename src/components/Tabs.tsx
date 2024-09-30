import React, {ReactNode, useState} from "react";

interface TabsProps {
    tabsList: { text: string, info: string, icon: ReactNode }[]
}

export const Tabs :React.FC<TabsProps> = ({ tabsList }) => {
    const [selectedTab, selectTab] = useState<number>(0);

    return (
        tabsList.map((tab, index) => {
                return (
                    <div className="flex flex-col gap-2.5">
                        <div key={index}
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
