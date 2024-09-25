import React from "react";
import InfoIcon from '@/assets/svgs/icon-info.svg';
import {SideBarFilters} from "@/components/SideBarFilters";

export const SideBarFiltersWrapper :React.FC = () => {
    return (
        <aside className="fixed top-[66px] left-0 w-[240px] h-[calc(100vh_-_66px)] border-r border-grey-medium py-6 px-4 overflow-y-auto">
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs 2xl:text-sm">
                    <p className="font-bold">Filters</p>
                    <p className="text-blue">Clear All</p>
                </div>

                <div className="flex items-center gap-1 rounded-md bg-grey-medium p-1">
                    <InfoIcon />
                    <p className="text-xs 2xl:text-sm">Viewing Last 12 months</p>
                </div>

                <SideBarFilters />
            </div>
        </aside>
    )
}
