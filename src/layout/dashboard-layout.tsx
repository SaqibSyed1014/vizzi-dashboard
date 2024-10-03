'use client'
import React, {useState} from "react";
import TopBar from "@/components/TopBar";
import {SideBarFiltersWrapper} from "@/components/SideBarFiltersWrapper";
import {DashboardTopFilters} from "@/components/DashboardTopFilters";


export default function DashboardLayout({ children }) {
    const [sidebarExpanded, toggleSidebar] = useState<boolean>(true);

    function togglingSidebar() {
        toggleSidebar(!sidebarExpanded);
    }
    return (
        <>
            <TopBar />
            <SideBarFiltersWrapper isSidebarExpanded={sidebarExpanded} sidebarToggleClicked={togglingSidebar} />
            <div className={`mt-[66px] flex flex-col overflow-hidden transition-all ${sidebarExpanded ? 'ml-[240px]' : 'ml-0'}`}>
                <DashboardTopFilters />
                {children}
            </div>
        </>
    )
}
