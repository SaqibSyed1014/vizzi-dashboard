'use client'
import React from "react";
import InfoIcon from '@/assets/svgs/icon-info.svg';
import ChevronLeftIcon from "@/assets/svgs/icon-chevron-left.svg";
import dynamic from "next/dynamic";

const SideBarFilters = dynamic(() => import('../components/SideBarFilters').then(comp => comp.SideBarFilters), {
    ssr: false
})

interface SidebarWrapperProps {
    isSidebarExpanded: boolean,
    sidebarToggleClicked: () => void
}

export const SideBarFiltersWrapper :React.FC<SidebarWrapperProps> = ({ isSidebarExpanded, sidebarToggleClicked }) => {
    return (
        <aside className={`fixed top-[66px] left-0 h-[calc(100vh_-_66px)] transition-all ${isSidebarExpanded ? 'w-[240px] border-r border-grey-medium' : 'w-0'}`}>
            <div className="sidebar-inner overflow-auto h-full py-6 px-4">
                <div className={`flex flex-col gap-2 transition ${isSidebarExpanded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-between text-xs 2xl:text-sm">
                        <p className="font-bold">Filters</p>
                        <p className="text-blue">Clear All</p>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-grey-medium p-1">
                        <InfoIcon/>
                        <p className="text-xs 2xl:text-sm">Viewing Last 12 months</p>
                    </div>

                    <SideBarFilters/>
                </div>
            </div>

            <div onClick={sidebarToggleClicked} className={`${isSidebarExpanded ? '-right-1' : '-right-5'} absolute z-50 top-1/2 -translate-y-1/2 h-10 w-5 bg-white rounded-l border border-grey-medium border-r-0 flex justify-center items-center cursor-pointer hover:bg-gray-100 transition`}>
                <ChevronLeftIcon className={`${isSidebarExpanded ? '' : 'rotate-180'}`} />
            </div>
        </aside>
    )
}
