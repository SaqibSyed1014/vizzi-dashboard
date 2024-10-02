'use client'
import React, {useState} from "react";
import TopBar from "@/components/TopBar";
import dynamic from "next/dynamic";
const SideBarFiltersWrapper = dynamic(() => import('../components/SideBarFiltersWrapper').then(comp => comp.SideBarFiltersWrapper), {
    ssr: false
})
const DashboardTopFilters = dynamic(() => import('../components/DashboardTopFilters').then(comp => comp.DashboardTopFilters), {
    ssr: false
})


export default function DashboardLayout({ children }) {
    const [sidebarExpanded, toggleSidebar] = useState(true);

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
