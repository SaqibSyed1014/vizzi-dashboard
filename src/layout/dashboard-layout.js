'use client'
import React, {useState} from "react";
import TopBar from "@/components/TopBar";
import {SideBarFiltersWrapper} from "@/components/SideBarFiltersWrapper";
import {DashboardTopFilters} from "@/components/DashboardTopFilters";
import {DashboardHeaderBar} from "@/components/DashboardHeaderBar";
import ChevronLeftIcon from "@/assets/svgs/icon-chevron-left.svg";


export default function DashboardLayout({ children }) {
    const [sidebarExpanded, toggleSidebar] = useState(true);

    function togglingSidebar() {
        toggleSidebar(!sidebarExpanded);
    }
    return (
        <>
            <TopBar />
            <SideBarFiltersWrapper isSidebarExpanded={sidebarExpanded} sidebarToggleClicked={togglingSidebar} />
            <div className={`mt-[66px] overflow-auto transition-all ${sidebarExpanded ? 'ml-[240px]' : 'ml-0'}`}>
                <DashboardTopFilters />
                {children}
            </div>
        </>
    )
}
